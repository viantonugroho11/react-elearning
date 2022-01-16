import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import HeaderSiswa from '../../compenent/siswa/Header';
import MenuSiswa from '../../compenent/siswa/Menu';
import SidebarSiswa from '../../compenent/siswa/Sidebar';

function ShowTugasSiswa() {
  //define history
  // const history = useHistory();

  //define state
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('');
  // A super simple expandable component.
  // const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
  //useEffect hook
  useEffect(() => {

    //panggil method "fetchData"
    fetchDataMateriSiswa();

  }, []);

  //token
  const { id } = useParams('id');

  //store

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
                  <div class="clearfix">
                    <div class="pd-20 card-box mb-30">
                      <h4 class="h4 text-blue">Pengumpulan Tugas</h4>
                      <p>Silahkan Mengumpulkan Tugas dibawah ini</p>
                      <p>Bisa Langsung/Menggunakan File</p>
                      <div class="form-group">
                        <label>Isi</label>
                        <textarea class="form-control border-radius-0" placeholder="Masukan Isi ..."></textarea>
                      </div>
                      <div class="form-group">
                        <label>File</label>
                        <input type="file" class="form-control" />
                      </div>
                      <div class="clearfix">
                        <div class="pull-right">
                          <a href="#horizontal-basic-form1" class="btn btn-primary btn-sm scroll-click" rel="" data-toggle="collapse" role="button">Simpan</a>
                        </div>
                      </div>
                    </div>
                  </div>
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
            <div className="footer-wrap pd-20 mb-20 card-box">
              Aplikasi System Akademik By <a href="https://github.com/dropways">Muhammad Novianto Nugroho</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ShowTugasSiswa;