import React from 'react'
//import hook useState dan useEffect from react
import { useState, useEffect } from 'react';
//import axios
import axios from 'axios';
import { Link } from 'react-router-dom';
function MenuGuru() {
  //define state
  const [posts, setPosts] = useState([]);

  //token
  // const token = localStorage.getItem("token");
  //id
  const id = localStorage.getItem("id");
  //useEffect hook
  useEffect(() => {

    //panggil method "fetchData"
    fectMenuPelajaran();

  }, []);

  //function "fetchData"
  const fectMenuPelajaran = async () => {
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
            <Link to="index.html">
              {/* <img src="%PUBLIC_URL%/vendors/images/deskapp-logo.svg" alt className="dark-logo" />
              <img src="%PUBLIC_URL%/vendors/images/deskapp-logo-white.svg" alt className="light-logo" /> */}
            </Link>
            <div className="close-sidebar" data-toggle="left-sidebar-close">
              <i className="ion-close-round" />
            </div>
          </div>
          <div className="menu-block customscroll">
            <div className="sidebar-menu">
              <ul id="accordion-menu">
                <li className="dropdown">
                  <Link to="/guru" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-house-1" /><span className="mtext">Home</span>
                  </Link>
                </li>
                <li className="dropdown">
                  <Link to="/guru/rpp" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-edit2" /><span className="mtext">RPP</span>
                  </Link>
                </li>
                <li className="dropdown">
                  <Link to="/guru/silabus" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-library" /><span className="mtext">Silabus</span>
                  </Link>
                </li>
                <li>
                  <Link to="/guru/pelajaran" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-calendar1" /><span className="mtext">Pelajaran</span>
                  </Link>
                </li>
                <li className="dropdown">
                  <Link className="dropdown-toggle">
                    <span className="micon dw dw-apartment" /><span className="mtext">Materi</span>
                  </Link>
                  <ul className="submenu">
                    return (
                    {posts.map((data, index) => {
                      return (
                        <li><Link to={"/guru/materi/"+data.id}>{data.from_pelajaran.nama_pelajaran}</Link></li>
                      )
                    })}
                    );
                  </ul>
                </li>
                <li className="dropdown">
                  <Link className="dropdown-toggle">
                    <span className="micon dw dw-apartment" /><span className="mtext">Soal</span>
                  </Link>
                  <ul className="submenu">
                    return (
                    {posts.map((data, index) => {
                      return (
                        <li><Link to={"/guru/soal/" + data.id}>{data.from_pelajaran.nama_pelajaran}</Link></li>
                      )
                    })}
                    );
                  </ul>
                </li>
                {/* <li className="dropdown">
                  <Link to="/guru/angkatan" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-apartment" /><span className="mtext">Angkatan</span>
                  </Link>
                </li> */}
                <li>
                  <div className="dropdown-divider" />
                </li>
                <li>
                  <div className="sidebar-small-cap">Ujian</div>
                </li>
                <li className="dropdown">
                  <Link to="/guru/ujian" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-apartment" /><span className="mtext">Ujian</span>
                  </Link>
                </li>
                <li className="dropdown">
                  <Link to="/guru/soalujian" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-apartment" /><span className="mtext">Soal Ujian</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mobile-menu-overlay" />
      </div>
    )
  }
export default MenuGuru
