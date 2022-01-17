import React from 'react'
import Header from '../../compenent/guru/Header'
import Menu from '../../compenent/guru/Menu'
import SideBar from '../../compenent/guru/SideBar'
// import DataTable from 'react-data-table-component';
// import { Link } from "react-router-dom";
//import hook useState dan useEffect from react
import { useState, useEffect } from 'react';
//import axios
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import Footer from '../../compenent/Footer';
import swal from 'sweetalert';
function NilaiSoal() {
  //define history
  const history = useHistory();


  //state user
  // const [user, setUser] = useState([]);
  //state jawab
  const [isijawab, setIsiJawab] = useState('');
  const [filejawab, setFileJawab] = useState('');

  const [nilai, setNilai] = useState('');
  //token
  const token = localStorage.getItem("token");
  //get params
  const { id } = useParams();
  //function "fetchData"
  const fetchData = async () => {
    //set axios header dengan type Authorization + Bearer token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    //fetch user from Rest API
    const response = await axios.get(`http://appsiaksd.ugcorpusskkni.online/api/guru/nilai/${id}`)
    const data = await response.data.data;
    console.log(data);
    console.log(data.jawab_soal);
    // set response isi to state
    setIsiJawab(data.jawab_soal);
    setFileJawab(data.file_jawab_soal);
    setNilai(data.nilai_soal);
  }

  //store data
  const storeData = async (e) => {
    e.preventDefault();
    //set axios header dengan type Authorization + Bearer token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    // form data
    await axios.put(`http://appsiaksd.ugcorpusskkni.online/api/guru/nilai/${id}`, {
      nilai_soal: nilai
    })
      .then((response) => {
        console.log(response.data);
        swal("Berhasil!", "Berhasil Menambahkan Nilai", "success");
        //redirect halaman login
        history.goBack();
      })
      .catch((error) => {
        swal("Gagal!", "Gagal Menambahkan Nilai", "error");
        console.log(error);
      })
  }


  //hook useEffect
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <SideBar />
      <Menu />
      <div className="main-container">
        <div className="pd-ltr-20 xs-pd-20-10">
          <div className="min-height-200px">
            <div className="page-header">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="title">
                    <h4>Nilai Soal</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                      {/* <li className="breadcrumb-item"><a href="index.html">E-learning</a></li> */}
                      <li className="breadcrumb-item active" aria-current="page">Pengumpulan Tugas</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            {/* Default Basic Forms Start */}
            <div className="pd-20 card-box mb-30">
              <div className="clearfix">
                <h4 className="h4 text-blue">Form Penilaian</h4>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Isi Jawaaban</label>
                      <textarea readOnly={true} value={isijawab} className="form-control" type="text" placeholder="Masukkan Masukkan Isi Soal" />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Pilih Soal</label>
                  {/* button download */}
                  <br />
                  <a href={`http://appsiaksd.ugcorpusskkni.online/api/guru/download/${filejawab}`} className="btn btn-primary">Download</a>
                  {/* <button className="btn btn-primary" onClick={() => history.push(`/guru/pengumpulan-tugas/soal/${id}`)}>Kembali</button> */}
                  {/* <input type="file" className="form-control" /> */}
                </div>
                <form onSubmit={storeData}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Nilai</label>
                      <input value={nilai} onChange={(e) => setNilai(e.target.value)} className="form-control" type="text" placeholder="Masukkan Nama Soal " />
                    </div>
                  </div>
                </div>
                <div className="clearfix">
                  <div className="pull-right">
                    <button type="submit" className="btn btn-primary btn-sm">Simpan</button>
                  </div>
                </div>
                </form>
              </div>
              {/* Input Validation End */}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}
export default NilaiSoal