import Header from '../../compenent/Header'
import Menu from '../../compenent/Menu'
import SideBar from '../../compenent/SideBar'
import axios from 'axios'
import { Link } from "react-router-dom";
//import hook history dari react router dom
import { useHistory } from "react-router-dom";
//import hook useState from react
import { useState, useEffect } from 'react';
function CreateUjian() {
  //variable value
  const [nama_ujian, setNamaujian] = useState('');
  const [tgl_ujian, setTglUjian] = useState('');
  const [waktu_ujian, setWaktuUjian] = useState('');
  const [jumlah_soal, setJumlahSoal] = useState('');
  const [jam_mulai, setJamMulai] = useState('');
  const [jam_selesai, setJamSelesai] = useState('');
  const [jadwal, setJadwal] = useState('');

  //state validation
  const [validation, setValidation] = useState({});

  //set variable jadwal
  const [getjadwal, setJadwalUjian] = useState([]);

  //history
  const history = useHistory();

  // fetch data jadwal
  const getJadwal = async () => {
    const response = await axios.get('http://appsiaksd.ugcorpusskkni.online/api/admin/jadwal');
    //get response data
    const data = await response.data.data;
    //set data jadwal
    setJadwalUjian(data);
  };


  //method "storePost"
  const storePost = async (e) => {
    e.preventDefault();

    //send data to server
    await axios.post('http://appsiaksd.ugcorpusskkni.online/api/admin/jadwal')
      .then(() => {

        //redirect
        history.push('/admin/jadwal');

      })
      .catch((error) => {

        //assign validation on state
        setValidation(error.response.data);
      })

  };

  useEffect(() => {

    //panggil method "fetchData"
    getJadwal();

  }, []);
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
                      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Form Data Ujian</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            {/* Default Basic Forms Start */}
            <div className="pd-20 card-box mb-30">
              <div className="clearfix">
                <div className="pull-left">
                  <h4 className="text-blue h4">FormData Ujian</h4>
                  <p className="mb-30">Isilah data tersebut dengan benar !</p>
                </div>
              </div>
              <form>
                <div className="dropdown-divider" />
                <p><strong>Data Ujian</strong></p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Nama Ujian</label>
                      <input value={nama_ujian} onChange={(e)=>setNamaujian(e.target.value)} className="form-control" type="text" placeholder="Nama Ujian" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Tanggal Ujian</label>
                      <input className="form-control" type="date" placeholder="Masukkan NU-PTK Anda" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Jadwal</label>
                      <select value={jadwal} onChange={(e) => setJadwal(e.target.value)} className="custom-select col-12">
                        return(
                        {getjadwal.map((data) => {
                          return (
                            <option value={data.id}>{data.from_pelajaran.nama_pelajaran} ({data.from_guru.nama_guru}) ({data.from_kelas.nama_kelas})</option>
                          )
                        })}
                        );
                      </select>
                    </div>
                    
                  </div>
                  {/* <div className="col-md-6">
                      <div className="form-group">
                        <label>Date of Birth :</label>
                        <input type="text" className="form-control date-picker" placeholder="Select Date" />
                      </div>
                    </div> */}
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Waktu Mulai</label>
                      <input className="form-control time-picker-default" placeholder="time" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Waktu Selesai</label>
                      <input className="form-control time-picker-default" placeholder="time" type="text" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Waktu Pengerjaan</label>
                      <input className="form-control" type="text" placeholder="Masukkan Waktu Pengerjaan" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Jumlah Soal</label>
                      <input className="form-control" type="text" placeholder="Masukkan Jumlah Soal" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
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