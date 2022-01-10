import React from 'react'
import Header from '../../compenent/Header'
import Menu from '../../compenent/Menu'
import SideBar from '../../compenent/SideBar'

import DataTable from 'react-data-table-component';
// import { Link } from "react-router-dom";
//import hook useState dan useEffect from react
import { useState, useEffect } from 'react';
//import axios

import swal from 'sweetalert';
import axios from 'axios';
function IndexWaliKelas() {
  //token
  const token = localStorage.getItem("token");
  //define state
  const [posts, setPosts] = useState([]);
  // A super simple expandable component.
  const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
  //useEffect hook
  

  //function "fetchData"
  const fectDataWalikelas = async () => {
    // auth
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    //fetching
    const response = await axios.get('http://appsiaksd.ugcorpusskkni.online/api/admin/walikelas');
    //get response data
    const data = await response.data.data;

    //assign response data to state "posts"
    setPosts(data);
  }

  const dataujian = posts.map((user) => ({
    nama: user.nama_guru,
    nik: user.nik,
    email: user.email,
    nama_kelas: user.get_kelas.nama_kelas,
    aksi:
      <div>
        <a className="btn btn-secondary btn-sm" href={"/admin/walikelas/edit/" + user.id}>Edit</a><br />
        {/* <a classname="btn btn-secondary btn-sm" href="/">Show</a><br /> */}
        <button className="btn btn-danger btn-sm" onClick={() => deletePost(user.id)}>Delete</button><br />
      </div>,
  }));
  const columns = [
    {
      name: 'Nama',
      selector: row => row.nama,
      sortable: true,
    },
    {
      name: 'NIK',
      selector: row => row.nik,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Nama Kelas',
      selector: row => row.nama_kelas,
      sortable: true,
    },
    {
      name: 'Aksi',
      selector: row => row.aksi
    },
  ];
  useEffect(() => {
    //panggil method "fetchData"
    fectDataWalikelas();
  }, []);
  const deletePost = async (id) => {
    // auth
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    //sending
    await axios.delete(`http://appsiaksd.ugcorpusskkni.online/api/admin/walikelas/${id}`)
      .then(() => {
        //panggil function "fetchData"
        fectDataWalikelas();
        swal("Berhasil!", "Data berhasil dihapus", "success");
        //redirect
        // history.push('/admin/siswa');
      })
      .catch((error) => {
        swal("Gagal!", "Data gagal dihapus", "error");
        //assign validation on state
        // setValidation(error.response.data);
      })
    //panggil function "fetchData"
    fectDataWalikelas();
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
                <a href="/admin/walikelas/create" className="btn btn-sm btn-primary">+ tambah</a>
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
export default IndexWaliKelas
