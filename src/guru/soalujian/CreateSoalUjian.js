import React, { useEffect } from 'react'
import Header from '../../compenent/guru/Header'
import Menu from '../../compenent/guru/Menu'
import SideBar from '../../compenent/guru/SideBar'
import axios from 'axios'

// import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
//import hook history dari react router dom
import { useHistory, useParams } from "react-router-dom";
//import hook useState from react
import { useState } from 'react';
function CreateSoalUjian() {
  //const { id } = useParams();
  const { id } = useParams();

  const [dataUjian, setUjian] = useState({})
  const [audio, setAudio] = useState()
  const [soal, setSoal] = useState('')
  // const [audio_ujian, setaudio] = useState('')
  const [pil_a_ujian, setpil_a] = useState('')
  const [pil_b_ujian, setpil_b] = useState('')
  const [pil_c_ujian, setpil_c] = useState('')
  const [pil_d_ujian, setpil_d] = useState('')
  const [pil_e_ujian, setpil_e] = useState('')
  const [jawabkunci, setkuncijawab] = useState('')
  // const [nilai_ujian, setnilai_ujian] = useState('')
  //state validation
  const [validation, setValidation] = useState({});
  //history
  const history = useHistory();

  //method "Get Cek Ujian"
  const getCekUjian = async () => {
    //send data to server
    await axios.get(`http://localhost:8000/api/guru/ujian/${id}`)

      .then(res => {
        if (res.data.data.jumlah_soal == res.data.data.get_soal_ujian_count) {
          //redirect
          history.push('/guru/ujian');
        } else {
          history.push('/guru/soalujian/create/' + id);
        }
      })
      .catch((error) => {

        //assign validation on state
        setValidation(error.response.data);
      })
    };

  //method "getDataGuru"
  const GetUjian = async () => {
    await axios.get(`http://localhost:8000/api/guru/ujian/${id}`)
      .then(res => {
        const dataUjian = res.data.data;
        setUjian(dataUjian);
      })
      .catch(err => {
        console.log(err)
      })
  }
  //method "storePost"
  const storePost = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    //append data to formData
    formData.append('ujian_id', id);
    // formData.append('jenis_soal');
    formData.append('soal_ujian',soal);
    formData.append('audio_ujian',audio);
    formData.append('pil_a_ujian',pil_a_ujian);
    formData.append('pil_b_ujian',pil_b_ujian);
    formData.append('pil_c_ujian',pil_c_ujian);
    formData.append('pil_d_ujian',pil_d_ujian);
    formData.append('pil_e_ujian',pil_e_ujian);
    // formData.append('pil_a_ujian');
    // formData.append('pil_a_ujian');
    formData.append('kunci_jawab_ujian',jawabkunci);
    //send data to server
    await axios.post('http://localhost:8000/api/guru/ujiansoal', formData)

      .then(() => {
        if (dataUjian.jumlah_soal === dataUjian.get_soal_ujian_count) {
          //redirect
          history.push('/guru/ujian');
        } else {
          history.push('/guru/soalujian/create/' + id);
        }

      })
      .catch((error) => {

        //assign validation on state
        setValidation(error.response.data);
      })

  };
  function FormSoal(){
    var rows = [];
    for (let i = 0; i < dataUjian.jumlah_soal; i++) {
      rows.push(<div>
        <div className="form-group">
          <label>Soal Ujian</label>
          <textarea value={soal} onChange={(e) => setSoal(e.target.value)} className="form-control" rows="5"></textarea>
        </div>
        <div className="form-group">
          <label>Soal Audio(Optional)</label>
          <input type="file" onChange={(e) => setAudio(e.target.files)} className="form-control" />
        </div>
        <div className="dropdown-divider" />
        <div className="form-group">
          <label>A.</label>
          <input value={pil_a_ujian} onChange={(e) => setpil_a(e.target.value)} className="form-control" type="text" placeholder="Masukkan pilihan A" />
        </div>
        <div className="form-group">
          <label>B.</label>
          <input value={pil_b_ujian} onChange={(e) => setpil_b(e.target.value)} className="form-control" type="text" placeholder="Masukkan pilihan B" />
        </div>
        <div className="form-group">
          <label>C.</label>
          <input value={pil_c_ujian} onChange={(e) => setpil_c(e.target.value)} className="form-control" type="text" placeholder="Masukkan pilihan C" />
        </div>
        <div className="form-group">
          <label>D.</label>
          <input value={pil_d_ujian} onChange={(e) => setpil_d(e.target.value)} className="form-control" type="text" placeholder="Masukkan pilihan D" />
        </div>
        <div className="form-group">
          <label>E. (Optional)</label>
          <input value={pil_e_ujian} onChange={(e) => setpil_e(e.target.value)} className="form-control" type="text" placeholder="Masukkan pilihan E (Optional)" />
        </div>
        <div className="form-group">
          <label>Kunci Jawab Ujian</label>
          <textarea value={jawabkunci} onChange={(e) => setkuncijawab(e.target.value)} className="form-control" rows="5"></textarea>
          <supscrip>*Copy Dari pilihan yang tepat</supscrip>
        </div>

        <div className="clearfix">
          <div className="pull-right">
            <button className="btn btn-primary btn-sm scroll-click" type="submit">Simpan</button>
          </div>
        </div>
      </div>);
    }
    return rows;
  }

  useEffect(() => {
    GetUjian()
    getCekUjian()
  }, []);

  return (
    <div>
      <Header />
      <Menu />
      <SideBar />
      
      <div className="main-container">
        <div className="pd-ltr-20 xs-pd-20-10">
          <div className="min-height-200px">
            <div className="page-header">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="title">
                    <h4>Form Data Soal Ujian</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Form Data soal Ujian</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            {/* Default Basic Forms Start */}
            <div className="pd-20 card-box mb-30">
              <div className="clearfix">
                <div className="pull-left">
                  <h4 className="text-blue h4">Form Soal Ujian</h4>
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
              <FormSoal />
              <form onSubmit={storePost}>
                <div className="form-group">
                  <label>Soal Ujian</label>
                  <textarea value={soal} onChange={(e) => setSoal(e.target.value)} className="form-control" rows="5"></textarea>
                </div>
                <div className="form-group">
                  <label>Soal Audio(Optional)</label>
                  <input type="file" onChange={(e) => setAudio(e.target.files)} className="form-control" />
                </div>
                <div className="dropdown-divider" />
                <div className="form-group">
                  <label>A.</label>
                  <input value={pil_a_ujian} onChange={(e) => setpil_a(e.target.value)} className="form-control" type="text" placeholder="Masukkan pilihan A" />
                </div>
                <div className="form-group">
                  <label>B.</label>
                  <input value={pil_b_ujian} onChange={(e) => setpil_b(e.target.value)} className="form-control" type="text" placeholder="Masukkan pilihan B" />
                </div>
                <div className="form-group">
                  <label>C.</label>
                  <input value={pil_c_ujian} onChange={(e) => setpil_c(e.target.value)} className="form-control" type="text" placeholder="Masukkan pilihan C" />
                </div>
                <div className="form-group">
                  <label>D.</label>
                  <input value={pil_d_ujian} onChange={(e) => setpil_d(e.target.value)} className="form-control" type="text" placeholder="Masukkan pilihan D" />
                </div>
                <div className="form-group">
                  <label>E. (Optional)</label>
                  <input value={pil_e_ujian} onChange={(e) => setpil_e(e.target.value)} className="form-control" type="text" placeholder="Masukkan pilihan E (Optional)" />
                </div>
                <div className="form-group">
                  <label>Kunci Jawab Ujian</label>
                  <textarea value={jawabkunci} onChange={(e) => setkuncijawab(e.target.value)} className="form-control" rows="5"></textarea>
                  <supscrip>*Copy Dari pilihan yang tepat</supscrip>
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
            Learning  Management By Developer
          </div>
        </div>
      </div>
    </div>
  )
}
export default CreateSoalUjian
