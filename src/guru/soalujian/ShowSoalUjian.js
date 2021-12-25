import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class ShowSoalUjian extends Component {
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
              <h4>Matematika</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
                <li className="breadcrumb-item" aria-current="page">Ujian</li>
                <li className="breadcrumb-item active" aria-current="page">Matematika</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Simple Datatable start */}
      <div className="row clearfix">
        <div className="col-lg-9 col-md-12 col-sm-12 mb-30">
          <div className="pd-20 card-box">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col" style={{backgroundColor: '#D3D3D3', width: '15%'}}>Mulai Ujian</th>
                  <td>Selasa, 20 Oktober 2021, 12:00 PM</td>
                </tr>
                <tr>
                  <th scope="col" style={{backgroundColor: '#D3D3D3', width: '15%'}}>Selesai Ujian</th>
                  <td>Selasa, 20 Oktober 2021, 14:00 PM</td>
                </tr>
                <tr>
                  <th scope="col" style={{backgroundColor: '#D3D3D3', width: '15%'}}>Status</th>
                  <td>Selesai</td>
                </tr>
                <tr>
                  <th scope="col" style={{backgroundColor: '#D3D3D3', width: '15%'}}>Nilai</th>
                  <td>90/100</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12 mb-30">
          <div className="pd-20 card-box">
            <h5 className="h4 text-blue mb-20">Navigasi</h5>
            <nav aria-label="...">
              <ul className="pagination flex-wrap">
                <li className="page-item disabled">
                  {/* <Link className="page-link" to="#" tabIndex={-1}>Previous</Link> */}
                </li>
                <li className="page-item">
                  {/* <Link className="page-link" to="#">1</Link> */}
                  </li>
                <li className="page-item active">
                  {/* <Link className="page-link" to="#">2 <span className="sr-only">(current)</span></Link> */}
                </li>
                <li className="page-item">
                  {/* <Link className="page-link" to="#">3</Link> */}
                </li>
                <br />
                <li className="page-item">
                  {/* <Link className="page-link" to="#">4</Link> */}
                </li>
                <br />
                <li className="page-item">
                  {/* <Link className="page-link" to="#">5</Link> */}
                  </li>
                <li className="page-item">
                  {/* <Link className="page-link" to="#">6</Link> */}
                  </li>
                <li className="page-item">
                  {/* <Link className="page-link" to="#">7</Link> */}
                  </li>
                <li className="page-item">
                  {/* <Link className="page-link" to="#">8</Link> */}
                  </li>
                <li className="page-item">
                  {/* <Link className="page-link" to="#">9</Link> */}
                  </li>
                <li className="page-item">
                  {/* <Link className="page-link" to="#">10</Link> */}
                  </li>
                <li className="page-item">
                  {/* <Link className="page-link" to="#">11</Link> */}
                  </li>
                <li className="page-item">
                  {/* <Link className="page-link" to="#">12</Link> */}
                  </li>
                <li className="page-item">
                  {/* <Link className="page-link" to="#">Next</Link> */}
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="col-lg-1 col-md-3 col-sm-12 mb-30">
          <div className="pd-20 card-box">
            <center><h5>No. 1</h5>
              <h6>Benar</h6>
              <br />
              <p>5 of 5</p>
            </center>
          </div>
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12 mb-30">
          <div className="pd-20 card-box">
            <h5 className="card-title">Penghancuran bagian perangkat keras, seperti harddisk, pemotongan kabel komunikasi termasuk contoh ancaman....</h5>                                    
            <p className="card-text mt-4">Select one:</p>
            <div className="custom-control custom-radio mb-5">
              <input type="radio" id="customRadio4" name="customRadio" className="custom-control-input" />
              <label className="custom-control-label" htmlFor="customRadio4">Toggle this custom radio</label>
            </div>
            <div className="custom-control custom-radio mb-5">
              <input type="radio" id="customRadio5" name="customRadio" className="custom-control-input" />
              <label className="custom-control-label" htmlFor="customRadio5">Or toggle this other custom radio</label>
            </div>
            <div className="custom-control custom-radio mb-5">
              <input type="radio" id="customRadio6" name="customRadio" className="custom-control-input" />
              <label className="custom-control-label" htmlFor="customRadio6">Or toggle this other custom radio</label>
            </div>
          </div>
        </div>
        {/* Simple Datatable End */}
      </div>
      <div className="footer-wrap pd-20 card-box">
        Learning  Management By Developer
      </div>
    </div>
  </div>
</div>

      </div>
    )
  }
}
