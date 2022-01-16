import React from 'react'
import Header from '../../compenent/guru/Header'
import Menu from '../../compenent/guru/Menu'
import SideBar from '../../compenent/guru/SideBar'
// import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";
//import hook useState dan useEffect from react
import { useState, useEffect } from 'react';
//import axios
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Footer from '../../compenent/Footer';
function NilaiSoal() {
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
                    <h4>Nilai Soal</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                      <li className="breadcrumb-item"><a href="index.html">E-learning</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Pengumpulan Tugas Matematika</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            {/* Default Basic Forms Start */}
            <div className="pd-20 card-box mb-30">
              <div className="clearfix">
                <h4 className="h4 text-blue">Form Soal</h4>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Isi Soal</label>
                        <textarea className="form-control" type="text" placeholder="Masukkan Masukkan Isi Soal" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Nama Soal</label>
                        <input className="form-control" type="text" placeholder="Masukkan Nama Soal " />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Pilih Soal</label>
                    <input type="file" className="form-control" />
                  </div>
                  <div className="clearfix">
                    <div className="pull-right">
                      {/* <a href="#horizontal-basic-form1" className="btn btn-primary btn-sm scroll-click" rel data-toggle="collapse" role="button"><i className="icon-copy fi-save" />Simpan</a>
                     */}
                      <button type="submit" className="btn btn-primary btn-sm"><i className="icon-copy fi-save" />Simpan</button>
                    </div>
                  </div>

              </div>
              {/* Input Validation End */}
            </div>
            <Footer/>
          </div>
        </div>
      </div>

    </div>
  )
}
export default NilaiSoal
