import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    return (
      <div>
        <div className="left-side-bar">
          <div className="brand-logo">
            <a href="index.html">
              <img src="vendors/images/deskapp-logo.svg" alt className="dark-logo" />
              <img src="vendors/images/deskapp-logo-white.svg" alt className="light-logo" />
            </a>
            <div className="close-sidebar" data-toggle="left-sidebar-close">
              <i className="ion-close-round" />
            </div>
          </div>
          <div className="menu-block customscroll">
            <div className="sidebar-menu">
              <ul id="accordion-menu">
                <li className="dropdown">
                  <a href="javascript:;" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-house-1" /><span className="mtext">Home</span>
                  </a>
                </li>
                <li className="dropdown">
                  <a href="javascript:;" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-edit2" /><span className="mtext">Data Siswa</span>
                  </a>
                </li>
                <li className="dropdown">
                  <a href="javascript:;" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-library" /><span className="mtext">Data Guru</span>
                  </a>
                </li>
                <li>
                  <a href="calendar.html" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-calendar1" /><span className="mtext">Mata Pelajaran</span>
                  </a>
                </li>
                <li className="dropdown">
                  <a href="javascript:;" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-apartment" /><span className="mtext">Kelas</span>
                  </a>
                </li>
                <li className="dropdown">
                  <a href="javascript:;" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-apartment" /><span className="mtext">Angkatan</span>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider" />
                </li>
                <li>
                  <div className="sidebar-small-cap">Mapping</div>
                </li>
                <li className="dropdown">
                  <a href="javascript:;" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-apartment" /><span className="mtext">Wali Kelas</span>
                  </a>
                </li>
                <li className="dropdown">
                  <a href="javascript:;" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-apartment" /><span className="mtext">Jadwal</span>
                  </a>
                </li>
                <li className="dropdown">
                  <a href="" className="dropdown-toggle no-arrow">
                    <span className="micon dw dw-apartment" /><span className="mtext">Ujian</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mobile-menu-overlay"/>
      </div>
    )
  }
}
