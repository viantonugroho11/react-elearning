import axios from 'axios';
import React, { Component, useState } from 'react'
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from "react-router-dom";
import HeaderSiswa from '../../compenent/siswa/Header';
import MenuSiswa from '../../compenent/siswa/Menu';
import SidebarSiswa from '../../compenent/siswa/Sidebar';

function IndexPelajaranSiswa() {
  //define history
  const history = useHistory();

  //define state
  const [posts, setPosts] = useState([]);
  // A super simple expandable component.
  const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
  //useEffect hook
  useEffect(() => {

    //panggil method "fetchData"
    fetchDataPelajaran();

  }, []);

  //token
  const id = localStorage.getItem("id");

  //fetch data
  const fetchDataPelajaran = async () => {
    //fetching
    const response = await axios.get(`http://appsiaksd.ugcorpusskkni.online/api/siswa/pelajaran/${id}`);
    //get response data
    const data = await response.data.data.to_user.get_jadwal;
    console.log(data);
    //assign response data to state "posts"
    setPosts(data);
  }
  return (
    <div>
      <HeaderSiswa />
      <SidebarSiswa />
      <MenuSiswa />
      <div className="main-container">
        <div className="pd-ltr-20 xs-pd-20-10">
          <div className="min-height-200px">
            <div className="page-header">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="title">
                    <h4>Daftar Pelajaran</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Cards</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div className="row clearfix">
              {/* return ( */}
              {posts.map((data, index) => {
                return (
                  // <div>
                    <div className="col-sm-12 col-md-4 mb-30">
                      <div className="card card-box">
                        <div className="card-body">
                          <h5 className="card-title">{data.get_pelajaran.nama_pelajaran}</h5>
                          <p className="card-text">{data.get_guru.nama_guru}</p>
                          <div className="row">
                            <div className="col-md-6">
                              <Link to={`/pelajaran/materi/${data.id}`} className="btn btn-primary">Materi</Link>
                            </div>
                            <div className="col-md-6">
                              <Link to={`/pelajaran/tugas/${data.id}`} className="btn btn-primary">Tugas</Link>
                            </div>
                          </div>
                          {/* <a href="#" className="btn btn-primary">Klik Me</a> */}
                        </div>
                      </div>
                    </div>
                  // </div>
                  // <option key={index} value={data.id}>{data.nama_kelas}</option>
                )
              })}
            </div>
          </div>
          <div className="footer-wrap pd-20 mb-20 card-box">
            DeskApp - Bootstrap 4 Admin Template By <a href="https://github.com/dropways" target="_blank">Ankit Hingarajiya</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default IndexPelajaranSiswa
