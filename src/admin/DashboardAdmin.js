import Header from '../compenent/Header'
import Menu from '../compenent/Menu'
import SideBar from '../compenent/SideBar'
//import hook react
import React, { useState, useEffect } from 'react';


//import hook useHitory from react router dom
import { useHistory } from 'react-router';

//import axios
import axios from 'axios';

function DashboardAdmin() {

  //state user
  const [user, setUser] = useState({});

  //define history
  const history = useHistory();

  //token
  const token = localStorage.getItem("token");

  //function "fetchData"
  const fetchData = async () => {

    //set axios header dengan type Authorization + Bearer token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    //fetch user from Rest API
    await axios.get('http://appsiaksd.ugcorpusskkni.online/api/admin/user')
      .then((response) => {

        //set response user to state
        setUser(response.data);
      })
      .catch((error) => {
      //redirect halaman login
        history.push('/admin/login');
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
    fetchData();
  }, []);
    return (
      <div>
        <Header />
        <SideBar />
        <Menu />
        <div className="main-container">
          <div className="pd-ltr-20">
            <div className="card-box pd-20 height-100-p mb-30">
              <div className="row align-items-center">
                <div className="col-md-4">
                  {/* <img src="%PUBLIC_URL%/vendors/images/banner-img.png"/> */}
                </div>
                <div className="col-md-8">
                  <h4 className="font-20 weight-500 mb-10 text-capitalize">
                    <i>Assalamu'alaikum Wr Wb,</i><br />
                    <i>Ahlan Wa Sahlan</i> <div className="weight-600 font-30 text-blue">{user.name} !</div>
                  </h4>
                  <p className="font-18 max-width-600">Anda login sebagai Guru, akses anda terhadap aplikasi sesuai dengan apa yang telah diberikan JobDesk dalam LMS ini. <br />Keep Hamasah :)</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 mb-30">
                <div className="card-box height-100-p widget-style1">
                  <div className="d-flex flex-wrap align-items-center">
                    <div className="progress-data">
                      <div id="chart" />
                    </div>
                    <div className="widget-data">
                      <div className="h4 mb-0">40</div>
                      <div className="weight-600 font-14">Guru</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 mb-30">
                <div className="card-box height-100-p widget-style1">
                  <div className="d-flex flex-wrap align-items-center">
                    <div className="progress-data">
                      <div id="chart2" />
                    </div>
                    <div className="widget-data">
                      <div className="h4 mb-0">400</div>
                      <div className="weight-600 font-14">Siswa</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 mb-30">
                <div className="card-box height-100-p widget-style1">
                  <div className="d-flex flex-wrap align-items-center">
                    <div className="progress-data">
                      <div id="chart3" />
                    </div>
                    <div className="widget-data">
                      <div className="h4 mb-0">12</div>
                      <div className="weight-600 font-14">Kelas</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 mb-30">
                <div className="card-box height-100-p widget-style1">
                  <div className="d-flex flex-wrap align-items-center">
                    <div className="progress-data">
                      <div id="chart4" />
                    </div>
                    <div className="widget-data">
                      <div className="h4 mb-0">23</div>
                      <div className="weight-600 font-14">Mata Pelajaran</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 mb-30">
                <div className="card-box height-100-p pd-20">
                  <h2 className="h4 mb-20">Activity</h2>
                  <div id="chart5" />
                </div>
              </div>
            </div>
            <div className="footer-wrap pd-20 mb-20 card-box">
              Learning Management System By <a href="/" target="_blank">Dimas Wahyu Pratoomo</a>
            </div>
          </div>
        </div>

      </div>
    )
  }
export default DashboardAdmin;