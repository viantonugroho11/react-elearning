import React from 'react'
import Header from '../../compenent/Header'
import Menu from '../../compenent/Menu'
import SideBar from '../../compenent/SideBar'
import { Link } from "react-router-dom";
import DataTable from 'react-data-table-component';

import swal from 'sweetalert';
//import hook useState dan useEffect from react
import { useState, useEffect } from 'react';
//import axios
import axios from 'axios';
import Footer from '../../compenent/Footer';
function IndexSiswa() {
  //token
  const token = localStorage.getItem("token");

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
    // auth
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    //fetching
    const response = await axios.get('http://appsiaksd.ugcorpusskkni.online/api/admin/siswa');
    //get response data
    const data = await response.data.data;

    //assign response data to state "posts"
    setPosts(data);
  }
  //function "deletePost"
  const deletePost = async (id) => {
    // auth
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    //sending
    await axios.delete(`http://appsiaksd.ugcorpusskkni.online/api/admin/siswa/${id}`)
      .then(() => {
        //panggil function "fetchData"
        fectData();
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
    fectData();
  }

  const datasiswa = posts.map((user) => ({
    nama: user.nama_siswa,
    nis: user.nis,
    email: user.email,
    status: user.status,
    aksi: <div>
      {/* icon edit */}
      {/* <i><Link to={`/admin/siswa/edit/${user.id}`} className="fa fa-edit" style={{ color: '#00a65a' }}></Link></i> */}
      <Link className="btn btn-warning btn-sm" to={"/admin/siswa/edit/" + user.id}><i className="fa fa-edit"></i></Link>
      {/* icon delete */}
      <button className="btn btn-danger btn-sm" onClick={() => deletePost(user.id)}><i className="fa fa-trash"></i></button><br />
      {/* <button className="btn btn-danger btn-sm" onClick={() => deletePost(user.id)}>Delete</button><br /> */}
    </div>
    ,
  }));


  const columns = [
    {
      name: 'Nama Lengkap',
      selector: row => row.nama,
      sortable: true,
    },
    {
      name: 'NIS',
      selector: row => row.nis,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true,
    },
    // {
    //   name: 'Foto',
    //   selector: row => row.foto,
    //   // sortable: true,
    // },
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
                    <h4>Data Siswa</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Data Siswa</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            {/* Simple Datatable start */}
            <div className="card-box mb-30">
              <div className="pd-20">
                <h3 className="text-blue h4">Data Siswa</h3>
                <Link to="/admin/siswa/create" className="btn btn-primary btn-sm">Tambah Data</Link>
              </div>
              <div className="pb-20">
                <DataTable
                  columns={columns}
                  data={datasiswa}
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

export default IndexSiswa;
