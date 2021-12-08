import React, { Component } from 'react'
import Header from '../../compenent/Header'
import Menu from '../../compenent/Menu'
import SideBar from '../../compenent/SideBar'

export default class EditKelas extends Component {
  render() {
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
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
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
          </div>
        </div>
        <form>
          <div className="dropdown-divider" />
          <p><strong>Kelas</strong></p>
          <div className="form-group">
            <label>Nama Kelas</label>
            <input className="form-control" type="text" placeholder="Masukkan Nama Kelas" />
          </div>
          <div className="form-group">
            <label>Abjat Rombongan Belajar</label>
            <select className="custom-select col-12">
              <option selected>Pilihan</option>
              <option value={1}>A</option>
              <option value={2}>B</option>
              <option value={3}>C</option>
            </select>
          </div>
          <div className="form-group">
            <label>Tingkatan</label>
            <select className="custom-select col-12">
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
              <a href="#horizontal-basic-form1" className="btn btn-primary btn-sm scroll-click" rel data-toggle="collapse" role="button">Simpan</a>
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
}
