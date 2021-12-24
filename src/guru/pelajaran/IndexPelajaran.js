import React from 'react'
import Header from '../../compenent/guru/Header'
import Menu from '../../compenent/guru/Menu'
import SideBar from '../../compenent/guru/SideBar'
import DataTable from 'react-data-table-component';

//import hook useState dan useEffect from react
import { useState, useEffect } from 'react';
//import axios
import axios from 'axios';
// import { Link } from 'react-router-dom';
function IndexPelajaranGuru() {
  //define state
  const [posts, setPosts] = useState([]);

  //token
  const token = localStorage.getItem("token");
  //id
  const id = localStorage.getItem("id");
  // A super simple expandable component.
  const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
  //useEffect hook
  useEffect(() => {

    //panggil method "fetchData"
    fecthPelajaran();

  }, []);

  //method "ceklogin"
  // const fecthLogin = async () => {


  //function "fetchData"
  const fecthPelajaran = async () => {
    //fetching
    const response = await axios.get(`http://appsiaksd.ugcorpusskkni.online/api/guru/pelajaran/${id}`);
    //get response data
    const data = await response.data.data;

    //assign response data to state "posts"
    setPosts(data);
  }

  const datapelajaran = posts.map((pelajaran) => ({
    nama: pelajaran.from_kelas.nama_kelas,
    tingkat: pelajaran.from_kelas.tingkat,
    nmpelajaran: pelajaran.from_pelajaran.nama_pelajaran,
    aksi:
      <div>
        <a classname="btn btn-secondary" href={"/guru/kelas/edit/" + pelajaran.id}>Tambah Materi</a><br />
        <a classname="btn btn-secondary" href="/guru">Tambah Soal</a><br />
      </div>,
  }));


  const columns = [
    {
      name: 'Nama',
      selector: row => row.nama,
      sortable: true,
    },
    {
      name: 'Tingkat',
      selector: row => row.tingkat,
      sortable: true,
    },
    {
      name: 'Nama Pelajaran',
      selector: row => row.nmpelajaran,
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
                <DataTable
                  columns={columns}
                  data={datapelajaran}
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
export default IndexPelajaranGuru