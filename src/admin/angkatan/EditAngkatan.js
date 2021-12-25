import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class EditAngkatan extends Component {
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
              <h4>Form Data Tahun Ajaran</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Form Data tahun AJaran</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Default Basic Forms Start */}
      <div className="pd-20 card-box mb-30">
        <div className="clearfix">
          <div className="pull-left">
            <h4 className="text-blue h4">Form  tahun Ajaran</h4>
            <p className="mb-30">Isilah data tersebut dengan benar !</p>
          </div>
        </div>
        <form>
          <div className="dropdown-divider" />
          <p><strong>Tahun Ajaran</strong></p>
          <div className="form-group">
            <label>Nama Tahun Ajaran</label>
            <input className="form-control" type="text" placeholder="Masukkan Nama Tahun Ajaran Anda" />
          </div>
          <div className="form-group">
            <label>Mulai Tahun Ajaran</label>
            <input className="form-control" type="text" placeholder="Masukkan Mulai Tahun Ajaran Anda" />
          </div>
          <div className="form-group">
            <label>Selesai Tahun Ajaran</label>
            <input className="form-control" type="text" placeholder="Masukkan Selesai Tahun Ajaran" />
          </div>
          <div className="clearfix">
            <div className="pull-right">
              {/* <a href="#horizontal-basic-form1" className="btn btn-primary btn-sm scroll-click" rel data-toggle="collapse" role="button">Simpan</a> */}
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
}
