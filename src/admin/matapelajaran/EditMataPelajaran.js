import React, { Component } from 'react'
import Header from '../../compenent/Header'
import Menu from '../../compenent/Menu'
import SideBar from '../../compenent/SideBar'
import { Link } from "react-router-dom";
export default class EditMataPelajaran extends Component {
  render() {
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
                        <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
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
                  </div>
                </div>
                <form>
                  <div className="dropdown-divider" />
                  <p><strong>Mata Pelajaran</strong></p>
                  <div className="form-group">
                    <label>Nama Mata Pelajaran</label>
                    <input className="form-control" type="text" placeholder="Masukkan Mata Pelajaran" />
                  </div>
                  <div className="form-group">
                    <label>Tingkatan</label>
                    <input className="form-control" type="text" placeholder="Masukkan Tingkatan" />
                  </div>
                  <div className="clearfix">
                    <div className="pull-right">
                      <Link to="#horizontal-basic-form1" className="btn btn-primary btn-sm scroll-click" rel data-toggle="collapse" role="button">Simpan</Link>
                    </div>
                  </div>
                </form>
              </div>
              {/* Input Validation End */}
            </div>
            <div className="footer-wrap pd-20 mb-20 card-box">
              {/* DeskApp - Bootstrap 4 Admin Template By <Link to="https://github.com/dropways" target="_blank">Ankit Hingarajiya</Link> */}
            </div>
          </div>
        </div>

      </div>
    )
  }
}
