import React from 'react'
import Header from '../../compenent/guru/Header'
import Menu from '../../compenent/guru/Menu'
import SideBar from '../../compenent/guru/SideBar'
import axios from 'axios'
import { Link } from "react-router-dom";
// import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
//import hook history dari react router dom
import { useHistory, useParams } from "react-router-dom";
//import hook useState from react
import { useState } from 'react';

function CreateMateri() {
  const [nama, setNama] = useState('');
  const [file, setFile] = useState();
  const [materi, setMateri] = useState('');
  const { id } = useParams();
  //state validation
  const [validation, setValidation] = useState({});

  //history
  const history = useHistory();

  //method "storePost"
  const storePost = async (e) => {
    e.preventDefault();

    //send data to server
    //initialize formData
    const formData = new FormData();

    //append data to formData
    formData.append('jadwal_id', id);
    formData.append('nama_materi', nama);
    formData.append('isi_materi', materi);
    formData.append('file_materi', file);
    await axios.post('http://appsiaksd.ugcorpusskkni.online/api/guru/materi',formData)
      .then(() => {

        //redirect
        history.push('/guru/materi/' + id);

      })
      .catch((error) => {
        // console.log(res);
        console.log(error.response.data);
        //assign validation on state
        setValidation(error.response.data);
      })

  };
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
                        <label>Isi Materi</label>
                        <textarea value={materi} onChange={(e) => setMateri(e.target.value)} class="form-control border-radius-0" placeholder="Enter text ..."></textarea>
                        {
                          validation.isi_materi && (
                            <div className="alert alert-danger">
                              {validation.isi_materi[0]}
                            </div>
                          )
                        }
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Nama Materi</label>
                        <input value={nama} onChange={(e) => setNama(e.target.value)} className="form-control" type="text" placeholder="Masukkan Nama Materi " />
                        {
                          validation.nama && (
                            <div className="alert alert-danger">
                              {validation.nama[0]}
                            </div>
                          )
                        }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        
                        <label>File Materi</label>
                        <input onChange={(e) => setFile(e.target.files[0])} className="form-control" type="file" placeholder="Masukkan Usia Anda" />
                      </div>
                    </div>
                  </div>
                  <div className="clearfix">
                    <div className="pull-right">
                      <button className="btn btn-primary btn-sm scroll-click" type="submit">Simpan</button>
                    </div>
                  </div>
                </form>
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
