import React from 'react'
import Header from '../../compenent/guru/Header'
import Menu from '../../compenent/guru/Menu'
import SideBar from '../../compenent/guru/SideBar'
import axios from 'axios'

// import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
//import hook history dari react router dom
import { useHistory, useParams } from "react-router-dom";
//import hook useState from react
import { useState } from 'react';
function EditRpp() {
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
    await axios.post('http://localhost:8000/api/guru/rpp', formData)
      .then(() => {

        //redirect
        history.push('/guru/rpp/');

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
                    <h4>Form Data Guru</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Form Data Guru</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            {/* Default Basic Forms Start */}
            <div className="pd-20 card-box mb-30">
              <div className="clearfix">
                <div className="pull-left">
                  <h4 className="text-blue h4">Form Biodata Guru</h4>
                  <p className="mb-30">Isilah data tersebut dengan benar !</p>
                </div>
              </div>
              <form>
                <div className="dropdown-divider" />
                <p><strong>Rpp Guru</strong></p>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Nama RPP</label>
                      <input className="form-control" type="text" placeholder="Masukkan nama Rpp Anda" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>keterangan</label>
                      <textarea className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>File RPP</label>
                      <input className="form-control" type="text" placeholder="Masukkan Tempat Lahir Anda" />
                    </div>
                  </div>
                </div>
                <div className="clearfix">
                  <div className="pull-right">
                    <a href="#horizontal-basic-form1" className="btn btn-primary btn-sm scroll-click" rel data-toggle="collapse" role="button">Simpan</a>
                  </div>
                </div>
              </form>
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
export default EditRpp
