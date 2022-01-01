import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import HeaderSiswa from '../../compenent/siswa/Header';
// import SidebarSiswa from '../../compenent/siswa/Sidebar';
import SidebarUjian from '../../compenent/siswa/SidebarUjian';
import MenuSiswa from '../../compenent/siswa/Menu';
// import SideNavUjian from '../../compenent/siswa/SIdeNavUjian';
function AnswerUjianSiswa() {
  //token
  const userid = localStorage.getItem("id");
  
  //form
  const [pil_ujian, setpil_ujian] = useState('')
  
  //param
  const { ujianid,hal } = useParams();
  // const { hal } = useParams('hal');
  //define state
  const [ujian, setUjian] = useState([]);
  const [cekujian, setCekujian]= useState([]);


  // A super simple expandable component.
  useEffect(() => {

    //panggil method "fetchData"
    fetchDataUjianSiswa();
    fetchDataCekUjian();
  }, []);

  //fetch data
  const fetchDataUjianSiswa = async () => {
    //fetching
    const response = await axios.get(`http://appsiaksd.ugcorpusskkni.online/api/siswa/ujian/pertanyaan/${userid}/${hal}/${ujianid}`);
    //get response data
    const data = await response.data.data;
    console.log(data);
    //assign response data to state "posts"
    setUjian(data);
  }
  // const store data
  const PostJawab = async (e) => {
    e.preventDefault();

    const formData = new FormData(); 
    formData.append('jawab', pil_ujian);
    await axios.post(`http://appsiaksd.ugcorpusskkni.online/api/siswa/ujian/${userid}/${hal}/${ujianid}`)

      .then(res => {
        if (res) {
          //redirect
          // history.push('/guru/ujian');
        } else {
          // history.push('/guru/soalujian/create/');
        }
      })
      .catch((error) => {

        //assign validation on state
        // setValidation(error.response.data);
      })
  };

  //fetch data
  const fetchDataCekUjian = async () => {
    //fetching
    const response = await axios.get(`http://appsiaksd.ugcorpusskkni.online/api/siswa/ujian/${ujianid}/cek`);
    //get response data
    const data = await response.data.data;
    console.log(data);
    //assign response data to state "posts"
    setCekujian(data);
  }


  function Navsoal() {
    var rows = [];
    for (let i = 1; i <= cekujian.jumlah_soal; i++) {
      rows.push(
        <div>

          {i == hal &&
            <li className="page-item active">
              <a className="page-link" onClick={PostJawab} href={"/ujian/" + ujianid + "/" + i}>{i}</a>
              {/* <Link className="page-link" to={"/ujian/" + ujianid + "/" + i}>{i}</Link> */}
            </li>
          }
          {i != hal &&
            <li className="page-item">
            <a className="page-link" onClick={PostJawab} href={"/ujian/" + ujianid + "/" + i}>{i}</a>
              {/* <Link className="page-link" to={"/ujian/" + ujianid + "/" + i}>{i}</Link> */}
            </li>
          }

        </div>
      )
    }
    return rows;
  }

  return (
    <div>
      <HeaderSiswa />
      <SidebarUjian />
      <MenuSiswa />
      <div className="main-container">
        <div className="pd-ltr-20 xs-pd-20-10">
          <div className="min-height-200px">
            <div className="page-header">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="title">
                    <h4>Matematika</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                      <li className="breadcrumb-item" aria-current="page">Ujian</li>
                      <li className="breadcrumb-item active" aria-current="page">Matematika</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            {/* Simple Datatable start */}

            <div className="row clearfix">
              <div className="col-lg-9 col-md-12 col-sm-12 mb-30">
                <div className="pd-20 card-box">
                  <h5 className="card-title">{ujian.soal_ujian}
                  </h5>
                  {/* <input value={hal} /> */}
                  <p className="card-text mt-4">Piliah Salah satu</p>
                  <div className="custom-control custom-radio mb-5">
                    <input value={ujian.pil_a_ujian} onClick={(e) => setpil_ujian(e.target.value)} type="radio" id="customRadio4" name="customRadio" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="customRadio4">{ujian.pil_a_ujian}</label>
                  </div>
                  <div className="custom-control custom-radio mb-5">
                    <input value={ujian.pil_b_ujian} onClick={(e) => setpil_ujian(e.target.value)} type="radio" id="customRadio5" name="customRadio" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="customRadio5">{ujian.pil_b_ujian}</label>
                  </div>
                  <div className="custom-control custom-radio mb-5">
                    <input value={ujian.pil_c_ujian} onClick={(e) => setpil_ujian(e.target.value)} type="radio" id="customRadio6" name="customRadio" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="customRadio6">{ujian.pil_c_ujian}</label>
                  </div>
                  <div className="custom-control custom-radio mb-5">
                    <input value={ujian.pil_d_ujian} onClick={(e) => setpil_ujian(e.target.value)} type="radio" id="customRadio7" name="customRadio" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="customRadio6">{ujian.pil_d_ujian}</label>
                  </div>
                  {ujian.pil_e_ujian != null &&
                    <div className="custom-control custom-radio mb-5">
                    <input value={ujian.pil_e_ujian} onClick={(e) => setpil_ujian(e.target.value)} type="radio" id="customRadio8" name="customRadio" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="customRadio6">{ujian.pil_e_ujian}</label>
                    </div>
                  }
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 mb-30">
                <div className="pd-20 card-box">
                  <h5 className="h4 text-blue mb-20">Navigasi</h5>
                  <nav aria-label="...">
                    <ul className="pagination flex-wrap">
                      <Navsoal />
                    </ul>
                  </nav>
                  <br />
                  <h5 className="h5 text-blue mb-20 mt-12">Waktu Ujian</h5>
                  <div className="timer p-2">
                    <span className="jam">02</span>:
                    <span className="menit">12</span>:
                    <span className="detik">30</span>
                  </div>
                </div>
              </div>
              {/* Simple Datatable End */}
            </div>
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 mb-30">
                <div className="pd-20 card-box">
                  <a href="dt-ujian.html" className="btn btn-outline-primary">Kembali</a>
                  <a href="dt-ujian.html" className="btn btn-outline-primary">Selesai</a>
                </div>
              </div>
              {/* Simple Datatable End */}
            </div>
            <div className="footer-wrap pd-20 card-box">
              Learning Management By Developer
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default AnswerUjianSiswa;