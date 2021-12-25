import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class SideBarUjian extends Component {
  render() {
    return (
      <div>
        <div className="left-side-bar">
          <div className="brand-logo">
            <Link to="index.html">
              {/* <img src="%PUBLIC_URL%/vendors/images/deskapp-logo.svg" className="dark-logo" /> */}
              {/* <img src="%PUBLIC_URL%/vendors/images/deskapp-logo-white.svg"className="light-logo" /> */}
            </Link>
            <div className="close-sidebar" data-toggle="left-sidebar-close">
              <i className="ion-close-round" />
            </div>
          </div>
          <div className="menu-block customscroll">
            <div className="sidebar-menu">
              <div className="col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-3" style={{margin: '10px 0px 10px 0px'}}>
                    {/* <Link className="btn btn-primary btn-sm" to="#" role="button">20</Link> */}
                  </div>
                  <div className="col-3" style={{margin: '10px 0px 10px 0px'}}>
                    {/* <Link className="btn btn-primary btn-sm" to="#" role="button">20</Link> */}
                  </div>

                </div>
              </div>
            </div>
          </div>
        <div className="mobile-menu-overlay"/>
        </div>
      </div>
    )
  }
}
