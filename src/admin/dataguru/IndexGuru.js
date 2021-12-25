import React from 'react'
import Header from '../../compenent/Header'
import Menu from '../../compenent/Menu'
import SideBar from '../../compenent/SideBar'
import { Link } from "react-router-dom";
import DataTable from 'react-data-table-component';
//import hook useState dan useEffect from react
import { useState, useEffect } from 'react';
//import axios
import axios from 'axios';
function IndexGuru() {
  //define state
  const [posts, setPosts] = useState([]);
  // A super simple expandable component.
  const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
  //useEffect hook
  useEffect(() => {

    //panggil method "fetchData"
    fectData();

  }, []);

  //function "deletePost"
  const deletePost = async (id) => {

    //sending
    await axios.delete(`http://appsiaksd.ugcorpusskkni.online/api/admin/guru/${id}`);

    //panggil function "fetchData"
    fectData();
  }
  //function "fetchData"
  const fectData = async () => {
    //fetching
    const response = await axios.get('http://appsiaksd.ugcorpusskkni.online/api/admin/guru');
    //get response data
    const data = await response.data.data;

    //assign response data to state "posts"
    setPosts(data);
  }

  const datagurus = posts.map((user) => ({
    nama: user.nama_guru,
    nik: user.nik,
    email: user.email,
    status: user.status_kepegawaian,
    aksi: <div>
      <a classname="btn btn-secondary btn-sm" href={"/admin/guru/edit/" + user.id}>Edit</a><br />
      <a classname="btn btn-secondary btn-sm" href="/">Show</a><br />
      <button classname="btn btn-secondary btn-sm" onClick={() => deletePost(user.id)}>DELETE</button><br />
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
      name: 'Status',
      selector: row => row.status,
      sortable: true,
    },
    {
      name: 'Foto',
      selector: row => row.foto,
      // sortable: true,
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
                    <h4>Data Guru</h4>
                    <br />
                    {/* <a classname="btn btn-secondary btn-sm" href="/admin/guru/create">Tambah Data</a> */}
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page"><a href="/admin/guru">Data Guru</a></li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            {/* Simple Datatable start */}
            <div className="card-box mb-30">
              <div className="pd-20">
                <h4 className="text-blue h4">Data Guru</h4><br />
                <a classname="btn btn-secondary btn-sm" href="/admin/guru/create">Tambah Data</a>
              </div>
              <div className="pb-20">
                <DataTable
                  columns={columns}
                  data={datagurus}
                  // expandableRows
                  pagination
                  expandableRowsComponent={ExpandedComponent}
                />
                {/* <table className="data-table table stripe hover nowrap">
            <thead>
              <tr>
                <th className="table-plus datatable-nosort">Nama Lengkap</th>
                <th>NIK</th>
                <th>Email</th>
                <th>Status</th>
                <th>Foto</th>
                <th className="datatable-nosort">Aksi</th>
              </tr>
            </thead>
            <tbody>
              { posts.map((post, index) => (
              <tr key={post.id}>
                <td className="table-plus">{post.nama_guru}</td>
                <td>{post.nik}</td>
                <td>{post.email}</td>
                <td>{post.status_kepegawaian}</td>
                <td>29-03-2018</td>
                <td>
                  <div className="dropdown">
                    <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="/" role="button" data-toggle="dropdown">
                      <i className="dw dw-more" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                      <a className="dropdown-item" href="."><i className="dw dw-eye" /> View</a>
                      <a className="dropdown-item" href="/"><i className="dw dw-edit2" /> Edit</a>
                      <a className="dropdown-item" href="/"><i className="dw dw-delete-3" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
              ))}
            </tbody>
          </table> */}
              </div>
            </div>
            {/* Simple Datatable End */}

          </div>
          <div className="footer-wrap pd-20 mb-20 card-box">
            DeskApp - Bootstrap 4 Admin Template By <a href="/" target="_blank">Ankit Hingarajiya</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default IndexGuru;
