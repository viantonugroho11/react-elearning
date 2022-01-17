import React from 'react'
import Header from '../../compenent/siswa/Header';
import Menu from '../../compenent/siswa/Menu';
import SideBar from '../../compenent/siswa/Sidebar';
import DataTable from 'react-data-table-component';
// import { ?? } from "react-router-dom";
//import hook useState dan useEffect from react
import { useState, useEffect } from 'react';
//import axios
import axios from 'axios';
import Footer from '../../compenent/Footer';
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function NilaiSiswa() {
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
    fectData();

  });
  //function "fetchData"
  const fectData = async () => {
    //fetching
    const response = await axios.get(`http://appsiaksd.ugcorpusskkni.online/api/siswa/nilai/${id}/soal`);
    //get response data
    const data = await response.data.data;

    //assign response data to state "posts"
    setPosts(data);
  }
  // const url =  `http://appsiaksd.ugcorpusskkni.online/storage/FileMateri/`
  const datarpp = posts.map((user) => ({
    nama: user.get_soal.nama_soal,
    nilai: user.nilai_soal,
    tgl_kumpul: user.created_at,
    // file: <a href={url + user.file}>{user.file}</a>,
    aksi:
      <div>
        {/* <a className="btn btn-secondary" href={"/guru/materi/edit/" + user.id}>Edit</a><br /> */}
        {/* <a className="btn btn-secondary" href={"/guru/materi/show/" + user.id}>Show</a><br />
        <a className="btn btn-secondary" href={"/guru/materi/delete/"}>Delete</a><br /> */}
      </div>,
  }));


  const columns = [
    {
      name: 'Nama Tugas',
      selector: row => row.nama,
      sortable: true,
    },
    {
      name: 'Nilai Tugas',
      selector: row => row.nilai,
      sortable: true,
    },
    {
      name: 'Tanggal Pengumpulan',
      selector: row => row.tgl_kumpul,
      sortable: true,
    },
    // {
    //   name: 'Aksi',
    //   selector: row => row.aksi
    // },
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
                    <h4>Data Nilai</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Data Nilai</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            {/* Simple Datatable start */}
            <div className="card-box mb-30">
              <div className="pd-20 d-flex justify-content-between">
                <h4 className="text-blue h4">Data Nilai</h4>
                {/* <a href="/guru/rpp/create" className="btn btn-sm btn-primary">+ tambah</a> */}
              </div>
              <div className="pb-20">
                <DataTable
                  columns={columns}
                  data={datarpp}
                  // expandableRows
                  pagination
                  expandableRowsComponent={ExpandedComponent}
                />
              </div>
            </div>
            {/* Simple Datatable End */}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default NilaiSiswa;