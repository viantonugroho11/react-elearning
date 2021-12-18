import React from 'react'
import Header from '../../compenent/guru/Header'
import Menu from '../../compenent/guru/Menu'
import SideBar from '../../compenent/guru/SideBar'
import axios from 'axios'

//import hook history dari react router dom
import { useHistory } from "react-router-dom";
//import hook useState from react
import { useState } from 'react';

function CreateMateri() {
  const [nama, setNama] = useState('');
  const [tingkat, setTingkat] = useState('');
  //state validation
  const [validation, setValidation] = useState({});

  //history
  const history = useHistory();

  //method "storePost"
  const storePost = async (e) => {
    e.preventDefault();

    //send data to server
    await axios.post('http://localhost:8000/api/admin/kelas', {
      nama_kelas: nama,
      tingkat: tingkat,
    })
      .then(() => {

        //redirect
        history.push('/admin/kelas');

      })
      .catch((error) => {

        //assign validation on state
        setValidation(error.response.data);
      })

  };
    return (
      <div>
        <div className="main-container">
          <div className="pd-ltr-20 xs-pd-20-10">
            <div className="min-height-200px">
              <div className="page-header">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="title">
                      <h4>Form Data Materi</h4>
                    </div>
                    <nav aria-label="breadcrumb" role="navigation">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Form Data Materi </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              {/* Default Basic Forms Start */}
              <div className="pd-20 card-box mb-30">
                <div className="clearfix">
                  <h4 className="h4 text-blue">Materi </h4>
                  <p>Isilah Data tersebut dengan benar !</p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Jadwal</label>
                        <select className="custom-select col-12">
                          <option selected>Pilihan</option>
                          <option value={1}>GTT</option>
                          <option value={2}>GTY</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Isi Materi</label>
                        <input className="form-control" type="text" placeholder="Masukkan Isi Materi" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Nama Materi</label>
                        <input className="form-control" type="text" placeholder="Masukkan Nama Materi " />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>File Materi</label>
                        <div className="custom-file">
                          <input type="file" className="custom-file-input" />
                          <label className="custom-file-label">File Materi</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix">
                    <div className="pull-right">
                      <a href="#horizontal-basic-form1" className="btn btn-primary btn-sm scroll-click" rel data-toggle="collapse" role="button"><i className="icon-copy fi-save" />Simpan</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Input Validation End */}
            </div>
            <div className="footer-wrap pd-20 mb-20 card-box">
              Learning Management System By  Developer
            </div>
          </div>
        </div>
      </div>
    )
  }
export default CreateMateri;
