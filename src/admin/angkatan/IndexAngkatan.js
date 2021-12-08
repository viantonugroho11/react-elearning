import React, { Component } from 'react'

export default class IndexAngkatan extends Component {
  render() {
    return (
      <div>
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
          <div className="dropdown-divider" />
          <p><strong>Angkatan</strong></p>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Nama Angkatan</label>
                <input className="form-control" type="text" placeholder="Masukkan Nama Angkatan" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Tanggal Ujian</label>
                <input className="form-control date-picker" placeholder="Pilih Tanggal" type="text" />
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
    </div>
    {/* Input Validation End */}
  </div>
  <div className="footer-wrap pd-20 mb-20 card-box">
    Learning Management System By  Developer
  </div>
</div>

      </div>
    )
  }
}
