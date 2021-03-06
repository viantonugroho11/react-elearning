import React from 'react'
import Header from '../../compenent/guru/Header'
import Menu from '../../compenent/guru/Menu'
import SideBar from '../../compenent/guru/SideBar'
// import DataTable from 'react-data-table-component';
// import { Link } from "react-router-dom";
//import hook useState dan useEffect from react
import { useState, useEffect } from 'react';
//import axios
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
//import hook useState from react
// import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import Footer from '../../compenent/Footer';
function EditUjianGuru() {
  //variable value
  const [nama_ujian, setNamaujian] = useState('');
  const [tgl_ujian, setTglUjian] = useState('');
  const [waktu_ujian, setWaktuUjian] = useState('');
  const [jumlah_soal, setJumlahSoal] = useState('');
  const [jam_mulai, setJamMulai] = useState('');
  const [jam_selesai, setJamSelesai] = useState('');
  const [jadwal, setJadwal] = useState('');

  //state validation
  const [validation, setValidation] = useState([]);

  //set variable jadwal
  const [getjadwal, setJadwalUjian] = useState([]);

  //history
  const history = useHistory();

  //token
  const token = localStorage.getItem("token");
  //id
  const idguru = localStorage.getItem("id");

  //const id
  const { id } = useParams();

  //get ujian by id
  const getUjian = async () => {
    //set axios header dengan type Authorization + Bearer token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const response = await axios.get(`http://appsiaksd.ugcorpusskkni.online/api/guru/ujian/${id}`);
    //get response data
    const data = await response.data.data;
    //set data jadwal
    setNamaujian(data.nama_ujian);
    setTglUjian(data.tanggal_ujian);
    setWaktuUjian(data.waktu_ujian);
    setJumlahSoal(data.jumlah_soal);
    setJamMulai(data.jam_mulai_ujian);
    setJamSelesai(data.jam_selesai_ujian);
    setJadwal(data.jadwal_id);
  };

  // fetch data jadwal
  const getJadwal = async () => {
    //set axios header dengan type Authorization + Bearer token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const response = await axios.get(`http://appsiaksd.ugcorpusskkni.online/api/guru/pelajaran/${idguru}`);
    //get response data
    const data = await response.data.data;
    //set data jadwal
    setJadwalUjian(data);
  };


  //method "storePost"
  const storePost = async (e) => {
    e.preventDefault();
    //auth
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    // console.log(token);

    const formData = new FormData();

    //append data to formData
    formData.append('nama_ujian', nama_ujian);
    formData.append('jadwal_id', jadwal);
    formData.append('tanggal_ujian', tgl_ujian);
    formData.append('jam_mulai_ujian', jam_mulai);
    formData.append('jam_selesai_ujian', jam_selesai);
    formData.append('waktu_ujian', waktu_ujian);
    formData.append('jumlah_soal', jumlah_soal);
    formData.append('status_ujian', 'a');

    //send data to server
    // axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
    await axios.post('http://appsiaksd.ugcorpusskkni.online/api/guru/ujian', formData)
      .then(() => {
        swal("Berhasil", "Data Berhasil Disimpan", "success");
        //redirect
        history.push('/guru/ujian');

      })
      .catch((error) => {
        swal("Gagal", error.response.data.message, "error");
        //assign validation on state
        console.log(error.response.data.message);
        console.log(error.response.data.data);
        setValidation(error.response.data);
        console.log(validation);
      })

  };

  useEffect(() => {

    //panggil method "fetchData"
    getJadwal();
    getUjian();
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
                  {
                    validation.message && (
                      <div className="alert alert-danger">
                        {validation.message}
                      </div>
                    )
                  }
                </div>
              </div>
              <form onSubmit={storePost}>
                <div className="dropdown-divider" />
                <p><strong>Data Ujian</strong></p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Nama Ujian</label>
                      <input value={nama_ujian} onChange={(e) => setNamaujian(e.target.value)} className="form-control" type="text" placeholder="Nama Ujian" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Tanggal Ujian</label>
                      <input value={tgl_ujian} onChange={(e) => setTglUjian(e.target.value)} className="form-control" type="date" placeholder="Masukkan NU-PTK Anda" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Jadwal</label>
                      <select value={jadwal} onChange={(e) => setJadwal(e.target.value)} className="custom-select col-12">
                        <option value="">Pilih Jadwal</option>
                        return(
                        {getjadwal.map((data) => {
                          return (
                            <option value={data.id}>{data.from_pelajaran.nama_pelajaran} ({data.from_kelas.nama_kelas})</option>
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
                      <input value={jam_mulai} onChange={(e) => setJamMulai(e.target.value)} className="form-control" placeholder="time" type="time" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Waktu Selesai</label>
                      <input value={jam_selesai} onChange={(e) => setJamSelesai(e.target.value)} className="form-control" placeholder="time" type="time" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Waktu Pengerjaan</label>
                      <input value={waktu_ujian} onChange={(e) => setWaktuUjian(e.target.value)} className="form-control" type="text" placeholder="Masukkan Waktu Pengerjaan" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Jumlah Soal</label>
                      <input value={jumlah_soal} onChange={(e) => setJumlahSoal(e.target.value)} className="form-control" type="text" placeholder="Masukkan Jumlah Soal" />
                    </div>
                  </div>
                </div>
                <div className="clearfix">
                  <div className="pull-right">
                    <button className="btn btn-primary btn-sm scroll-click" type="submit">Simpan</button>
                  </div>
                </div>
              </form>
            </div>
            {/* Input Validation End */}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default EditUjianGuru