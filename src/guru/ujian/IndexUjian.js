import React from 'react'
import Header from '../../compenent/guru/Header'
import Menu from '../../compenent/guru/Menu'
import SideBar from '../../compenent/guru/SideBar'
import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";
//import hook useState dan useEffect from react
import { useState, useEffect } from 'react';
//import axios
import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
function IndexUjianGuru() {
  //define state
  const [posts, setPosts] = useState([]);
  // const [pel, setPel] = useState([]);

  // const { id } = useParams();
  const id = localStorage.getItem("id");
  // A super simple expandable component.
  const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
  //useEffect hook
  useEffect(() => {

    //panggil method "fetchData"
    fecthDataUjianGuru();

  },[]);
  //function "fetchData"
  const fecthDataUjianGuru = async () => {
    //fetching
    const response = await axios.get(`http://appsiaksd.ugcorpusskkni.online/api/guru/ujian/${id}/edit`);
    //get response data
    const data = await response.data.data;

    //assign response data to state "posts"
    setPosts(data);
  }
  // const url =  `http://appsiaksd.ugcorpusskkni.online/storage/FileMateri/`
  const dataujian = posts.map((user) => ({
    nama: user.nama_ujian,
    pelajaran: user.get_jadwal.from_pelajaran.nama_pelajaran,
    kelas: user.get_jadwal.from_kelas.nama_kelas,
    tgl_ujian: user.tanggal_ujian,
    jam_mulai: user.jam_mulai_ujian,
    durasi: user.waktu_ujian,
    // file: <a href={url + user.file}>{user.file}</a>,
    aksi:
      <div>
        <a classname="btn btn-secondary" href={"/guru/ujian/edit/" + user.id}>Edit</a><br />
        <a classname="btn btn-secondary" href={"/guru/soalujian/show/" + user.id}>Show</a><br />
        <a classname="btn btn-secondary" href={"/guru/soalujian/create/" + user.id}>Tambah Soal</a><br />
      </div>,
  }));


  const columns = [
    {
      name: 'Nama Ujian',
      selector: row => row.nama,
      sortable: true,
    },
    {
      name: 'Pelajaran',
      selector: row => row.pelajaran,
      sortable: true,
    },
    {
      name: 'Kelas',
      selector: row => row.kelas,
      sortable: true,
    },
    {
      name: 'Tanggal Ujian',
      selector: row => row.tgl_ujian,
      sortable: true,
    },
    {
      name: 'Jam Mulai',
      selector: row => row.jam_mulai,
      sortable: true,
    },
    {
      name: 'Waktu',
      selector: row => row.durasi,
      sortable: true,
    },
    {
      name: 'Aksi',
      selector: row => row.aksi
    },
  ];
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
                    <h4>Data Ujian</h4>
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
                <h4 className="text-blue h4">Data Ujian</h4>
                <a href="/guru/ujian/create" className="btn btn-sm btn-primary">+ tambah</a>
              </div>
              <div className="pb-20">
                <DataTable
                  columns={columns}
                  data={dataujian}
                  // expandableRows
                  pagination
                  expandableRowsComponent={ExpandedComponent}
                />
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

export default IndexUjianGuru