import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import HeaderSiswa from '../../compenent/siswa/Header';
import MenuSiswa from '../../compenent/siswa/Menu';
import SidebarSiswa from '../../compenent/siswa/Sidebar';
import moment from 'moment';
function IndexListTugas() {
  //define history
  // const history = useHistory();
  // var now = new Date().toLocaleString("en-US", { day: '2-digit', month: 'numeric', year: 'numeric' });
  //define state
  const [posts, setPosts] = useState([]);
  // A super simple expandable component.
  // const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
  //useEffect hook
  useEffect(() => {

    //panggil method "fetchData"
    fetchDataTugasSiswa();

  }, []);

  //token
  const { id } = useParams('id');

  //fetch data
  const fetchDataTugasSiswa = async () => {
    //fetching
    const response = await axios.get(`http://appsiaksd.ugcorpusskkni.online/api/siswa/tugas/${id}`);
    //get response data
    const data = await response.data.data;
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
                      <li className="breadcrumb-item active" aria-current="page">Tugas</li>
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
                        <h5 className="card-title">{index+1} {data.nama_soal}</h5>
                        <p className="card-text">Batas : {moment(data.batas_soal).format("MM/DD/YYYY")}</p>
                        <div className="row">
                          <div className="col-md-6">
                            <Link to={`/pelajaran/tugas/show/${data.id}`} className="btn btn-primary">Lihat Soal</Link>
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
            DeskApp - Bootstrap 4 Admin Template By <a href="https://github.com/dropways">Ankit Hingarajiya</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default IndexListTugas;