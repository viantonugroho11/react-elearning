import Header from '../../compenent/guru/Header'
import Menu from '../../compenent/guru/Menu'
import SideBar from '../../compenent/guru/SideBar'
import axios from 'axios'
import { Link } from "react-router-dom";
//import hook history dari react router dom
import { useHistory } from "react-router-dom";
//import hook useState from react
import { useState } from 'react';
function CreateUjian() {
  const [pelajaran, setPelajaran] = useState('');
  const [kelas, setKelas] = useState('');
  const [guru, setGuru] = useState('');

  //setdata
  const [dataGuru, setDataGuru] = useState([])
  const [dataKelas, setDataKelas] = useState([])
  const [dataPelajaran, setDataPelajaran] = useState([])
  //state validation
  const [validation, setValidation] = useState({});

  //history
  const history = useHistory();

  //method "storePost"
  const storePost = async (e) => {
    e.preventDefault();

    //send data to server
    await axios.post('http://appsiaksd.ugcorpusskkni.online/api/admin/jadwal', {
      pelajaran: pelajaran,
      kelas: kelas,
      guru: guru
    })
      .then(() => {

        //redirect
        history.push('/admin/jadwal');

      })
      .catch((error) => {

        //assign validation on state
        setValidation(error.response.data);
      })

  };

  //method "getDataGuru"
  const GetGuru = async () => {
    await axios.get('http://appsiaksd.ugcorpusskkni.online/api/admin/guru')
      .then(res => {
        const dataGuru = res.data.data;
        setDataGuru(dataGuru);
      })
      .catch(err => {
        console.log(err)
      })
  }
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
                      <h4>Form Data Ujian</h4>
                    </div>
                    <nav aria-label="breadcrumb" role="navigation">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Form Data Guru</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              {/* Default Basic Forms Start */}
              <div className="pd-20 card-box mb-30">
                <div className="clearfix">
                  <div className="pull-left">
                    <h4 className="text-blue h4">Form Biodata Guru</h4>
                    <p className="mb-30">Isilah data tersebut dengan benar !</p>
                  </div>
                </div>
                <form>
                  <div className="dropdown-divider" />
                  <p><strong>Biodata Guru</strong></p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Nama Ujian</label>
                        <input className="form-control" type="text" placeholder="Nama Ujian" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Jadwal</label>
                        <input className="form-control" type="text" placeholder="Masukkan Jadwal " />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>NU-PTK</label>
                        <input className="form-control" type="text" placeholder="Masukkan NU-PTK Anda" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Date of Birth :</label>
                        <input type="text" className="form-control date-picker" placeholder="Select Date" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>time Delive</label>
                        <input className="form-control time-picker-default" placeholder="time" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Train departure</label>
                        <input className="form-control time-picker-default" placeholder="time" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Pendidikan</label>
                        <input className="form-control" type="text" placeholder="Masukkan Pendidikan Anda" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Masa Kerja</label>
                        <input className="form-control" type="text" placeholder="Masukkan Masa Kerja Anda" />
                      </div>
                    </div>
                  </div>
                </form></div>
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
export default CreateUjian