import React, { Component } from 'react'

export default class CreateSoalUjian extends Component {
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
              <h4>Form Data Soal Ujian</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Form Data soal Ujian</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Default Basic Forms Start */}
      <div className="pd-20 card-box mb-30">
        <div className="clearfix">
          <div className="pull-left">
            <h4 className="text-blue h4">Form Soal Ujian</h4>
            <p className="mb-30">Isilah data tersebut dengan benar !</p>
          </div>
        </div>
        <form>
          <div className="form-group">
            <label>Ujian</label>
            <select className="custom-select col-12">
              <option selected>Pilihan</option>
              <option value={1}>Laki - laki</option>
              <option value={2}>Perempuan</option>
            </select>
          </div>
          <div className="form-group">
            <label>Ujian</label>
            <select className="custom-select col-12">
              <option selected>Pilihan</option>
              <option value={1}>Laki - laki</option>
              <option value={2}>Perempuan</option>
            </select>
          </div>
          <div className="form-group">
            <label>Jenis Soal</label>
            <select className="custom-select col-12">
              <option selected>Pilihan</option>
              <option value={1}>Laki - laki</option>
              <option value={2}>Perempuan</option>
            </select>
          </div>
          <div className="dropdown-divider" />
          <p><strong>Soal</strong></p>
          <div className="form-group">
            <label>A.</label>
            <input className="form-control" type="text" placeholder="Masukkan pilihan A" />
          </div>
          <div className="form-group">
            <label>B.</label>
            <input className="form-control" type="text" placeholder="Masukkan pilihan B" />
          </div>
          <div className="form-group">
            <label>C.</label>
            <input className="form-control" type="text" placeholder="Masukkan pilihan C" />
          </div>
          <div className="form-group">
            <label>D.</label>
            <input className="form-control" type="text" placeholder="Masukkan pilihan D" />
          </div>
          <div className="form-group">
            <label>Soal Audio</label>
            <div className="custom-file">
              <input type="file" className="custom-file-input" />
              <label className="custom-file-label" />
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
      Learning  Management By Developer
    </div>
  </div>
</div>

      </div>
    )
  }
}
