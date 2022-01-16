import React from 'react'
import Header from '../../compenent/guru/Header'
import Menu from '../../compenent/guru/Menu'
import SideBar from '../../compenent/guru/SideBar'
// import DataTable from 'react-data-table-component';
// import { Link } from "react-router-dom";
//import hook useState dan useEffect from react
import { useState, useEffect } from 'react';
// import useParams
import { useParams } from 'react-router-dom';
//import axios
import axios from 'axios';
import Footer from '../../compenent/Footer';
function ShowUjianGuru() {
  //define state
  const [soalujian, setSoalUjian] = useState([]);
  const [ujian, setUjian] = useState([]);
  // const [pel, setPel] = useState([]);
  //token
  const token = localStorage.getItem("token");

  const { id } = useParams();
  // const id = localStorage.getItem("id");
  //const method getSoalUjianBy Id
  const getSoalUjianById = async () => {
    //set axios header dengan type Authorization + Bearer token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const response = await axios.get(`http://appsiaksd.ugcorpusskkni.online/api/guru/soalujian/${id}`);
    //get response data
    const data = await response.data.data;
    //set data jadwal
    setSoalUjian(data);
  };
  //get Ujian by id
  const getUjianById = async () => {
    //set axios header dengan type Authorization + Bearer token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const response = await axios.get(`http://appsiaksd.ugcorpusskkni.online/api/guru/ujian/${id}`);
    //get response data
    const data = await response.data.data;
    //set data jadwal
    setUjian(data);
  };
  // setNamaujian(data.nama_ujian);
  useEffect(() => {
    getSoalUjianById();
    getUjianById();
  }, []);
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
                    <h4>Matematika</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                      <li className="breadcrumb-item" aria-current="page">Ujian</li>
                      <li className="breadcrumb-item active" aria-current="page">Show Ujian</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 mb-30">
                <div className="pd-20 card-box">
                  <center>
                    <h5>{ujian.nama_ujian}</h5>
                  </center>
                  Jam Mulai :{ujian.jam_mulai_ujian}<br />
                  Jam Selesai :{ujian.jam_selesai_ujian}
                </div>
              </div>
            </div>
            {/* Simple Datatable start */}
            {soalujian.length < 0 ?
              <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 mb-30">
                  <div className="pd-20 card-box">
                    <center>
                      <h5>Belum Ada Soal</h5>
                    </center>
                  </div>
                </div>
              </div>
              :
              soalujian.map((data, index) => {
                return (
                  <div className="row clearfix">
                    <div className="col-lg-2 col-md-3 col-sm-12 mb-30">
                      <div className="pd-20 card-box">
                        <center>
                          <h5>No. {index}</h5>
                        </center>
                      </div>
                    </div>
                    {/* //mapping data soal ujian */}

                    <div className="col-lg-10 col-md-12 col-sm-12 mb-30">
                      <div className="pd-20 card-box">
                        <h5 className="card-title">{data.soal_ujian}</h5>
                        {/* //cek audio */}
                        {data.audio_soal_ujian <=0? '' : <audio controls>
                          <source src={`http://appsiaksd.ugcorpusskkni.online/storage/audio/${data.audio_ujian}`} type="audio/mpeg" />
                        </audio>}
                        <p className="card-text mt-4">Select one:</p>
                        <div className="custom-control custom-radio mb-5">
                          <input type="radio" id="customRadio4" name="customRadio" className="custom-control-input" />
                          <label className="custom-control-label" htmlFor="customRadio4">{data.pil_a_ujian}</label>
                        </div>
                        <div className="custom-control custom-radio mb-5">
                          <input type="radio" id="customRadio5" name="customRadio" className="custom-control-input" />
                          <label className="custom-control-label" htmlFor="customRadio4">{data.pil_b_ujian}</label>
                        </div>
                        <div className="custom-control custom-radio mb-5">
                          <input type="radio" id="customRadio6" name="customRadio" className="custom-control-input" />
                          <label className="custom-control-label" htmlFor="customRadio4">{data.pil_c_ujian}</label>
                        </div>
                        <div className="custom-control custom-radio mb-5">
                          <input type="radio" id="customRadio6" name="customRadio" className="custom-control-input" />
                          <label className="custom-control-label" htmlFor="customRadio4">{data.pil_d_ujian}</label>
                        </div>
                        <div className="custom-control custom-radio mb-5">
                          <input type="radio" id="customRadio6" name="customRadio" className="custom-control-input" />
                          <label className="custom-control-label" htmlFor="customRadio4">{data.pil_e_ujian}</label>
                        </div>
                      </div>
                    </div>
                    {/* Simple Datatable End */}
                  </div>
                )
              })
            }
            <Footer />
          </div>
        </div>
      </div>

    </div>
  )
}
export default ShowUjianGuru;