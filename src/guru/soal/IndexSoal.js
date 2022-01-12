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
import { useParams } from 'react-router-dom';
function IndexSoalGuru (){
  //define state
  const [posts, setPosts] = useState([]);
  // const [pel, setPel] = useState([]);

  //token
  const token = localStorage.getItem('token');

  const { id } = useParams();
  // A super simple expandable component.
  const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
  //useEffect hook
  useEffect(() => {

    //panggil method "fetchData"
    fectData();

  }, []);


  //method "fetchPelajaran"
  // const fectPelajaran = async () => {
  //   //fetching
  //   const response = await axios.get(`http://appsiaksd.ugcorpusskkni.online/api/guru/pelajaran/${id}`);
  //   //get response data
  //   const data = await response.data.data;
  //   setPel(data);
  // }
  //function "fetchData"
  const fectData = async () => {
    // auth
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    //fetching
    const response = await axios.get(`http://appsiaksd.ugcorpusskkni.online/api/guru/tugas/${id}/edit`);
    //get response data
    const data = await response.data.data;

    //assign response data to state "posts"
    setPosts(data);
  }
  // const url = `http://appsiaksd.ugcorpusskkni.online/storage/FileMateri/`
  const datamateri = posts.map((user) => ({
    nama: user.nama_soal,
    // file: <a classname="btn btn-secondary" href={url + user.file_materi} download={user.file_materi}>Download</a>,
    // file: <form method="get" action={url + user.file_materi}>
    //   <button type="submit">Download!</button>
    // </form>,
    aksi:
      <div>
        <Link className="btn btn-sm btn-primary" to={"/guru/soal/edit/" + user.id}>Edit</Link><br />
        <Link className="btn btn-sm btn-success" to={"/guru/soal/show/" + user.id}>Show</Link><br />
        {/* <Link className="btn btn-sm btn-danger" href={"/guru/materi/delete/"}>Delete</Link><br /> */}
      </div>,
  }));


  const columns = [
    {
      name: 'Nama Materi',
      selector: row => row.nama,
      sortable: true,
    },
    // {
    //   name: 'File',
    //   selector: row => row.file,
    //   sortable: false,
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
                      <h4>Data Soal</h4>
                    </div>
                    <nav aria-label="breadcrumb" role="navigation">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Data Soal</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              {/* Simple Datatable start */}
              <div className="card-box mb-30">
                <div className="pd-20 d-flex justify-content-between">
                  <h4 className="text-blue h4">Data Kelas</h4>
                  <Link className="btn btn-sm btn-primary" to={"/guru/soal/create/" + id}><i className="fa fa-plus"></i> Tambah Soal</Link>
                </div>
                <div className="pb-20">
                  <DataTable
                    columns={columns}
                    data={datamateri}
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
  export default IndexSoalGuru;
