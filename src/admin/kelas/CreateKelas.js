import React from 'react'
import Header from '../../compenent/Header'
import Menu from '../../compenent/Menu'
import SideBar from '../../compenent/SideBar'
import axios from 'axios'
import { Link } from "react-router-dom";
//import hook history dari react router dom
import { useHistory } from "react-router-dom";
//import hook useState from react
import { useState } from 'react';
import swal from 'sweetalert'
import Footer from '../../compenent/Footer'

function CreateKelas() {
    const [nama, setNama] = useState('');
    const [tingkat, setTingkat] = useState('');
    //state validation
    const [validation, setValidation] = useState([]);

    //history
    const history = useHistory();

    //method "storePost"
    const storePost = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('nama_kelas', nama);
        formData.append('tingkat', tingkat);
        //send data to server
        await axios.post('http://appsiaksd.ugcorpusskkni.online/api/admin/kelas', formData)
        .then(() => {
          swal("Berhasil", "Data Berhasil Ditambahkan", "success");
            //redirect
            history.push('/admin/kelas');

        })
        .catch((error) => {

          swal("Gagal", error.response.data.message, "error");
            //assign validation on state
            setValidation(error.response.data);
        })
        
    };
    return (
      <div>
        <Header/>
        <SideBar/>
        <Menu/>
        <div className="main-container">
          <div className="pd-ltr-20 xs-pd-20-10">
            <div className="min-height-200px">
              <div className="page-header">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="title">
                      <h4>Form Data Kelas</h4>
                    </div>
                    <nav aria-label="breadcrumb" role="navigation">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Form Data Kelas</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              {/* Default Basic Forms Start */}
              <div className="pd-20 card-box mb-30">
                <div className="clearfix">
                  <div className="pull-left">
                    <h4 className="text-blue h4">Form Kelas</h4>
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
                <form onSubmit={ storePost }>
                  <div className="dropdown-divider" />
                  <p><strong>Kelas</strong></p>
                  <div className="form-group">
                    <label>Nama Kelas</label>
                    <input className="form-control" value={nama} onChange={(e) => setNama(e.target.value)} type="text" placeholder="Masukkan Nama Kelas" />
                  </div>
                  {/* <div className="form-group">
                    <label>Abjat Rombongan Belajar</label>
                    <select className="custom-select col-12">
                      <option selected>Pilihan</option>
                      <option value={1}>A</option>
                      <option value={2}>B</option>
                      <option value={3}>C</option>
                    </select>
                  </div> */}
                  <div className="form-group">
                    <label>Tingkatan</label>
                    <select className="custom-select col-12" value={tingkat} onChange={(e) => setTingkat(e.target.value)}>
                      <option selected>Pilihan</option>
                      <option value={1}>I</option>
                      <option value={2}>II</option>
                      <option value={3}>III</option>
                      <option value={4}>IV</option>
                      <option value={5}>V</option>
                      <option value={6}>VI</option>
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
export default CreateKelas
