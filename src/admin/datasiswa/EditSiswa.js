import React, { Component } from 'react'
import Header from '../../compenent/Header'
import Menu from '../../compenent/Menu'
import SideBar from '../../compenent/SideBar'

export default class EditSiswa extends Component {
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
              <h4>Form Data Siswa</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Form Data Siswa</li>
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
          </div>
        </div>
        <form>
          <div className="dropdown-divider" />
          <p><strong>Biodata Diri</strong></p>
          <div className="form-group">
            <label>Nama Lengkap</label>
            <input className="form-control" type="text" placeholder="Masukkan Nama Lengkap Anda" />
          </div>
          <div className="form-group">
            <label>NIS</label>
            <input className="form-control" type="text" placeholder="Masukkan NIS Anda" />
          </div>
          <div className="form-group">
            <label>NISN</label>
            <input className="form-control" type="text" placeholder="Masukkan NIS Anda" />
          </div>
          <div className="form-group">
            <label>Kelas</label>
            <select className="custom-select col-12">
              <option selected>Pilihan</option>
              <option value={1}>1 A</option>
              <option value={2}>1 B</option>
              <option value={2}>2 A</option>
              <option value={2}>2 B</option>
              <option value={2}>3 A</option>
              <option value={2}>3 B</option>
              <option value={2}>4 A</option>
              <option value={2}>4 B</option>
              <option value={2}>5 A</option>
              <option value={2}>5 B</option>
              <option value={2}>6 A</option>
              <option value={2}>6 B</option>
            </select>
          </div>
          <div className="form-group">
            <label>Tingkatan</label>
            <select className="custom-select col-12">
              <option selected>Pilihan</option>
              <option value={1}>I</option>
              <option value={2}>II</option>
              <option value={2}>III</option>
              <option value={2}>IV</option>
              <option value={2}>V</option>
              <option value={2}>VI</option>
            </select>
          </div>
          <div className="form-group">
            <label>Tempat Lahir</label>
            <input className="form-control" type="text" placeholder="Masukkan Tempat Lahir Anda" />
          </div>
          <div className="form-group">
            <label htmlFor="example-datetime-local-input">Tanggal Lahir</label>
            <input className="form-control datetimepicker" placeholder="Masukkan Tanggal Lahir Anda" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="example-datetime-local-input">Per Tanggal</label>
            <input className="form-control datetimepicker" placeholder="Masukkan Per Tanggal Anda" type="text" />
          </div>
          <div className="form-group">
            <label>Usia</label>
            <input className="form-control" type="text" placeholder="Masukkan Usia Anda" />
          </div>
          <div className="form-group">
            <label>Jenis Kelamin</label>
            <select className="custom-select col-12">
              <option selected>Pilihan</option>
              <option value={1}>Laki - laki</option>
              <option value={2}>Perempuan</option>
            </select>
          </div>
          <div className="form-group">
            <label>Status</label>
            <select className="custom-select col-12">
              <option selected>Pilihan</option>
              <option value={1}>Aktif</option>
              <option value={2}>Tidak Aktif</option>
            </select>
          </div>
          <div className="dropdown-divider" />
          <p><strong>Biodata Orangtua</strong></p>
          <div className="form-group">
            <label>Nama Ayah</label>
            <input className="form-control" type="text" placeholder="Masukkan Nama Ayah Anda" />
          </div>
          <div className="form-group">
            <label>Pekerjaan Ayah</label>
            <input className="form-control" type="text" placeholder="Masukkan Pekerjaan Ayah Anda" />
          </div>
          <div className="form-group">
            <label>Nama Ibu</label>
            <input className="form-control" type="text" placeholder="Masukkan Nama Ibu Anda" />
          </div>
          <div className="form-group">
            <label>Pekerjaan Ibu</label>
            <input className="form-control" type="text" placeholder="Masukkan Pekerjaan Ibu Anda" />
          </div>
          <div className="form-group">
            <label>Alamat</label>
            <textarea className="form-control" type="text" placeholder="Masukkan Alamat Anda" defaultValue={""} />
          </div>
          <div className="form-group">
            <label>Nomor Telpon Orangtua</label>
            <input className="form-control" type="text" placeholder="Masukkan Nomor Orangtua Anda" />
          </div>
          <div className="dropdown-divider" />
          <p><strong>Akun E-Learning</strong></p>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" type="text" placeholder="Masukkan Email Anda" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input className="form-control" type="text" placeholder="Masukkan Password Anda" />
          </div>
          <div className="form-group">
            <label>Status</label>
            <select className="custom-select col-12">
              <option selected>Pilihan</option>
              <option value={1}>Aktif</option>
              <option value={2}>Tidak Aktif</option>
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
