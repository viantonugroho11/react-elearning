import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class MenuSiswa extends Component {
  render() {
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
                  <Link to="/dashboard" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-house-1" /><span className="mtext">Home</span>
                  </Link>
                </li>
                <li className="dropdown">
                  <Link to="/pelajaran" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-edit2" /><span className="mtext">Pelajaran</span>
                  </Link>
                </li>
                <li className="dropdown">
                  <Link to="/ujian" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-library" /><span className="mtext">Ujian</span>
                  </Link>
                </li>
                <li>
                  <Link to="/nilai" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-calendar1" /><span className="mtext">Nilai</span>
                  </Link>
                </li>
                <li className="dropdown">
                  <Link to="/" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-apartment" /><span className="mtext">Log Out</span>
                  </Link>
                </li>
                {/* <li className="dropdown">
                  <Link to="/admin/angkatan" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-apartment" /><span className="mtext">Angkatan</span>
                  </Link>
                </li> */}
                {/* <li>
                  <div className="dropdown-divider" />
                </li>
                <li>
                  <div className="sidebar-small-cap">Mapping</div>
                </li> */}
                {/* <li className="dropdown">
                  <Link to="/admin/walikelas" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-apartment" /><span className="mtext">Wali Kelas</span>
                  </Link>
                </li>
                <li className="dropdown">
                  <Link to="/admin/jadwal" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-apartment" /><span className="mtext">Jadwal</span>
                  </Link>
                </li>
                <li className="dropdown">
                  <Link to="/admin/ujian" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-apartment" /><span className="mtext">Ujian</span>
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="mobile-menu-overlay" />
      </div>
    )
  }
}
