import React from 'react'
import Header from '../../compenent/Header'
import Menu from '../../compenent/Menu'
import SideBar from '../../compenent/SideBar'

import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";
//import hook useState dan useEffect from react
import { useState, useEffect } from 'react';
//import axios
import axios from 'axios';
function IndexWaliKelas() {
  //define state
  const [posts, setPosts] = useState([]);
  // A super simple expandable component.
  const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
  //useEffect hook
  useEffect(() => {
    //panggil method "fetchData"
    fectData();
  }, []);

  //function "fetchData"
  const fectData = async () => {
    //fetching
    const response = await axios.get('http://appsiaksd.ugcorpusskkni.online/api/admin/ujian');
    //get response data
    const data = await response.data.data;

    //assign response data to state "posts"
    setPosts(data);
  }

  const dataujian = posts.map((user) => ({
    nama: user.nama_ujian,
    jadwal: user.get_jadwal.from_pelajaran.nama_pelajaran,
    tanggal: user.tanggal_ujian,
    waktu: user.waktu_ujian + " Menit",
    jumlah: user.jumlah_soal,
    status: user.status_ujian,
    soal_ujian: user.get_soal_ujian_count,
    aksi:
      <div>
        <a classname="btn btn-secondary btn-sm" href={"/admin/ujian/edit/" + user.id}>Edit</a><br />
        <a classname="btn btn-secondary btn-sm" href="/">Show</a><br />
        <a classname="btn btn-secondary btn-sm" href="/">Delete</a><br />
      </div>,
  }));
  const columns = [
    {
      name: 'Nama',
      selector: row => row.nama,
      sortable: true,
    },
    {
      name: 'Jadwal',
      selector: row => row.jadwal,
      sortable: true,
    },
    {
      name: 'Tanggal',
      selector: row => row.tanggal,
      sortable: true,
    },
    {
      name: 'Waktu',
      selector: row => row.waktu,
      sortable: true,
    },
    {
      name: 'Jumlah',
      selector: row => row.jumlah,
      sortable: true,
    },
    {
      name: 'Status',
      selector: row => row.status,
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
      <Menu />
      <SideBar />
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
                <table className="data-table table stripe hover nowrap">
                  <thead>
                    <tr>
                      <th className="table-plus datatable-nosort">Nama Kelas</th>
                      <th>Abjad Rombongan Belajar</th>
                      <th>Tingkatan</th>
                      <th className="datatable-nosort">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
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
export default IndexWaliKelas