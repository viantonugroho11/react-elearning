import React,{useEffect} from 'react'
import Header from '../../compenent/guru/Header'
import Menu from '../../compenent/guru/Menu'
import SideBar from '../../compenent/guru/SideBar'
import axios from 'axios'
// import { Link } from "react-router-dom";
// import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
//import hook history dari react router dom
import { useHistory, useParams } from "react-router-dom";
//import hook useState from react
import { useState } from 'react';
import swal from 'sweetalert'
import Footer from '../../compenent/Footer'

function EditSoalGuru() {
  const [nama, setNama] = useState('');
  const [file, setFile] = useState();
  const [soal, setSoal] = useState('');
  const [batas, setBatas] = useState('');
  const { id } = useParams();
  //state validation
  const [validation, setValidation] = useState({});

  //token
  const token = localStorage.getItem("token");

  //history
  const history = useHistory();

  //method getdatasoalbyid
  const getDataSoalById = async () => {
    //auth
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    //fetching
    const response = await axios.get(`http://appsiaksd.ugcorpusskkni.online/api/guru/tugas/${id}`);
    //get response data
    const data = await response.data.data;
    console.log(data.nama_soal);
    //assign response data to state "posts"
    setNama(data.nama_soal);
    setSoal(data.isi_soal);
    setBatas(data.batas_soal);
  }


  //method "storePost"
  const storePost = async (e) => {
    e.preventDefault();

    //auth
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    //send data to server
    //initialize formData
    const formData = new FormData();

    //append data to formData
    // formData.append('jadwal_id', id);
    formData.append('nama_soal', nama);
    formData.append('isi_soal', soal);
    formData.append('batas_soal', batas);
    formData.append('file', file);
    await axios.post(`http://appsiaksd.ugcorpusskkni.online/api/guru/tugas/${id}`, formData)
      .then(() => {

        swal("Berhasil", "Data berhasil ditambahkan", "success");
        //redirect
        history.push('/guru/soal/' + id);

      })
      .catch((error) => {
        swal("Gagal", error.response.data.message, "error");
        // console.log(res);
        console.log(error.response.data);
        //assign validation on state
        setValidation(error.response.data);
      })

  };
  useEffect(() => {
    getDataSoalById();
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
                    <h4>Form Data Soal</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Form Data Soal </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            {/* Default Basic Forms Start */}
            <div className="pd-20 card-box mb-30">
              <div className="clearfix">
                <h4 className="h4 text-blue">Form Soal</h4>
                <p>Isilah Data tersebut dengan benar !</p>
                {
                  validation.message && (
                    <div className="alert alert-danger">
                      {validation.message}
                    </div>
                  )
                }
                <form onSubmit={storePost}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Isi Soal</label>
                        <textarea value={soal} onChange={(e) => setSoal(e.target.value)} className="form-control" type="text" placeholder="Masukkan Masukkan Isi Soal" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Nama Soal</label>
                        <input value={nama} onChange={(e) => setNama(e.target.value)} className="form-control" type="text" placeholder="Masukkan Nama Soal " />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Batas Soal</label>
                        <input value={batas} onChange={(e) => setBatas(e.target.value)} className="form-control" type="date" placeholder="Masukkan Batas Soal Anda" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Pilih Soal</label>
                    <input onChange={(e) => setFile(e.target.files[0])} type="file" className="form-control" />
                  </div>
                  <div className="clearfix">
                    <div className="pull-right">
                      {/* <a href="#horizontal-basic-form1" className="btn btn-primary btn-sm scroll-click" rel data-toggle="collapse" role="button"><i className="icon-copy fi-save" />Simpan</a>
                     */}
                      <button type="submit" className="btn btn-primary btn-sm"><i className="icon-copy fi-save" />Simpan</button>
                    </div>
                  </div>
                </form>

              </div>
            </div>
            {/* Input Validation End */}
          </div>
          <Footer />
        </div>
      </div>

    </div>
  )
}
export default EditSoalGuru