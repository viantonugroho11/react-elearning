import React from 'react'
import Header from '../../compenent/guru/Header'
import Menu from '../../compenent/guru/Menu'
import SideBar from '../../compenent/guru/SideBar'
// import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";
//import hook useState dan useEffect from react
import { useState, useEffect } from 'react';
//import axios
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Footer from '../../compenent/Footer';
function ShowSoalGuru() {
  //define history
  // const history = useHistory();

  //define state
  const [posts, setPosts] = useState([]);
  // A super simple expandable component.
  // const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
  //useEffect hook
  useEffect(() => {

    //panggil method "fetchData"
    fetchDataSoalJawab();

  }, []);

  //token
  // const id = localStorage.getItem("id");

  const token = localStorage.getItem('token');

  //get params
  const { id } = useParams();

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  //fetch data
  const fetchDataSoalJawab = async () => {
    //authotizen
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    //fetching
    const response = await axios.get(`http://appsiaksd.ugcorpusskkni.online/api/guru/nilai/${id}/edit`);
    //get response data
    const data = await response.data.data;
    // console.log(formatDate(data.created_at));
    // console.log(data.created_at);
    // console.log(response);
    //assign response data to state "posts"
    setPosts(data);
  }
  return (
    <div>
      <Header />
      <SideBar />
      <Menu />
      <div className="main-container">
        <div className="pd-ltr-20 xs-pd-20-10">
          <div className="min-height-200px">
            <div className="page-header">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="title">
                    <h4>Daftar Pengumpulan Tugas</h4>
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
                        <h5 className="card-title">{data.to_user.nama_siswa}</h5>
                        <p className="card-text">Dikumpulin {formatDate(data.created_at)}<br />
                          Diedit {formatDate(data.updated_at)}</p>
                        <div className="row">
                          <div className="col-md-6">
                            <Link to={`/guru/soal/nilai/${data.id}`} className="btn btn-primary">Lihat Hasil</Link>
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
          <Footer />
          {/* <div className="footer-wrap pd-20 mb-20 card-box">
            DeskApp - Bootstrap 4 Admin Template By <a href="https://github.com/dropways">Ankit Hingarajiya</a>
          </div> */}
        </div>
      </div>
    </div>
  )
}
export default ShowSoalGuru;