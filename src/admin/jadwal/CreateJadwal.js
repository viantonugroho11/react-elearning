import React, { useEffect } from 'react'
import Header from '../../compenent/Header'
import Menu from '../../compenent/Menu'
import SideBar from '../../compenent/SideBar'
import axios from 'axios'
// import { Link } from "react-router-dom";
//import hook history dari react router dom
import { useHistory } from "react-router-dom";
//import hook useState from react
import { useState } from 'react';
import swal from 'sweetalert'
import Footer from '../../compenent/Footer'
// import M from 'minimatch'
function CreateJadwal() {
  const [pelajaran, setPelajaran] = useState('');
  const [kelas, setKelas] = useState('');
  const [guru, setGuru] = useState('');

  //setdata
  const [dataGuru, setDataGuru] = useState([])
  const [dataKelas, setDataKelas] = useState([])
  const [dataPelajaran, setDataPelajaran] = useState([])
  //state validation
  const [validation, setValidation] = useState([]);

  //history
  const history = useHistory();

  //token
  const token = localStorage.getItem("token");
  //method "storePost"
  const storePost = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('pelajaran', pelajaran);
    formData.append('kelas', kelas);
    formData.append('guru', guru);

    //set axios header dengan type Authorization + Bearer token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    //send data to server
    await axios.post('http://appsiaksd.ugcorpusskkni.online/api/admin/jadwal', formData)
      .then(() => {
        
        swal("Berhasil", "Data berhasil ditambahkan", "success");
        //redirect
        history.push('/admin/jadwal');

      })
      .catch((error) => {
        swal("Gagal", error.response.data.message, "error");
        //assign validation on state
        setValidation(error.response.data);
      })

  };

  //method "getDataGuru"
  const GetGuru = async () => {
    //set axios header dengan type Authorization + Bearer token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    await axios.get('http://appsiaksd.ugcorpusskkni.online/api/admin/guru')
      .then(res => {
        const dataGuru = res.data.data;
        setDataGuru(dataGuru);
      })
      .catch(err => {
        console.log(err)
      })
  }

  //method "getDataKelas"
  const GetKelas = async () => {
    //set axios header dengan type Authorization + Bearer token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    await axios.get('http://appsiaksd.ugcorpusskkni.online/api/admin/kelas')
      .then(res => {
        const dataKelas = res.data.data
        setDataKelas(dataKelas)
      })
      .catch(err => {
        console.log(err)
      })
  }

  //method "getDataPelajaran"
  const GetPelajaran = async () => {
    //set axios header dengan type Authorization + Bearer token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    await axios.get('http://appsiaksd.ugcorpusskkni.online/api/admin/pelajaran')
      .then(res => {
        const dataPelajaran = res.data.data
        setDataPelajaran(dataPelajaran)
      })
      .catch(err => {
        console.log(err)
      })
  }


  useEffect(() => {
    GetGuru()
    GetKelas()
    GetPelajaran()
  }, [])


  return (
    <div>
      <Header />
      <Menu />
      <SideBar />
      <div className="main-container">
        <div className="pd-ltr-20 xs-pd-20-10">
          <div className="min-height-200px">
            <div className="page-header">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="title">
                    <h4>Form Data Jadwal Pelajaran</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Form Data Jadwal Pelajaran</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            {/* Default Basic Forms Start */}
            <div className="pd-20 card-box mb-30">
              <div className="clearfix">
                <div className="pull-left">
                  <h4 className="text-blue h4">Form Jadwal Pelajaran</h4>
                  <p className="mb-30">Isilah data tersebut dengan benar !</p>
                  {
                    validation.message && (
                      <div className="alert alert-danger">
                        {validation.message}
                      </div>
                    )
                  }
                </div>
              </div>
              <form onSubmit={storePost}>
                <div className="form-group">
                  <label>Pelajaran</label>
                  <select value={pelajaran} onChange={(e) => setPelajaran(e.target.value)} className="custom-select col-12">
                    return (
                    {dataPelajaran.map((data, index) => {
                      return (
                        <option key={index} value={data.id}>{data.nama_pelajaran}</option>
                      )
                    })}
                    );
                    {/* <option selected>Pilihan</option>
                    <option value={1}>Laki - laki</option>
                    <option value={2}>Perempuan</option> */}
                  </select>
                </div>
                <div className="form-group">
                  <label>Kelas</label>
                  <select value={kelas} onChange={(e) => setKelas(e.target.value)} className="custom-select col-12">
                    return (
                    {dataKelas.map((data, index) => {
                      return (
                        <option key={index} value={data.id}>{data.nama_kelas}</option>
                      )
                    })}
                    );
                  </select>
                </div>
                <div className="form-group">
                  <label>Guru</label>
                  <select value={guru} onChange={(e) => setGuru(e.target.value)} className="custom-select col-12">
                    return (
                    {dataGuru.map((data, index) => {
                      return (
                        <option key={index} value={data.id}>{data.nama_guru}</option>
                      )
                    })}
                    );
                  </select>
                </div>
                <div className="clearfix">
                  <div className="pull-right">
                    <button className="btn btn-primary btn-sm scroll-click" type="submit">Simpan</button>
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
  )
}
export default CreateJadwal
