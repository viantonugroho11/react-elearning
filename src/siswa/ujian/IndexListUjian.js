import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';
import HeaderSiswa from '../../compenent/siswa/Header';
import MenuSiswa from '../../compenent/siswa/Menu';
import SidebarSiswa from '../../compenent/siswa/Sidebar';
import moment from 'moment';
import { useHistory } from 'react-router';

function IndexListUjian() {
  //now
  var now = new Date().toLocaleString("en-US", { day: '2-digit', month: 'numeric', year: 'numeric' });
  //token
  const id = localStorage.getItem("id");

  //history
  const history = useHistory();
  //define state
  const [posts, setPosts] = useState([]);


  // A super simple expandable component.
  useEffect(() => {

    //panggil method "fetchData"
    fetchDataUjianSiswa();

  }, []);

  //fetch data
  const fetchDataUjianSiswa = async () => {
    //fetching
    const response = await axios.get(`http://appsiaksd.ugcorpusskkni.online/api/siswa/ujian/${id}`);
    //get response data
    const data = await response.data.data;
    console.log(data);
    //assign response data to state "posts"
    setPosts(data);
  }

  //method "storePost"
  const MulaiUjian = async (e) => {
    e.preventDefault();
    console.log(e.currentTarget.id)
    const idujian = e.currentTarget.id
    //send data to server
    //initialize formData

    await axios.get(`http://appsiaksd.ugcorpusskkni.online/api/siswa/ujian/${id}/${idujian}`)
      .then(() => {

        //redirect
        history.push(`/ujian/${idujian}/1`);

      })
      .catch((error) => {
        // console.log(error.message)
        // console.log(res);
        console.log(error.response.data);
        alert(error.response.data.message)
      })

  };
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
                      <li className="breadcrumb-item active" aria-current="page">{now}</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div className="row clearfix">
              {/* return ( */}
              {posts.map((data, index) => {
                return (
                  // <div

                  data.get_ujian.map((dataujian,indexkey) => {
                    return(
                    <div className="col-sm-12 col-md-4 mb-30">
                      <div className="card card-box">
                        <div className="card-body">
                          <h5 className="card-title">{indexkey + 1} {dataujian.nama_ujian}</h5>
                          <p className="card-text">
                            Ujian: {moment(dataujian.tanggal_ujian).format("MM/DD/YYYY")}<br/>
                              Jam Mulai: {dataujian.jam_mulai_ujian}<br />
                              Jam Mulai: {dataujian.jam_selesai_ujian}<br />
                          </p>
                          <div className="row">
                            <div className="col-md-6">
                              {dataujian.status_ujian == "Aktif" &&
                              // <Link to={`/ujian/${data.id}`} className="btn btn-primary">Lihat Soal</Link>
                                  <button id={dataujian.id} onClick={MulaiUjian} className="btn btn-success">Mulai Ujian</button>
                              }
                            </div>
                          </div>
                          {/* <a href="#" className="btn btn-primary">Klik Me</a> */}
                        </div>
                      </div>
                    </div>
                    )
                  })
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

export default IndexListUjian;