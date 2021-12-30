import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import HeaderSiswa from '../../compenent/siswa/Header';
import MenuSiswa from '../../compenent/siswa/Menu';
import SidebarSiswa from '../../compenent/siswa/Sidebar';
function ShowMateriSiswa() {
  //define history
  // const history = useHistory();

  //define state
  const [posts, setPosts] = useState([]);
  // A super simple expandable component.
  // const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
  //useEffect hook
  useEffect(() => {

    //panggil method "fetchData"
    fetchDataMateriSiswa();

  }, []);

  //token
  const { id } = useParams('id');

  //fetch data
  const fetchDataMateriSiswa = async () => {
    //fetching
    const response = await axios.get(`http://appsiaksd.ugcorpusskkni.online/api/siswa/materi/${id}/show`);
    //get response data
    const data = await response.data.data;
    console.log(data);
    console.log(id);
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
                      <li className="breadcrumb-item active" aria-current="page"></li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div className="row clearfix">

              <div className="col-sm-12 col-md-12 mb-30">
                <div className="card card-box">
                  <div className="card-body">
                    <h5 className="card-title">{posts.nama_materi}</h5>
                    <p className="card-text">
                      <div className="row">
                        {posts.isi_materi}
                      </div>
                    </p>
                    <a href="/" download className="btn btn-primary">Download</a>
                  </div>
                </div>
              </div>
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
export default ShowMateriSiswa;