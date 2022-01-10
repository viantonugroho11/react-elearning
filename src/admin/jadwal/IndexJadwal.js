import React from 'react'
import Header from '../../compenent/Header'
import Menu from '../../compenent/Menu'
import SideBar from '../../compenent/SideBar'

import DataTable from 'react-data-table-component';
// import { Link } from "react-router-dom";
//import hook useState dan useEffect from react
import { useState, useEffect } from 'react';
//import axios
import axios from 'axios';
//import swal
import swal from 'sweetalert';
function IndexJadwal(){
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
        const response = await axios.get('http://appsiaksd.ugcorpusskkni.online/api/admin/jadwal');
        //get response data
        const data = await response.data.data;

        //assign response data to state "posts"
        setPosts(data);
    }
  const deletePost = async (id) => {
    // auth
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    //sending
    await axios.delete(`http://appsiaksd.ugcorpusskkni.online/api/admin/jadwal/${id}`)
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
          nama:user.from_guru.nama_guru,
          kelas:user.from_kelas.nama_kelas,
          pelajaran:user.from_pelajaran.nama_pelajaran,
          aksi:
          <div>
            <a className="btn btn-secondary btn-sm" href={"/admin/siswa/edit/"+user.id}>Edit</a><br/>
            {/* <a className="btn btn-secondary btn-sm" href="/">Show</a><br/> */}
            <button className="btn btn-secondary btn-sm" onClick={() => deletePost(user.id)}>Delete</button><br/>
          </div>
          ,
    }));
    

    const columns = [
      {
          name: 'Guru',
          selector: row => row.nama,
          sortable: true,
      },
      {
          name: 'Kelas',
          selector: row => row.kelas,
          sortable: true,
      },
      {
          name: 'Pelaajaran',
          selector: row => row.pelajaran,
          sortable: true,
      },
      {
        name:'Aksi',
        selector:row=>row.aksi
      },
    ];
    return (
      <div>
        <Header/>
        <SideBar/>
        <Menu/>
        <div className="main-container">
          <div className="pd-ltr-20 xs-pd-20-10">
            <div className="min-height-200px">
              <div className="page-header">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="title">
                      <h4>Data Jadwal</h4>
                    </div>
                    <nav aria-label="breadcrumb" role="navigation">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Data Jadwal</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              {/* Simple Datatable start */}
              <div className="card-box mb-30">
                <div className="pd-20 d-flex justify-content-between">
                  <h4 className="text-blue h4">Data Jadwal</h4>
                  <a href="/admin/jadwal/create" className="btn btn-sm btn-primary">+ tambah</a>
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
            <div className="footer-wrap pd-20 mb-20 card-box">
              Learning Management System By  Developer
            </div>
          </div>
        </div>
      </div>
    )
  }
export default IndexJadwal
