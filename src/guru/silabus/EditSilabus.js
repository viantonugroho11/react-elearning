import React, { useEffect } from 'react'
import Header from '../../compenent/guru/Header'
import Menu from '../../compenent/guru/Menu'
import SideBar from '../../compenent/guru/SideBar'
import axios from 'axios'
// import { Link } from "react-router-dom";
// import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
//import hook history dari react router dom
import { useHistory , useParams} from "react-router-dom";
//import hook useState from react
import { useState } from 'react';
import swal from 'sweetalert'
function EditSilabus() {
  const [nama, setNama] = useState('');
  const [file, setFile] = useState();
  const [materi, setMateri] = useState('');
  // const { id } = useParams();
  //state validation
  const [validation, setValidation] = useState({});

  //get id local
  // const id = localStorage.getItem("id");
  const { id } = useParams();
  //history
  const history = useHistory();

  //token
  const token = localStorage.getItem('token')
  //function "getPostById"
  const getPostById = async () => {
    //auth token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    //get data from server
    const response = await axios.get(`http://appsiaksd.ugcorpusskkni.online/api/guru/silabus/${id}`);
    //get response data
    const data = await response.data.data

    //assign data to state
    setNama(data.nama_silabus);
    setMateri(data.keterangan_silabus);

  };

  useEffect(() => {
    getPostById()
  }, []);

  //method "storePost"
  const storePost = async (e) => {
    e.preventDefault();
    //auth
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    //send data to server
    //initialize formData
    const formData = new FormData();

    //append data to formData
    // formData.append('guru_id', id);
    formData.append('nama_silabus', nama);
    formData.append('keterangan_silabus', materi);
    formData.append('file_silabus', file);
    await axios.patch(`http://appsiaksd.ugcorpusskkni.online/api/guru/silabus/${id}`, formData)
      .then(() => {
        swal("Berhasil!", "Silabus berhasil diubah", "success");
        //redirect
        history.push('/guru/silabus/');

      })
      .catch((error) => {
        // console.log(res);
        swal("Gagal!", "Silabus gagal diubah", "error");
        console.log(error.response.data);
        //assign validation on state
        setValidation(error.response.data);
      })

  };
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
                <div className="col-md-6 col-sm-12">
                  <div className="title">
                    <h4>Form Data Silabus</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Form Data Silabus</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            {/* Default Basic Forms Start */}
            <div className="pd-20 card-box mb-30">
              <div className="clearfix">
                <div className="pull-left">
                  <h4 className="text-blue h4">Form Silabus</h4>
                  <p className="mb-30">Isilah data tersebut dengan benar !</p>
                  {
                    validation.message && (
                      <div className="alert alert-danger">
                        {validation.message}
                      </div>
                    )
                  }
                </div>
              </div>
              <form onSubmit={storePost}>
                <div className="dropdown-divider" />
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Nama Silabus</label>
                      <input value={nama} onChange={(e) => setNama(e.target.value)} className="form-control" type="text" placeholder="Masukkan nama Rpp Anda" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Keterangan</label>
                      <textarea value={materi} onChange={(e) => setMateri(e.target.value)} className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>File Silabus</label>
                      <input onChange={(e) => setFile(e.target.files[0])} className="form-control" type="file" placeholder="Masukkan Tempat Lahir Anda" />
                    </div>
                  </div>
                </div>
                <div className="clearfix">
                  <div className="pull-right">
                    <button className="btn btn-primary btn-sm scroll-click" type="submit">Simpan</button>
                  </div>
                </div>
              </form>
            </div>
            {/* Input Validation End */}
          </div>
          <div className="footer-wrap pd-20 mb-20 card-box">
            Learning Management System By  Developer
          </div>
        </div>
      </div>

    </div>
  )
}
export default EditSilabus
