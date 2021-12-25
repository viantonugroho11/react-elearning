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
function CreateGuru() {
      //state
    const [nama, setNama] = useState('');
    const [nik, setNik] = useState('');
    const [nuptk, setNuptk] = useState('');
    const [tempatlahir, setTampatLahir] = useState('');
    const [tanggallahir, setTanggalLahir] = useState('');
    const [kelamin, setKelamin] = useState('');
    const [pendidikan, setPendidikan] = useState('');
    const [masakerja, setMasaKerja] = useState('');
    const [status_kepegawaian, setStatusKepagawaian] = useState('');
    const [foto, setFoto] = useState('');
    const [status, setStatus] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //state validation
    const [validation, setValidation] = useState({});

    //history
    const history = useHistory();

    //method "storePost"
    const storePost = async (e) => {
        e.preventDefault();
        
        //send data to server
        await axios.post('http://appsiaksd.ugcorpusskkni.online/api/admin/guru', {
            nama_guru: nama,
            nik: nik,
            nu_ptk:nuptk,
            tempat_lahir:tempatlahir,
            tanggal_lahir:"2000-11-12",
            jenis_kelamin:kelamin,
            pendidikan:pendidikan,
            masa_kerja:masakerja,
            status_kepegawaian:status_kepegawaian,
            foto:foto,
            status:status,
            email:email,
            password:password,
        })
        .then(() => {

            //redirect
            history.push('/admin/guru/create');

        })
        .catch((error) => {

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
              <h4>Form Data Guru</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/admin">Home</a></li>
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
            <h4 className="text-blue h4">Form Biodata</h4>
            <p className="mb-30">Isilah data tersebut dengan benar !</p>
            {
                validation.errors &&
                <div className="alert alert-danger" role="alert">
                  { validation.errors.map((error, index) => (
                      <div key={index}>{ `${error.param} : ${error.msg}` }</div>
                  )) }
                </div>

            }
          </div>
        </div>
        <form onSubmit={ storePost }>
          <div className="dropdown-divider" />
          <p><strong>Biodata Diri</strong></p>
          <div className="form-group">
            <label>Nama Lengkap</label>
            <input className="form-control" value={nama} onChange={(e) => setNama(e.target.value)} type="text" placeholder="Masukkan Nama Lengkap Anda" />
          </div>
          <div className="form-group">
            <label>NIK</label>
            <input className="form-control" value={nik} onChange={(e) => setNik(e.target.value)} type="text" placeholder="Masukkan NIK Anda" />
          </div>
          <div className="form-group">
            <label>NU-PTK</label>
            <input className="form-control" value={nuptk} onChange={(e) => setNuptk(e.target.value)} type="text" placeholder="Masukkan NU-PTK Anda" />
          </div>
          <div className="form-group">
            <label>Tempat Lahir</label>
            <input className="form-control" value={tempatlahir} onChange={(e) => setTampatLahir(e.target.value)} type="text" placeholder="Masukkan Tempat Lahir Anda" />
          </div>
          <div className="form-group">
            <label htmlFor="example-datetime-local-input">Tanggal Lahir</label>
            <input className="form-control datetimepicker" value={tanggallahir} onChange={(e) => setTanggalLahir(e.target.value)} placeholder="Masukkan Tanggal Lahir Anda" type="text" />
          </div>
          <div className="form-group">
            <label>Jenis Kelamin</label>
            <select className="custom-select col-12" value={kelamin} onChange={(e) => setKelamin(e.target.value)}>
              <option selected>Pilihan</option>
              <option value={"Laki-Laki"}>Laki - laki</option>
              <option value={"Perempuan"}>Perempuan</option>
            </select>
          </div>
          <div className="form-group">
            <label>Pendidikan</label>
            <input className="form-control" value={pendidikan} onChange={(e) => setPendidikan(e.target.value)} type="text" placeholder="Masukkan Pendidikan Anda" />
          </div>
          <div className="form-group">
            <label>Masa Kerja</label>
            <input className="form-control" value={masakerja} onChange={(e) => setMasaKerja(e.target.value)} type="text" placeholder="Masukkan Masa Kerja Anda" />
          </div>
          <div className="form-group">
            <label>Status Kepegawaian</label>
            <select className="custom-select col-12" value={status_kepegawaian} onChange={(e) => setStatusKepagawaian(e.target.value)}>
              <option selected>Pilihan</option>
              <option value={"GTT"}>GTT</option>
              <option value={"GTY"}>GTY</option>
            </select>
          </div>
          <div className="form-group">
            <label>Foto</label>
            <div className="custom-file ">
              <input value={foto} onChange={(e) => setFoto(e.target.value)} type="file" className="custom-file-input" />
              <label className="custom-file-label">Pilih Foto</label>
            </div>
          </div>
          <div className="dropdown-divider" />
          <p><strong>Akun E-Learning</strong></p>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Masukkan Email Anda" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Masukkan Password Anda" />
          </div>
          <div className="form-group">
            <label>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)} className="custom-select col-12">
              <option selected>Pilihan</option>
              <option value={"Aktif"}>Aktif</option>
              <option value={"Tidak Aktif"}>Tidak Aktif</option>
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
    <div className="footer-wrap pd-20 mb-20 card-box">
      {/* DeskApp - Bootstrap 4 Admin Template By <a href="/" target="_blank">Ankit Hingarajiya</a> */}
    </div>
  </div>
</div>

      </div>
    )
}
export default CreateGuru;