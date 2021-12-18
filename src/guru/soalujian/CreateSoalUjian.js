import React, { useEffect } from 'react'
import Header from '../../compenent/guru/Header'
import Menu from '../../compenent/guru/Menu'
import SideBar from '../../compenent/guru/SideBar'
import axios from 'axios'

// import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
//import hook history dari react router dom
import { useHistory, useParams } from "react-router-dom";
//import hook useState from react
import { useState } from 'react';
function CreateSoalUjian() {
  //const { id } = useParams();
  const { id } = useParams();

  const [dataUjian, setUjian] = useState({})
  //method "getDataGuru"
  const GetUjian = async () => {
    await axios.get(`http://localhost:8000/api/guru/ujian/${id}`)
      .then(res => {
        const dataUjian = res.data.data;
        setUjian(dataUjian);
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    GetUjian()
  }, [])
  return (
    <div>
      <Header />
      <Menu />
      <SideBar />
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
                  {dataUjian.jumlah_soal}
                </div>
              </div>
              <form>
                <div className="form-group">
                  <label>Soal Ujian</label>
                  <textarea className="form-control" rows="5"></textarea>
                </div>
                <div className="form-group">
                  <label>Soal Audio(Optional)</label>
                  <input type="file" className="form-control" />
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
                  <label>E. (Optional)</label>
                  <input className="form-control" type="text" placeholder="Masukkan pilihan E (Optional)" />
                </div>
                <div className="form-group">
                  <label>Kunci Jawab Ujian</label>
                  <textarea className="form-control" rows="5"></textarea>
                  <supscrip>*Copy Dari pilihan yang tepat</supscrip>
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
export default CreateSoalUjian
