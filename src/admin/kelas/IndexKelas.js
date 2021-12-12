import React from 'react'
import Header from '../../compenent/Header'
import Menu from '../../compenent/Menu'
import SideBar from '../../compenent/SideBar'

import DataTable from 'react-data-table-component';

//import hook useState dan useEffect from react
import { useState, useEffect } from 'react';
//import axios
import axios from 'axios';
function IndexKelas(){
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
        const response = await axios.get('http://localhost:8000/api/admin/kelas');
        //get response data
        const data = await response.data.data;

        //assign response data to state "posts"
        setPosts(data);
    }

    const datakelas = posts.map((user) => ({
          nama:user.nama_kelas,
          tingkat:user.tingkat,
          jumlah:user.get_siswa_count,
          aksi:
          <div>
            <a classname="btn btn-secondary btn-sm" href={"/admin/siswa/edit/"+user.id}>Edit</a><br/>
            <a classname="btn btn-secondary btn-sm" href="/">Show</a><br/>
            <a classname="btn btn-secondary btn-sm" href="/">Delete</a><br/>
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
          name: 'Jumlah Siswa',
          selector: row => row.jumlah,
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
                  <a href="/admin/kelas/create" className="btn btn-sm btn-primary">+ tambah</a>
                </div>
                <div className="pb-20">
                  <DataTable
                  columns={columns}
                    data={datakelas}
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
export default IndexKelas
