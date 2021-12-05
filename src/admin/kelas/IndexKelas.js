import React, { Component } from 'react'

export default class IndexKelas extends Component {
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
              <tr>
                <td className="table-plus">Gloria F. Mead</td>
                <td>25</td>
                <td>Sagittarius</td>
                <td>2829 Trainer Avenue Peoria, IL 61602 </td>
                <td>29-03-2018</td>
                <td>
                  <div className="dropdown">
                    <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                      <i className="dw dw-more" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                      <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>30</td>
                <td>Gemini</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>
                  <div className="dropdown">
                    <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                      <i className="dw dw-more" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                      <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>20</td>
                <td>Gemini</td>
                <td>2829 Trainer Avenue Peoria, IL 61602 </td>
                <td>29-03-2018</td>
                <td>
                  <div className="dropdown">
                    <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                      <i className="dw dw-more" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                      <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>30</td>
                <td>Sagittarius</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>
                  <div className="dropdown">
                    <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                      <i className="dw dw-more" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                      <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>25</td>
                <td>Gemini</td>
                <td>2829 Trainer Avenue Peoria, IL 61602 </td>
                <td>29-03-2018</td>
                <td>
                  <div className="dropdown">
                    <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                      <i className="dw dw-more" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                      <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>20</td>
                <td>Sagittarius</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>
                  <div className="dropdown">
                    <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                      <i className="dw dw-more" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                      <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>18</td>
                <td>Gemini</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>
                  <div className="dropdown">
                    <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                      <i className="dw dw-more" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                      <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>30</td>
                <td>Sagittarius</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>
                  <div className="dropdown">
                    <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                      <i className="dw dw-more" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                      <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>30</td>
                <td>Sagittarius</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>
                  <div className="dropdown">
                    <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                      <i className="dw dw-more" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                      <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>30</td>
                <td>Gemini</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>
                  <div className="dropdown">
                    <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                      <i className="dw dw-more" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                      <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>30</td>
                <td>Gemini</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>
                  <div className="dropdown">
                    <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                      <i className="dw dw-more" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                      <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>30</td>
                <td>Gemini</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>
                  <div className="dropdown">
                    <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                      <i className="dw dw-more" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                      <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
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
