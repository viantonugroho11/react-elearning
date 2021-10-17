import React, { Component } from 'react'

export default class SideBarUjian extends Component {
  render() {
    return (
      <div>
        <div className="left-side-bar">
          <div className="brand-logo">
            <a href="index.html">
              <img src="%PUBLIC_URL%/vendors/images/deskapp-logo.svg" alt className="dark-logo" />
              <img src="%PUBLIC_URL%/vendors/images/deskapp-logo-white.svg" alt className="light-logo" />
            </a>
            <div className="close-sidebar" data-toggle="left-sidebar-close">
              <i className="ion-close-round" />
            </div>
          </div>
          <div className="menu-block customscroll">
            <div className="sidebar-menu">
              <div className="col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-3" style={{margin: '10px 0px 10px 0px'}}>
                    <a className="btn btn-primary btn-sm" href="#" role="button">20</a>
                  </div>
                  <div className="col-3" style={{margin: '10px 0px 10px 0px'}}>
                    <a className="btn btn-primary btn-sm" href="#" role="button">20</a>
                  </div>
                  <div className="col-3" style={{margin: '10px 0px 10px 0px'}}>
                    <a className="btn btn-primary btn-sm" href="#" role="button">20</a>
                  </div>
                  <div className="col-3" style={{margin: '10px 0px 10px 0px'}}>
                    <a className="btn btn-primary btn-sm" href="#" role="button">20</a>
                  </div>
                  <div className="col-3" style={{margin: '10px 0px 10px 0px'}}>
                    <a className="btn btn-primary btn-sm" href="#" role="button">1</a>
                  </div>
                  <div className="col-3" style={{margin: '10px 0px 10px 0px'}}>
                    <a className="btn btn-primary btn-sm" href="#" role="button">20</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="mobile-menu-overlay"/>
      </div>
    )
  }
}
