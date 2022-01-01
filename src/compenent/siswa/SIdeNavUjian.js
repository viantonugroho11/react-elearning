import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
function SideNavUjian() {
  //param
  const { ujianid, hal } = useParams();
  // const { halaman } = useParams('hal');

  //define state
  const [ujian, setUjian] = useState([]);

  // A super simple expandable component.
  useEffect(() => {

    //panggil method "fetchData"
    fetchDataUjianSiswa();
    // console.log("test"+halaman);
  }, []);

  //fetch data
  const fetchDataUjianSiswa = async () => {
    //fetching
    const response = await axios.get(`http://appsiaksd.ugcorpusskkni.online/api/siswa/ujian/${ujianid}/cek`);
    //get response data
    const data = await response.data.data;
    console.log(data);
    //assign response data to state "posts"
    setUjian(data);
  }
  function Navsoal() {
    var rows = [];
    for (let i = 1; i <= ujian.jumlah_soal; i++) {
      rows.push(
        <div>

          {i == hal &&
            <li className="page-item active">
              <a className="page-link" href={"/ujian/" + ujianid + "/" + i}>{i}</a>
              {/* <Link className="page-link" to={"/ujian/" + ujianid + "/" + i}>{i}</Link> */}
            </li>
          }
          {i != hal &&
            <li className="page-item">
              <a className="page-link" href={"/ujian/" + ujianid + "/" + i}>{i}</a>
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
  )
}
export default SideNavUjian