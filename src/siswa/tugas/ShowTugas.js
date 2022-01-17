import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import HeaderSiswa from '../../compenent/siswa/Header';
import MenuSiswa from '../../compenent/siswa/Menu';
import SidebarSiswa from '../../compenent/siswa/Sidebar';
import Footer from '../../compenent/Footer';
import swal from 'sweetalert';
function ShowTugasSiswa() {
  //define history
  const history = useHistory();
  const [isi, setIsi] = useState('');
  const [file, setFile] = useState();
  // const [materi, setMateri] = useState('');

  //define state
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('');

  //useEffect hook
  useEffect(() => {

    //panggil method "fetchData"
    fetchDataMateriSiswa();

  }, []);

  //state validation
  const [validation, setValidation] = useState({});

  //token
  const token = localStorage.getItem("token");
  const { id } = useParams('id');

  //userid local
  const userid = localStorage.getItem('id');

  //store data
  //method "storePost"
  const storePost = async (e) => {
    e.preventDefault();

    //auth
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    //send data to server
    //initialize formData
    const formData = new FormData();

    //append data to formData
    formData.append('soal_id', id);
    formData.append('user_id', userid);
    formData.append('jawab_soal', isi);
    // formData.append('batas_soal', batas);
    formData.append('file_jawab_soal', file);
    await axios.post(`http://appsiaksd.ugcorpusskkni.online/api/siswa/tugas/${id}/jawab`, formData)
      .then(() => {

        swal("Berhasil", "Jawaban Telah Disimpan", "success");
        //redirect
        // history.push('/tugas/' + id);
        history.back();

      })
      .catch((error) => {
        swal("Gagal", error.response.data.message, "error");
        // console.log(res);
        console.log(error.response.data);
        //assign validation on state
        setValidation(error.response.data);
      })

  };
  //fetch data
  const fetchDataMateriSiswa = async () => {
    //fetching
    const response = await axios.get(`http://appsiaksd.ugcorpusskkni.online/api/siswa/tugas/${id}/show`);
    //get response data
    const data = await response.data.data;
    const status = await response.data.status;
    console.log(data);
    console.log(id);
    //assign response data to state "posts"
    setPosts(data);
    setStatus(status);
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
                    <h4>Form Jawab Soal</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Soal</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div className="row clearfix">

              <div className="col-sm-12 col-md-12 mb-30">
                <div className="card card-box">
                  <div className="card-body">
                    <h5 className="card-title">{posts.nama_soal}</h5>
                    <p className="card-text">
                      <div className="row">
                        {posts.isi_soal}
                      </div>
                    </p>
                    <a href="/" download className="btn btn-primary">Download</a>

                    {/* // <a href="/" download className="btn btn-primary">Jawab</a> */}

                  </div>
                </div>
              </div>
              {status == 0 &&
                <div class="col-sm-12 col-md-12 mb-30">
                  <form onSubmit={storePost}>
                    <div class="clearfix">
                      <div class="pd-20 card-box mb-30">
                        <h4 class="h4 text-blue">Pengumpulan Tugas</h4>
                        <p>Silahkan Mengumpulkan Tugas dibawah ini</p>
                        <p>Bisa Langsung/Menggunakan File</p>
                        {
                          validation.message && (
                            <div className="alert alert-danger">
                              {validation.message}
                            </div>
                          )
                        }
                        <div class="form-group">
                          <label>Isi</label>
                          <textarea value={isi} onChange={(e) => setIsi(e.target.value)} class="form-control border-radius-0" placeholder="Masukan Isi ..."></textarea>
                        </div>
                        <div class="form-group">
                          <label>File</label>
                          <input onChange={(e) => setFile(e.target.files[0])} type="file" class="form-control" />
                        </div>
                        <div class="clearfix">
                          <div class="pull-right">
                            <button className="btn btn-primary btn-sm scroll-click" type="submit">Simpan</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              }
              {status == 1 &&
                <div class="col-sm-12 col-md-12 mb-30">
                  <div class="clearfix">
                    <div class="pd-20 card-box mb-30">
                      <h4 class="h4 text-blue"> Sudah Melewati Batas Pengumpulan Tugas</h4>
                    </div>
                  </div>
                </div>
              }
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ShowTugasSiswa;