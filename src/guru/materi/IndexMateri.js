import React from 'react'
import Header from '../../compenent/guru/Header'
import Menu from '../../compenent/guru/Menu'
import SideBar from '../../compenent/guru/SideBar'
import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";
//import hook useState dan useEffect from react
import { useState, useEffect } from 'react';
//import axios
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import Footer from '../../compenent/Footer';
function IndexMateriGuru() {
  //define state
  const [posts, setPosts] = useState([]);
  // const [pel, setPel] = useState([]);

  //token
  const token = localStorage.getItem('token');

  const { id } = useParams();
  // A super simple expandable component.
  const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
  //useEffect hook
  

  const deletePost = async (iddelete) => {
    //swal alert konfirmasi
    swal({
      title: "Apakah anda yakin?",
      text: "Setelah dihapus, Anda tidak akan dapat mengembalikan data ini!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          // auth
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

          //sending
          axios.delete(`http://appsiaksd.ugcorpusskkni.online/api/guru/materi/${iddelete}`)
            .then(() => {
              //panggil function "fetchData"
              fectData();
              swal("Berhasil!", "Data berhasil dihapus", "success");
              //redirect
              // history.push('/admin/siswa');
            })
            .catch((error) => {
              swal("Gagal!", "Data gagal dihapus", "error");
              //assign validation on state
              // setValidation(error.response.data);
            })
          //panggil function "fetchData"
          fectData();
          //swal alert sukses
          // swal("Data berhasil dihapus!", {
          //   icon: "success",
          // });

        }

      });

  }


  //const delete data
  
  //function "fetchData"
  const fectData = async () => {
    // auth
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    //fetching
    const response = await axios.get(`http://appsiaksd.ugcorpusskkni.online/api/guru/materi/${id}/edit`);
    //get response data
    const data = await response.data.data;

    //assign response data to state "posts"
    setPosts(data);
  }
  // const url = `http://appsiaksd.ugcorpusskkni.online/storage/FileMateri/`
  const datamateri = posts.map((user) => ({
    nama: <div>{user.nama_materi}</div>,
    aksi:
      <div>
        <Link className="btn btn-sm btn-warning" href={"/guru/materi/edit/" + user.id}><i className="fa fa-edit"></i></Link>
        {/* icon show */}
        <Link className="btn btn-sm btn-success" href={"/guru/materi/show/" + user.id}><i className="fa fa-eye"></i></Link> 
        {/* <Link className="btn btn-sm btn-success" href={"/guru/materi/show/" + user.id}>Show</Link><br /> */}
        {/* <button className="btn btn-sm btn-danger" onClick={() => deletePost(user.id)}><i className="fa fa-trash"></i></button><br /> */}
      </div>,
  }));


  const columns = [
    {
      name: 'Nama Materi',
      selector: row => row.nama,
      sortable: true,
    },
    // {
    //   name: 'File',
    //   selector: row => row.file,
    //   sortable: false,
    // },
    {
      name: 'Aksi',
      selector: row => row.aksi
    },
  ];
  useEffect(() => {

    //panggil method "fetchData"
    fectData();

  }, []);
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
                    <h4>Data Kelas</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Data Materi</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            {/* Simple Datatable start */}
            <div className="card-box mb-30">
              <div className="pd-20 d-flex justify-content-between">
                <h4 className="text-blue h4">Data Materi</h4>
                <Link to={"/guru/materi/create/" + id} className="btn btn-sm btn-primary">+ Tambah</Link>
              </div>
              <div className="pb-20">
                <DataTable
                  columns={columns}
                  data={datamateri}
                  // expandableRows
                  pagination
                  expandableRowsComponent={ExpandedComponent}
                />
              </div>
            </div>
            {/* Simple Datatable End */}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default IndexMateriGuru
