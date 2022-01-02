import React from 'react'
import HeaderSiswa from '../../compenent/siswa/Header';
import MenuSiswa from '../../compenent/siswa/Menu';
import SidebarSiswa from '../../compenent/siswa/Sidebar';

function ReviewUjian() {

  return (
    <div>
      <HeaderSiswa/>
      <SidebarSiswa/>
      <MenuSiswa/>
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
                      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
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
                        <th scope="col" style={{ backgroundColor: '#D3D3D3', width: '15%' }}>Mulai Ujian</th>
                        <td>Selasa, 20 Oktober 2021, 12:00 PM</td>
                      </tr>
                      <tr>
                        <th scope="col" style={{ backgroundColor: '#D3D3D3', width: '15%' }}>Selesai Ujian</th>
                        <td>Selasa, 20 Oktober 2021, 14:00 PM</td>
                      </tr>
                      <tr>
                        <th scope="col" style={{ backgroundColor: '#D3D3D3', width: '15%' }}>Status</th>
                        <td>Selesai</td>
                      </tr>
                      <tr>
                        <th scope="col" style={{ backgroundColor: '#D3D3D3', width: '15%' }}>Nilai</th>
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
                      
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 mb-30">
                <div className="pd-20 card-box">
                  <center>
                    <p>No. 1</p>
                    <p>Benar</p>
                    <br />
                    <p>5 of 5</p>
                  </center>
                </div>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 mb-30">
                <div className="pd-20 card-box">
                  <h5 className="card-title">Penghancuran bagian perangkat keras, seperti harddisk, pemotongan kabel komunikasi
                    termasuk contoh ancaman....</h5>
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
              Learning Management By Developer
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default ReviewUjian;