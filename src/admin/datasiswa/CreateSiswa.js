import React, { useEffect } from 'react'
import Header from '../../compenent/Header'
import Menu from '../../compenent/Menu'
import SideBar from '../../compenent/SideBar'
import axios from 'axios'
import { Link } from "react-router-dom";
//import hook history dari react router dom
import { useHistory } from "react-router-dom";
//import hook useState from react
import { useState } from 'react'
import swal from 'sweetalert'
import Footer from '../../compenent/Footer'
function CreateSiswa() {
  useEffect(() => {
    GetKelas()
  }, [])
  // token
  const token = localStorage.getItem('token');

  // inisialiasasi const
  const [nama, setNama] = useState('');
  //nis
  const [nis, setNis] = useState('');
  const [nisn, setNisn] = useState('');
  const [kelas, setKelas] = useState('');
  const [tmp_lahir, setTmpLahir] = useState('');
  const [tgl_lahir, setTglLahir] = useState('');
  const [tgl_masuk, setTglMasuk] = useState('');
  const [usia, setUsia] = useState('');
  const [jkelamin, setJkelamin] = useState('');
  const [status, setStatus] = useState('');
  const [nmayah, setNmAyah] = useState('');
  const [pkayah, setPkAyah] = useState('');
  const [nmibu, setNmIbu] = useState('');
  const [pkibu, setPkIbu] = useState('');
  const [alamat, setAlamat] = useState('');
  const [notelp, setNoTelp] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [foto, setFoto] = useState();

  const [dataKelas, setDataKelas] = useState([])
  //setvalidasi
  const [validation, setValidation] = useState({});

  //history
  const history = useHistory();

  //method "storePost"
  const storePost = async (e) => {
    e.preventDefault();
    //set axios header dengan type Authorization + Bearer token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const formData = new FormData();

    //append data to formData
    formData.append('nama_siswa', nama);
    formData.append('nisn', nisn);
    formData.append('nis', nis);
    formData.append('kelas_id', kelas);
    formData.append('tanggal_masuk_sekolah', tgl_masuk);
    formData.append('tempat_lahir', tmp_lahir);
    formData.append('tgl_lahir', tgl_lahir);
    formData.append('usia', usia);
    formData.append('jenis_kelamin', jkelamin);
    formData.append('status', status);
    formData.append('nama_ayah', nmayah);
    formData.append('pk_ayah', pkayah);
    formData.append('nama_ibu', nmibu);
    formData.append('pk_ibu', pkibu);
    formData.append('alamat', alamat);
    formData.append('nomor_telepon_orangtua', notelp);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('foto', foto);
    //send data to server
    await axios.post('http://appsiaksd.ugcorpusskkni.online/api/admin/siswa', formData)
      .then(() => {
        swal("Berhasil", "Data berhasil ditambahkan", "success");
        //redirect
        history.push('/admin/siswa');

      })
      .catch((error) => {
        swal("Gagal", "Data gagal ditambahkan", "error");

        //assign validation on state
        setValidation(error.response.data);
      })

  };
  //method "getDataKelas"
  const GetKelas = async () => {
    //set axios header dengan type Authorization + Bearer token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    await axios.get('http://appsiaksd.ugcorpusskkni.online/api/admin/kelas')
      .then(res => {
        const dataKelas = res.data.data
        setDataKelas(dataKelas)
      })
      .catch(err => {
        console.log(err)
      })
  }


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
                    <h4>Form Data Siswa</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Form Data Siswa</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            {/* Default Basic Forms Start */}
            <div className="pd-20 card-box mb-30">
              <div className="clearfix">
                <div className="pull-left">
                  <h4 className="text-blue h4">Form Biodata</h4>
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
                <p><strong>Biodata Diri</strong></p>
                <div className="form-group">
                  <label>Nama Lengkap</label>
                  <input value={nama} onChange={(e) => setNama(e.target.value)} className="form-control" type="text" placeholder="Masukkan Nama Lengkap Anda" />
                </div>
                <div className="form-group">
                  <label>NIS</label>
                  <input value={nis} onChange={(e) => setNis(e.target.value)} className="form-control" type="text" placeholder="Masukkan NIS Anda" />
                </div>
                <div className="form-group">
                  <label>NISN</label>
                  <input value={nisn} onChange={(e) => setNisn(e.target.value)} className="form-control" type="text" placeholder="Masukkan NIS Anda" />
                </div>
                <div className="form-group">
                  <label>Kelas</label>
                  <select value={kelas} onChange={(e) => setKelas(e.target.value)} className="custom-select col-12">
                    <option selected>Pilihan</option>
                    return (
                    {dataKelas.map((data, index) => {
                      return (
                        <option key={index} value={data.id}>{data.nama_kelas}</option>
                      )
                    })}
                    );
                  </select>
                </div>
                {/* <div className="form-group">
                  <label>Tingkatan</label>
                  <select className="custom-select col-12">
                    <option selected>Pilihan</option>
                    <option value={1}>I</option>
                    <option value={2}>II</option>
                    <option value={2}>III</option>
                    <option value={2}>IV</option>
                    <option value={2}>V</option>
                    <option value={2}>VI</option>
                  </select>
                </div> */}
                <div className="form-group">
                  <label>Tempat Lahir</label>
                  <input value={tmp_lahir} onChange={(e) => setTmpLahir(e.target.value)} className="form-control" type="text" placeholder="Masukkan Tempat Lahir Anda" />
                </div>
                <div className="form-group">
                  <label htmlFor="example-datetime-local-input">Tanggal Lahir</label>
                  <input value={tgl_lahir} onChange={(e) => setTglLahir(e.target.value)} className="form-control" placeholder="Masukkan Tanggal Lahir Anda" type="date" />
                </div>
                <div className="form-group">
                  <label htmlFor="example-datetime-local-input">Per Tanggal</label>
                  <input value={tgl_masuk} onChange={(e) => setTglMasuk(e.target.value)} className="form-control" placeholder="Masukkan Per Tanggal Anda" type="date" />
                </div>
                <div className="form-group">
                  <label>Usia</label>
                  <input value={usia} onChange={(e) => setUsia(e.target.value)} className="form-control" type="text" placeholder="Masukkan Usia Anda" />
                </div>
                <div className="form-group">
                  <label>Jenis Kelamin</label>
                  <select value={jkelamin} onChange={(e) => setJkelamin(e.target.value)} className="custom-select col-12">
                    <option selected>Pilihan</option>
                    <option value={0}>Laki - laki</option>
                    <option value={1}>Perempuan</option>
                  </select>
                </div>
                {/* <div className="form-group">
                  <label>Status</label>
                  <select value={status} onChange={(e) => setStatus(e.target.value)} className="custom-select col-12">
                    <option selected>Pilihan</option>
                    <option value={0}>Aktif</option>
                    <option value={1}>Tidak Aktif</option>
                  </select>
                </div> */}
                <div className="form-group">
                  <label>Foto</label>
                  <input onChange={(e) => setFoto(e.target.files[0])} className="form-control" type="file" placeholder="Masukkan Usia Anda" />
                </div>
                <div className="dropdown-divider" />
                <p><strong>Biodata Orangtua</strong></p>
                <div className="form-group">
                  <label>Nama Ayah</label>
                  <input value={nmayah} onChange={(e) => setNmAyah(e.target.value)} className="form-control" type="text" placeholder="Masukkan Nama Ayah Anda" />
                </div>
                <div className="form-group">
                  <label>Pekerjaan Ayah</label>
                  {/* <input value={pkayah} onChange={(e) => setPkAyah(e.target.value)} className="form-control" type="text" placeholder="Masukkan Pekerjaan Ayah Anda" /> */}
                  {/* select */}
                  <select value={pkayah} onChange={(e) => setPkAyah(e.target.value)} className="custom-select col-12">
                    <option selected>Pilihan Pekerjaan Ayah</option>
                    <option value={"Belum/Tidak Bekerja"}>Belum/Tidak Bekerja</option>
                    <option value={"Mengurus Rumah Tangga"}>Mengurus Rumah Tangga</option>
                    <option value={"Pelajar/Mahasiswa"}>Pelajar/Mahasiswa</option>
                    <option value={"Pensiunan"}>Pensiunan</option>
                    <option value={"Pegawai Negeri Sipil (PNS)"}>Pegawai Negeri Sipil (PNS)</option>
                    <option value={"Tentara Nasional Indonesia (TNI)"}>Tentara Nasional Indonesia (TNI)</option>
                    <option value={"Kepolisian RI (POLRI)"}>Kepolisian RI (POLRI)</option>
                    <option value={"Perdagangan"}>Perdagangan</option>
                    <option value={"Petani/Pekebun"}>Petani/Pekebun</option>
                    <option value={"Peternak"}>Peternak</option>
                    <option value={"Nelayan/Perikanan"}>Nelayan/Perikanan</option>
                    <option value={"Industri"}>Industri</option>
                    <option value={"Konstruksi"}>Konstruksi</option>
                    <option value={"Transportasi"}>Transportasi</option>
                    <option value={"Karyawan Swasta"}>Karyawan Swasta</option>
                    <option value={"Karyawan BUMN"}>Karyawan BUMN</option>
                    <option value={"Karyawan BUMD"}>Karyawan BUMD</option>
                    <option value={"Karyawan Honorer"}>Karyawan Honorer</option>
                    <option value={"Buruh Harian Lepas"}>Buruh Harian Lepas</option>
                    <option value={"Buruh Tani/Perkebunan"}>Buruh Tani/Perkebunan</option>
                    <option value={"Buruh Nelayan/Perikanan"}>Buruh Nelayan/Perikanan</option>
                    <option value={"Buruh Peternakan"}>Buruh Peternakan</option>
                    <option value={"Pembantu Rumah Tangga"}>Pembantu Rumah Tangga</option>
                    <option value={"Tukang Cukur"}>Tukang Cukur</option>
                    <option value={"Tukang Listrik"}>Tukang Listrik</option>
                    <option value={"Tukang Batu"}>Tukang Batu</option>
                    <option value={"Tukang Kayu"}>Tukang Kayu</option>
                    <option value={"Tukang Sol Sepatu"}>Tukang Sol Sepatu</option>
                    <option value={"Tukang Las/Pandai Besi"}>Tukang Las/Pandai Besi</option>
                    <option value={"Tukang Jahit"}>Tukang Jahit</option>
                    <option value={"Tukang Gigi"}>Tukang Gigi</option>
                    <option value={"Penata Rias"}>Penata Rias</option>
                    <option value={"Penata Busana"}>Penata Busana</option>
                    <option value={"Penata Rambut"}>Penata Rambut</option>
                    <option value={"Mekanik"}>Mekanik</option>
                    <option value={"Seniman"}>Seniman</option>
                    <option value={"Tabib"}>Tabib</option>
                    <option value={"Paraji"}>Paraji</option>
                    <option value={"Perancang Busana"}>Perancang Busana</option>
                    <option value={"Penterjemah"}>Penterjemah</option>
                    <option value={"Imam Masjid"}>Imam Masjid</option>
                    <option value={"Pendeta"}>Pendeta</option>
                    <option value={"Pastor"}>Pastor</option>
                    <option value={"Wartawan"}>Wartawan</option>
                    <option value={"Ustadz/Mubaligh"}>Ustadz/Mubaligh</option>
                    <option value={"Juru Masak"}>Juru Masak</option>
                    <option value={"Promotor Acara"}>Promotor Acara</option>
                    <option value={"Anggota DPR-RI"}>Anggota DPR-RI</option>
                    <option value={"Anggota DPD"}>Anggota DPD</option>
                    <option value={"Anggota BPK"}>Anggota BPK</option>
                    <option value={"Presiden"}>Presiden</option>
                    <option value={"Wakil Presiden"}>Wakil Presiden</option>
                    <option value={"Anggota Mahkamah Konstitusi"}>Anggota Mahkamah Konstitusi</option>
                    <option value={"Anggota Kabinet/Kementrian"}>Anggota Kabinet/Kementrian</option>
                    <option value={"Duta Besar"}>Duta Besar</option>
                    <option value={"Gubernur"}>Gubernur</option>
                    <option value={"Wakil Gubernur"}>Wakil Gubernur</option>
                    <option value={"Bupati"}>Bupati</option>
                    <option value={"Wakil Bupati"}>Wakil Bupati</option>
                    <option value={"Walikota"}>Walikota</option>
                    <option value={"Wakil Walikota"}>Wakil Walikota</option>
                    <option value={"Anggota DPRD Prop."}>Anggota DPRD Prop.</option>
                    <option value={"Anggota DPRD Kab./Kota"}>Anggota DPRD Kab./Kota</option>
                    <option value={"Dosen"}>Dosen</option>
                    <option value={"Guru"}>Guru</option>
                    <option value={"Pilot"}>Pilot</option>
                    <option value={"Pengacara"}>Pengacara</option>
                    <option value={"Notaris"}>Notaris</option>
                    <option value={"Arsitek"}>Arsitek</option>
                    <option value={"Akuntan"}>Akuntan</option>
                    <option value={"Konsultan"}>Konsultan</option>
                    <option value={"Dokter"}>Dokter</option>
                    <option value={"Bidan"}>Bidan</option>
                    <option value={"Perawat"}>Perawat</option>
                    <option value={"Apoteker"}>Apoteker</option>
                    <option value={"Psikiater/Psikolog"}>Psikiater/Psikolog</option>
                    <option value={"Penyiar Televisi"}>Penyiar Televisi</option>
                    <option value={"Penyiar Radio"}>Penyiar Radio</option>
                    <option value={"Pelaut"}>Pelaut</option>
                    <option value={"Peneliti"}>Peneliti</option>
                    <option value={"Sopir"}>Sopir</option>
                    <option value={"Pialang"}>Pialang</option>
                    <option value={"Paranormal"}>Paranormal</option>
                    <option value={"Pedagang"}>Pedagang</option>
                    <option value={"Perangkat Desa"}>Perangkat Desa</option>
                    <option value={"Kepala Desa"}>Kepala Desa</option>
                    <option value={"Biarawati"}>Biarawati</option>
                    <option value={"Wiraswasta"}>Wiraswasta</option>

                  </select>

                </div>
                <div className="form-group">
                  <label>Nama Ibu</label>
                  <input value={nmibu} onChange={(e) => setNmIbu(e.target.value)} className="form-control" type="text" placeholder="Masukkan Nama Ibu Anda" />
                </div>
                <div className="form-group">
                  <label>Pekerjaan Ibu</label>
                  <select value={pkibu} onChange={(e) => setPkIbu(e.target.value)} className="form-control">
                    <option>Pilih Pekerjaan Ibu</option>
                    <option value={"Belum/Tidak Bekerja"}>Belum/Tidak Bekerja</option>
                    <option value={"Mengurus Rumah Tangga"}>Mengurus Rumah Tangga</option>
                    <option value={"Pelajar/Mahasiswa"}>Pelajar/Mahasiswa</option>
                    <option value={"Pensiunan"}>Pensiunan</option>
                    <option value={"Pegawai Negeri Sipil (PNS)"}>Pegawai Negeri Sipil (PNS)</option>
                    <option value={"Tentara Nasional Indonesia (TNI)"}>Tentara Nasional Indonesia (TNI)</option>
                    <option value={"Kepolisian RI (POLRI)"}>Kepolisian RI (POLRI)</option>
                    <option value={"Perdagangan"}>Perdagangan</option>
                    <option value={"Petani/Pekebun"}>Petani/Pekebun</option>
                    <option value={"Peternak"}>Peternak</option>
                    <option value={"Nelayan/Perikanan"}>Nelayan/Perikanan</option>
                    <option value={"Industri"}>Industri</option>
                    <option value={"Konstruksi"}>Konstruksi</option>
                    <option value={"Transportasi"}>Transportasi</option>
                    <option value={"Karyawan Swasta"}>Karyawan Swasta</option>
                    <option value={"Karyawan BUMN"}>Karyawan BUMN</option>
                    <option value={"Karyawan BUMD"}>Karyawan BUMD</option>
                    <option value={"Karyawan Honorer"}>Karyawan Honorer</option>
                    <option value={"Buruh Harian Lepas"}>Buruh Harian Lepas</option>
                    <option value={"Buruh Tani/Perkebunan"}>Buruh Tani/Perkebunan</option>
                    <option value={"Buruh Nelayan/Perikanan"}>Buruh Nelayan/Perikanan</option>
                    <option value={"Buruh Peternakan"}>Buruh Peternakan</option>
                    <option value={"Pembantu Rumah Tangga"}>Pembantu Rumah Tangga</option>
                    <option value={"Tukang Cukur"}>Tukang Cukur</option>
                    <option value={"Tukang Listrik"}>Tukang Listrik</option>
                    <option value={"Tukang Batu"}>Tukang Batu</option>
                    <option value={"Tukang Kayu"}>Tukang Kayu</option>
                    <option value={"Tukang Sol Sepatu"}>Tukang Sol Sepatu</option>
                    <option value={"Tukang Las/Pandai Besi"}>Tukang Las/Pandai Besi</option>
                    <option value={"Tukang Jahit"}>Tukang Jahit</option>
                    <option value={"Tukang Gigi"}>Tukang Gigi</option>
                    <option value={"Penata Rias"}>Penata Rias</option>
                    <option value={"Penata Busana"}>Penata Busana</option>
                    <option value={"Penata Rambut"}>Penata Rambut</option>
                    <option value={"Mekanik"}>Mekanik</option>
                    <option value={"Seniman"}>Seniman</option>
                    <option value={"Tabib"}>Tabib</option>
                    <option value={"Paraji"}>Paraji</option>
                    <option value={"Perancang Busana"}>Perancang Busana</option>
                    <option value={"Penterjemah"}>Penterjemah</option>
                    <option value={"Imam Masjid"}>Imam Masjid</option>
                    <option value={"Pendeta"}>Pendeta</option>
                    <option value={"Pastor"}>Pastor</option>
                    <option value={"Wartawan"}>Wartawan</option>
                    <option value={"Ustadz/Mubaligh"}>Ustadz/Mubaligh</option>
                    <option value={"Juru Masak"}>Juru Masak</option>
                    <option value={"Promotor Acara"}>Promotor Acara</option>
                    <option value={"Anggota DPR-RI"}>Anggota DPR-RI</option>
                    <option value={"Anggota DPD"}>Anggota DPD</option>
                    <option value={"Anggota BPK"}>Anggota BPK</option>
                    <option value={"Presiden"}>Presiden</option>
                    <option value={"Wakil Presiden"}>Wakil Presiden</option>
                    <option value={"Anggota Mahkamah Konstitusi"}>Anggota Mahkamah Konstitusi</option>
                    <option value={"Anggota Kabinet/Kementrian"}>Anggota Kabinet/Kementrian</option>
                    <option value={"Duta Besar"}>Duta Besar</option>
                    <option value={"Gubernur"}>Gubernur</option>
                    <option value={"Wakil Gubernur"}>Wakil Gubernur</option>
                    <option value={"Bupati"}>Bupati</option>
                    <option value={"Wakil Bupati"}>Wakil Bupati</option>
                    <option value={"Walikota"}>Walikota</option>
                    <option value={"Wakil Walikota"}>Wakil Walikota</option>
                    <option value={"Anggota DPRD Prop."}>Anggota DPRD Prop.</option>
                    <option value={"Anggota DPRD Kab./Kota"}>Anggota DPRD Kab./Kota</option>
                    <option value={"Dosen"}>Dosen</option>
                    <option value={"Guru"}>Guru</option>
                    <option value={"Pilot"}>Pilot</option>
                    <option value={"Pengacara"}>Pengacara</option>
                    <option value={"Notaris"}>Notaris</option>
                    <option value={"Arsitek"}>Arsitek</option>
                    <option value={"Akuntan"}>Akuntan</option>
                    <option value={"Konsultan"}>Konsultan</option>
                    <option value={"Dokter"}>Dokter</option>
                    <option value={"Bidan"}>Bidan</option>
                    <option value={"Perawat"}>Perawat</option>
                    <option value={"Apoteker"}>Apoteker</option>
                    <option value={"Psikiater/Psikolog"}>Psikiater/Psikolog</option>
                    <option value={"Penyiar Televisi"}>Penyiar Televisi</option>
                    <option value={"Penyiar Radio"}>Penyiar Radio</option>
                    <option value={"Pelaut"}>Pelaut</option>
                    <option value={"Peneliti"}>Peneliti</option>
                    <option value={"Sopir"}>Sopir</option>
                    <option value={"Pialang"}>Pialang</option>
                    <option value={"Paranormal"}>Paranormal</option>
                    <option value={"Pedagang"}>Pedagang</option>
                    <option value={"Perangkat Desa"}>Perangkat Desa</option>
                    <option value={"Kepala Desa"}>Kepala Desa</option>
                    <option value={"Biarawati"}>Biarawati</option>
                    <option value={"Wiraswasta"}>Wiraswasta</option>

                  </select>

                </div>
                <div className="form-group">
                  <label>Alamat</label>
                  <textarea value={alamat} onChange={(e) => setAlamat(e.target.value)} className="form-control" type="text" placeholder="Masukkan Alamat Anda" defaultValue={""} />
                </div>
                <div className="form-group">
                  <label>Nomor Telpon Orangtua</label>
                  <input value={notelp} onChange={(e) => setNoTelp(e.target.value)} className="form-control" type="text" placeholder="Masukkan Nomor Orangtua Anda" />
                </div>
                <div className="dropdown-divider" />
                <p><strong>Akun E-Learning</strong></p>
                <div className="form-group">
                  <label>Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" type="text" placeholder="Masukkan Email Anda" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" type="password" placeholder="Masukkan Password Anda" />
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select value={status} onChange={(e) => setStatus(e.target.value)} className="custom-select col-12">
                    <option selected>Pilihan</option>
                    <option value={1}>Aktif</option>
                    <option value={0}>Tidak Aktif</option>
                  </select>
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
export default CreateSiswa;