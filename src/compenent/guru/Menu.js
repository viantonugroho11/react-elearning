import React from 'react'
//import hook useState dan useEffect from react
import { useState, useEffect } from 'react';
//import axios
import axios from 'axios';
// import { Link } from 'react-router-dom';
function MenuGuru() {
  //define state
  const [posts, setPosts] = useState([]);

  //token
  const token = localStorage.getItem("token");
  //id
  const id = localStorage.getItem("id");
  //useEffect hook
  useEffect(() => {

    //panggil method "fetchData"
    fectMenuPelajaran();

  }, []);

  //function "fetchData"
  const fectMenuPelajaran = async () => {
    // auth
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    //fetching
    const response = await axios.get(`http://appsiaksd.ugcorpusskkni.online/api/guru/pelajaran/${id}`);
    //get response data
    const data = await response.data.data;

    //assign response data to state "posts"
    setPosts(data);
  }
    return (
      <div>
        <div className="left-side-bar">
          <div className="brand-logo">
            <a href="index.html">
              {/* <img src="%PUBLIC_URL%/vendors/images/deskapp-logo.svg" alt className="dark-logo" />
              <img src="%PUBLIC_URL%/vendors/images/deskapp-logo-white.svg" alt className="light-logo" /> */}
            </a>
            <div className="close-sidebar" data-toggle="left-sidebar-close">
              <i className="ion-close-round" />
            </div>
          </div>
          <div className="menu-block customscroll">
            <div className="sidebar-menu">
              <ul id="accordion-menu">
                <li className="dropdown">
                  <a href="/guru" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-house-1" /><span className="mtext">Home</span>
                  </a>
                </li>
                <li className="dropdown">
                  <a href="/guru/rpp" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-edit2" /><span className="mtext">RPP</span>
                  </a>
                </li>
                <li className="dropdown">
                  <a href="/guru/silabus" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-library" /><span className="mtext">Silabus</span>
                  </a>
                </li>
                <li>
                  <a href="/guru/pelajaran" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-calendar1" /><span className="mtext">Pelajaran</span>
                  </a>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle">
                    <span className="micon dw dw-apartment" /><span className="mtext">Materi</span>
                  </a>
                  <ul className="submenu">
                    return (
                    {posts.map((data, index) => {
                      return (
                        <li><a href={"/guru/materi/"+data.id}>{data.from_pelajaran.nama_pelajaran}</a></li>
                      )
                    })}
                    );
                  </ul>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle">
                    <span className="micon dw dw-apartment" /><span className="mtext">Soal</span>
                  </a>
                  <ul className="submenu">
                    return (
                    {posts.map((data, index) => {
                      return (
                        <li><a href={"/guru/soal/" + data.id}>{data.from_pelajaran.nama_pelajaran}</a></li>
                      )
                    })}
                    );
                  </ul>
                </li>
                {/* <li className="dropdown">
                  <a href="/guru/angkatan" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-apartment" /><span className="mtext">Angkatan</span>
                  </a>
                </li> */}
                <li>
                  <div className="dropdown-divider" />
                </li>
                <li>
                  <div className="sidebar-small-cap">Ujian</div>
                </li>
                <li className="dropdown">
                  <a href="/guru/ujian" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-apartment" /><span className="mtext">Ujian</span>
                  </a>
                </li>
                {/* <li className="dropdown">
                  <a href="/guru/soalujian" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-apartment" /><span className="mtext">Soal Ujian</span>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="mobile-menu-overlay" />
      </div>
    )
  }
export default MenuGuru
