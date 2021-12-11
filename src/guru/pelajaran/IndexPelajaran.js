import React, { Component } from 'react'

export default class IndexPelajaran extends Component {
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
              <h4>Data Kelas</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Data Kelas</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Simple Datatable start */}
      <div className="card-box mb-30">
        <div className="pd-20 d-flex justify-content-between">
          <h4 className="text-blue h4">Data Kelas</h4>
          <a href="form-datakelas.html" className="btn btn-sm btn-primary">+ tambah</a>
        </div>
        <div className="pb-20">
          <table className="data-table table stripe hover nowrap">
            <thead>
              <tr>
                <th className="table-plus datatable-nosort">Nama Kelas</th>
                <th>Abjad Rombongan Belajar</th>
                <th>Tingkatan</th>
                <th className="datatable-nosort">Aksi</th>
              </tr>
            </thead>
            <tbody>
              </tbody>
          </table>
        </div>
      </div>
      {/* Simple Datatable End */}
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
