
import './App.css';
import { Switch,Route } from 'react-router'

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

//dashboardguru
import DashboardGuru from './guru/DashboardGuru';
import LoginGuru from './guru/auth/LoginGuru';
import IndexPelajaranGuru from './guru/pelajaran/IndexPelajaran';
import IndexMateriGuru from './guru/materi/IndexMateri';

function App() {
  return (
    	<div>
        <Switch>
          {/* admin start */}
          {/* <Route exact path="/" component={DashboardAdmin} /> */}
          <Route exact path="/admin" component={DashboardAdmin} />
          {/* login */}
          <Route exact path="/admin/login" component={LoginAdmin} />
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
          <Route exact path="/guru/materi/create/:id" component={CreateMataPelajaran} />
          <Route exact path="/guru/materi/edit/:id" component={EditMataPelajaran} />
          {/* pelajaran */}
          <Route exact path="/guru/pelajaran" component={IndexPelajaranGuru} />
          {/* rpp */}
          <Route exact path="/guru/rpp" component={IndexMataPelajaran} />
          <Route exact path="/guru/rpp/create" component={CreateMataPelajaran} />
          <Route exact path="/guru/rpp/edit/:id" component={EditMataPelajaran} />
          {/* silabus */}
          <Route exact path="/guru/silabus" component={IndexMataPelajaran} />
          <Route exact path="/guru/silabus/create" component={CreateMataPelajaran} />
          <Route exact path="/guru/silabus/edit/:id" component={EditMataPelajaran} />
          {/* siswa */}
          <Route exact path="/guru/siswa" component={IndexSiswa} />
          <Route exact path="/guru/siswa/show/:id" component={EditSiswa} />
          {/* soal */}
          <Route exact path="/guru/soal" component={IndexUjian} />
          <Route exact path="/guru/soal/create" component={CreateUjian} />
          <Route exact path="/guru/soal/edit/:id" component={EditUjian} />
          {/* ujian */}
          <Route exact path="/guru/ujian" component={IndexUjian} />
          <Route exact path="/guru/ujian/create" component={CreateUjian} />
          <Route exact path="/guru/ujian/edit/:id" component={EditUjian} />
          {/* soalujian */}
          <Route exact path="/guru/soalujian" component={IndexUjian} />
          <Route exact path="/guru/soalujian/create" component={CreateUjian} />
          <Route exact path="/guru/soalujian/edit/:id" component={EditUjian} />
          {/* end guru */}

          {/* siswa start */}
          <Route exact path="/siswa" component={DashboardAdmin} />
          
        </Switch>
      </div>
  );
}

export default App;
