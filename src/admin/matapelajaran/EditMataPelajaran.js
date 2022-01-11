import React from 'react'
import Header from '../../compenent/Header'
import Menu from '../../compenent/Menu'
import SideBar from '../../compenent/SideBar'
import axios from 'axios'
//import hook history dari react router dom
import { useHistory, useParams } from "react-router-dom";
//import hook useState from react
import { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
import swal from 'sweetalert';
function EditMataPelajaran(){
  //token
  const token = localStorage.getItem('token')

  const [nama, setNama] = useState('');
  // const [tingkat, setTingkat] = useState('');
  //state validation
  const [validation, setValidation] = useState({});

  //history
  const history = useHistory();

  const { id } = useParams();

  //function "getPostById"
  const getPostById = async () => {
    //auth token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    //get data from server
    const response = await axios.get(`http://appsiaksd.ugcorpusskkni.online/api/admin/pelajaran/${id}/edit`);
    //get response data
    const data = await response.data.data

    //assign data to state
    setNama(data.nama_pelajaran);
    // setTingkat(data.tingkat);

  };
  const storeUpdate = async (e) => {
    e.preventDefault();
    //auth token
    
    // const formData = new FormData();
    // formData.append('nama_pelajaran', nama);
    // console.log(formData);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    //send data to server
    await axios.patch(`http://appsiaksd.ugcorpusskkni.online/api/admin/pelajaran/${id}`, {
      nama_pelajaran: nama,
    })
      .then(() => {
        swal("Berhasil!", "Data berhasil diubah", "success");
        //redirect
        history.push('/admin/matapelajaran');

      })
      .catch((error) => {
        swal("Gagal!", "Data gagal diubah", "error");
        //assign validation on state
        setValidation(error.response.data);
      })
  };
  useEffect(() => {
    getPostById()
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
                      <h4>Form Data Mata Pelajaran</h4>
                    </div>
                    <nav aria-label="breadcrumb" role="navigation">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Form Data Mata Pelajaran</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              {/* Default Basic Forms Start */}
              <div className="pd-20 card-box mb-30">
                <div className="clearfix">
                  <div className="pull-left">
                    <h4 className="text-blue h4">Form Mata Pelajaran</h4>
                    <p className="mb-30">Isilah data tersebut dengan benar !</p>
                    {
                      validation.errors &&
                      <div className="alert alert-danger" role="alert">
                        {validation.errors.map((error, index) => (
                          <div key={index}>{`${error.param} : ${error.msg}`}</div>
                        ))}
                      </div>
                    }
                  </div>
                </div>
                <form onSubmit={storeUpdate}>
                  <div className="dropdown-divider" />
                  <p><strong>Mata Pelajaran</strong></p>
                  <div className="form-group">
                    <label>Nama Mata Pelajaran</label>
                    <input className="form-control" value={nama} onChange={(e) => setNama(e.target.value)} type="text" placeholder="Masukkan Mata Pelajaran" />
                  </div>
                  {/* <div className="form-group">
                    <label>Tingkatan</label>
                    <input className="form-control" type="text" placeholder="Masukkan Tingkatan" />
                  </div> */}
                  <div className="clearfix">
                    <div className="pull-right">
                      <button className="btn btn-primary btn-sm scroll-click" type="submit">Simpan</button>
                    </div>
                  </div>
                </form>
              </div>
              {/* Input Validation End */}
            </div>
            <div className="footer-wrap pd-20 mb-20 card-box">
              {/* DeskApp - Bootstrap 4 Admin Template By <a href="https://github.com/dropways" target="_blank">Ankit Hingarajiya</a> */}
            </div>
          </div>
        </div>

      </div>
    )
  }
export default EditMataPelajaran
