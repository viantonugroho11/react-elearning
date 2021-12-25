//import hook react
import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";
//import hook useHitory from react router dom
import { useHistory } from 'react-router';

//import axios
import axios from 'axios';

function Header() {

  //state user
  const [user, setUser] = useState({});

  //define history
  const history = useHistory();

  //token
  const token = localStorage.getItem("token");

  //function "fetchData"
  const fetchDataHeader = async () => {

    //set axios header dengan type Authorization + Bearer token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    //fetch user from Rest API
    await axios.get('http://appsiaksd.ugcorpusskkni.online/api/admin/user')
      .then((response) => {

        //set response user to state
        setUser(response.data);
      })
  }

  //hook useEffect
  useEffect(() => {

    //check token empty
    if (!token) {

      //redirect login page
      history.push('/');
    }

    //call function "fetchData"
    fetchDataHeader();
  }, []);
  const logoutHanlder = async () => {

    //set axios header dengan type Authorization + Bearer token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    //fetch Rest API
    await axios.post('http://appsiaksd.ugcorpusskkni.online/api/logout')
      .then(() => {

        //remove token from localStorage
        localStorage.removeItem("token");

        //redirect halaman login
        history.push('/admin/login');
      });
  };
  return (
    <div>
      <div className="header">
        <div className="header-left">
          <div className="menu-icon dw dw-menu" />
          <div className="search-toggle-icon dw dw-search2" data-toggle="header_search" />
          <div className="header-search">
            <form>
              <div className="form-group mb-0">
                <i className="dw dw-search2 search-icon" />
                <input type="text" className="form-control search-input" placeholder="Search Here" />
                <div className="dropdown">
                  <Link className="dropdown-toggle no-arrow" to="/" role="button" data-toggle="dropdown">
                    <i className="ion-arrow-down-c" />
                  </Link>
                  <div className="dropdown-menu dropdown-menu-right">
                    <div className="form-group row">
                      <label className="col-sm-12 col-md-2 col-form-label">From</label>
                      <div className="col-sm-12 col-md-10">
                        <input className="form-control form-control-sm form-control-line" type="text" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-12 col-md-2 col-form-label">To</label>
                      <div className="col-sm-12 col-md-10">
                        <input className="form-control form-control-sm form-control-line" type="text" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-12 col-md-2 col-form-label">Subject</label>
                      <div className="col-sm-12 col-md-10">
                        <input className="form-control form-control-sm form-control-line" type="text" />
                      </div>
                    </div>
                    <div className="text-right">
                      <button className="btn btn-primary">Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="header-right">
          <div className="dashboard-setting user-notification">
            <div className="dropdown">
              <Link className="dropdown-toggle no-arrow" to="/" data-toggle="right-sidebar">
                <i className="dw dw-settings2" />
              </Link>
            </div>
          </div>
          <div className="user-notification">
            <div className="dropdown">
              <Link className="dropdown-toggle no-arrow" to="/" role="button" data-toggle="dropdown">
                <i className="icon-copy dw dw-notification" />
                <span className="badge notification-active" />
              </Link>
              <div className="dropdown-menu dropdown-menu-right">
                <div className="notification-list mx-h-350 customscroll">
                  <ul>
                    <li>
                      <Link to="/">
                        {/* <img src="vendors/images/img.jpg" alt /> */}
                        <h3>John Doe</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        {/* <img src="vendors/images/photo1.jpg" alt /> */}
                        <h3>Lea R. Frith</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        {/* <img src="vendors/images/photo2.jpg" alt /> */}
                        <h3>Erik L. Richards</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        {/* <img src="vendors/images/photo3.jpg" alt /> */}
                        <h3>John Doe</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        {/* <img src="vendors/images/photo4.jpg" alt /> */}
                        <h3>Renee I. Hansen</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        {/* <img src="vendors/images/img.jpg" alt /> */}
                        <h3>Vicki M. Coleman</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="user-info-dropdown">
            <div className="dropdown">
              <Link className="dropdown-toggle" to="/" role="button" data-toggle="dropdown">
                <span className="user-icon">
                  {/* <img src="vendors/images/photo1.jpg" alt /> */}
                </span>
                <span className="user-name">{user.name}</span>
              </Link>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                <Link className="dropdown-item" to="profile.html"><i className="dw dw-user1" /> Profile</Link>
                <Link className="dropdown-item" to="profile.html"><i className="dw dw-settings2" /> Setting</Link>
                <Link className="dropdown-item" to="faq.html"><i className="dw dw-help" /> Help</Link>
                <Link className="dropdown-item" onClick={logoutHanlder}><i className="dw dw-logout" /> Log Out</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Header;
