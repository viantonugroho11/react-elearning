
import './App.css';
import { Switch, Route } from 'react-router'

//admin
import DashboardAdmin from './admin/DashboardAdmin';

//loginadmin
import LoginAdmin from './admin/auth/LoginAdmin';

//guru
import IndexGuru from './admin/dataguru/IndexGuru';
import CreateGuru from './admin/dataguru/CreateGuru';
import EditGuru from './admin/dataguru/EditGuru';

//siswa
import IndexSiswa from './admin/datasiswa/IndexSiswa';
import EditSiswa from './admin/datasiswa/EditSiswa';
import CreateSiswa from './admin/datasiswa/CreateSiswa';

// kelas
import IndexKelas from './admin/kelas/IndexKelas';
import CreateKelas from './admin/kelas/CreateKelas';
import EditKelas from './admin/kelas/EditKelas';

// matapelajaran
import IndexMataPelajaran from './admin/matapelajaran/IndexMataPelajaran';
import CreateMataPelajaran from './admin/matapelajaran/CreateMataPelajaran';
import EditMataPelajaran from './admin/matapelajaran/EditMataPelajaran';

//jadwal
import IndexJadwal from './admin/jadwal/IndexJadwal';
import CreateJadwal from './admin/jadwal/CreateJadwal';
import EditJadwal from './admin/jadwal/EditJadwal';

// ujian
import IndexUjian from './admin/ujian/IndexUjian';
import CreateUjian from './admin/ujian/CreateUjian';
import EditUjian from './admin/ujian/EditUjian';

// walikelas
import IndexWaliKelas from './admin/walikelas/IndexWaliKelas';
import CreateWaliKelas from './admin/walikelas/CreateWaliKelas';
import EditWaliKelas from './admin/walikelas/EditWaliKelas';

//angkatan
import IndexAngkatan from './admin/angkatan/IndexAngkatan';
import CreateAngkatan from './admin/angkatan/CreateAngkatan';
import EditAngkatan from './admin/angkatan/EditAngkatan';

//guru start
//dashboardguru
import DashboardGuru from './guru/DashboardGuru';
import LoginGuru from './guru/auth/LoginGuru';
import IndexPelajaranGuru from './guru/pelajaran/IndexPelajaran';

//materi
import IndexMateriGuru from './guru/materi/IndexMateri';
import CreateMateri from './guru/materi/CreateMateri';
import EditMateri from './guru/materi/EditMateri';
import IndexRpp from './guru/rpp/IndexRpp';
import CreateRpp from './guru/rpp/CreateRpp';
import EditRpp from './guru/rpp/EditRpp';
import IndexSilabus from './guru/silabus/IndexSilabus';
import CreateSilabus from './guru/silabus/CreateSilabus';
import EditSilabus from './guru/silabus/EditSilabus';
import IndexUjianGuru from './guru/ujian/IndexUjian';
import CreateSoalUjian from './guru/soalujian/CreateSoalUjian';
import LoginSiswa from './siswa/auth/LoginSiswa';
import NotFound from './error/NotFound';
import DashboardSiswa from './siswa/DashboardSiswa';
import IndexPelajaranSiswa from './siswa/pelajaran/IndexPelajaran';
import IndexListMateri from './siswa/materi/IndexListMateri';
import IndexListTugas from './siswa/tugas/IndexListTugas';
import ShowTugasSiswa from './siswa/tugas/ShowTugas';
import ShowMateriSiswa from './siswa/materi/ShowMateri';
import IndexListUjian from './siswa/ujian/IndexListUjian';
import AnswerUjianSiswa from './siswa/ujian/AnswerUjian';
import ReviewUjian from './siswa/ujian/ReviewUjian';

function App() {
  return (
    <div>
      <Switch>
        {/* admin start */}
        {/* <Route exact path="/" component={DashboardAdmin} /> */}
        <Route exact path="/admin" component={DashboardAdmin} />
        {/* <Redirect from="/admin" to="/admin" /> */}
        {/* login */}
        {/* guru */}
        <Route exact path="/admin/guru" component={IndexGuru} />
        <Route exact path="/admin/guru/create" component={CreateGuru} />
        <Route exact path="/admin/guru/edit/:id" component={EditGuru} />
        {/* siswa */}
        <Route exact path="/admin/siswa" component={IndexSiswa} />
        <Route exact path="/admin/siswa/edit/:id" component={EditSiswa} />
        <Route exact path="/admin/siswa/create" component={CreateSiswa} />
        {/* kelas */}
        <Route exact path="/admin/kelas" component={IndexKelas} />
        <Route exact path="/admin/kelas/create" component={CreateKelas} />
        <Route exact path="/admin/kelas/edit/:id" component={EditKelas} />
        {/* mata pelajaran */}
        <Route exact path="/admin/matapelajaran" component={IndexMataPelajaran} />
        <Route exact path="/admin/matapelajaran/create" component={CreateMataPelajaran} />
        <Route exact path="/admin/matapelajaran/edit/:id" component={EditMataPelajaran} />
        {/* jadwal */}
        <Route exact path="/admin/jadwal" component={IndexJadwal} />
        <Route exact path="/admin/jadwal/create" component={CreateJadwal} />
        <Route exact path="/admin/jadwal/edit/:id" component={EditJadwal} />
        {/* ujian */}
        <Route exact path="/admin/ujian" component={IndexUjian} />
        <Route exact path="/admin/ujian/create" component={CreateUjian} />
        <Route exact path="/admin/ujian/edit/:id" component={EditUjian} />
        {/* walikelas */}
        <Route exact path="/admin/walikelas" component={IndexWaliKelas} />
        <Route exact path="/admin/walikelas/create" component={CreateWaliKelas} />
        <Route exact path="/admin/walikelas/edit/:id" component={EditWaliKelas} />
        {/* Angkatan */}
        <Route exact path="/admin/angkatan" component={IndexAngkatan} />
        <Route exact path="/admin/angkatan/create" component={CreateAngkatan} />
        <Route exact path="/admin/angkatan/edit/:id" component={EditAngkatan} />
        {/* admin end */}

        {/* guru start */}
        <Route exact path="/guru" component={DashboardGuru} />
        {/* login Guru */}
        <Route exact path="/guru/login" component={LoginGuru} />
        {/* kelas */}
        <Route exact path="/guru/kelas" component={IndexKelas} />
        {/* materi */}
        <Route exact path="/guru/materi/:id" component={IndexMateriGuru} />
        <Route exact path="/guru/materi/create/:id" component={CreateMateri} />
        <Route exact path="/guru/materi/show/:id" component={EditMataPelajaran} />
        <Route exact path="/guru/materi/edit/:id" component={EditMateri} />
        {/* pelajaran */}
        <Route exact path="/guru/pelajaran" component={IndexPelajaranGuru} />
        {/* rpp */}
        <Route exact path="/guru/rpp" component={IndexRpp} />
        <Route exact path="/guru/rpp/create" component={CreateRpp} />
        <Route exact path="/guru/rpp/edit/:id" component={EditRpp} />
        {/* silabus */}
        <Route exact path="/guru/silabus" component={IndexSilabus} />
        <Route exact path="/guru/silabus/create" component={CreateSilabus} />
        <Route exact path="/guru/silabus/edit/:id" component={EditSilabus} />
        {/* siswa */}
        <Route exact path="/guru/siswa" component={IndexSiswa} />
        <Route exact path="/guru/siswa/show/:id" component={EditSiswa} />
        {/* soal */}
        <Route exact path="/guru/soal/:id" component={IndexUjian} />
        <Route exact path="/guru/soal/create/:id" component={CreateUjian} />
        <Route exact path="/guru/soal/edit/:id" component={EditUjian} />
        {/* ujian */}
        <Route exact path="/guru/ujian" component={IndexUjianGuru} />
        <Route exact path="/guru/ujian/create" component={CreateUjian} />
        <Route exact path="/guru/ujian/edit/:id" component={EditUjian} />
        {/* soalujian */}
        <Route exact path="/guru/soalujian/:id" component={IndexUjian} />
        <Route exact path="/guru/soalujian/create/:id" component={CreateSoalUjian} />
        <Route exact path="/guru/soalujian/edit/:id" component={EditUjian} />
        {/* end guru */}

        {/* siswa start */}
        <Route exact path="/dashboard" component={DashboardSiswa} />
        {/* login siswa */}
        <Route exact path="/" component={LoginSiswa} />
        {/* pelajaran siswa */}
        <Route exact path="/pelajaran" component={IndexPelajaranSiswa} />
        {/* end siswa */}
        {/* materi */}
        <Route exact path="/pelajaran/materi/:id" component={IndexListMateri} />
        <Route exact path="/pelajaran/materi/show/:id" component={ShowMateriSiswa} />
        {/* materi */}
        {/* Tugas */}
        <Route exact path="/pelajaran/tugas/:id" component={IndexListTugas} />
        <Route exact path="/pelajaran/tugas/show/:id" component={ShowTugasSiswa} />
        {/* Tugas selesai */}
        {/* ujian list */}
        <Route exact path="/ujian" component={IndexListUjian} />
        <Route exact path="/ujian/:ujianid/:hal" component={AnswerUjianSiswa} />
        <Route exact path="/review/ujian/:ujianid" component={ReviewUjian}/>
        {/* NotFound */}
        <Route exact path="/admin/login" component={LoginAdmin} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
