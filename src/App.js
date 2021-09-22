
import './App.css';
import { Switch,Route } from 'react-router'

//admin
import DashboardAdmin from './admin/DashboardAdmin';

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

function App() {
  return (
    	<div>
        <Switch>
          <Route exact path="/" component={DashboardAdmin} />
          <Route exact path="/admin" component={DashboardAdmin} />
          {/* guru */}
          <Route exact path="/admin/guru" component={IndexGuru} />
          <Route exact path="/admin/guru/create" component={CreateGuru} />
          <Route exact path="/admin/guru/edit" component={EditGuru} />
          {/* siswa */}
          <Route exact path="/admin/siswa" component={IndexSiswa} />
          <Route exact path="/admin/siswa/edit" component={EditSiswa} />
          <Route exact path="/admin/siswa/create" component={CreateSiswa} />
          {/* kelas */}
          <Route exact path="/admin/kelas" component={IndexKelas} />
          <Route exact path="/admin/kelas/create" component={CreateKelas} />
          <Route exact path="/admin/kelas/edit" component={EditKelas} />
          {/* mata pelajaran */}
          <Route exact path="/admin/matapelajaran" component={IndexMataPelajaran} />
          <Route exact path="/admin/matapelajaran/create" component={CreateMataPelajaran} />
          <Route exact path="/admin/matapelajaran/edit" component={EditMataPelajaran} />
          {/* jadwal */}
          <Route exact path="/admin/jadwal" component={IndexJadwal} />
          <Route exact path="/admin/jadwal/create" component={CreateJadwal} />
          <Route exact path="/admin/jadwal/edit" component={EditJadwal} />
          {/* ujian */}
          <Route exact path="/admin/ujian" component={IndexUjian} />
          <Route exact path="/admin/ujian/create" component={CreateUjian} />
          <Route exact path="/admin/ujian/edit" component={EditUjian} />
          {/* walikelas */}
          <Route exact path="/admin/walikelas" component={IndexWaliKelas} />
          <Route exact path="/admin/walikelas/create" component={CreateWaliKelas} />
          <Route exact path="/admin/walikelas/edit" component={EditWaliKelas} />

        </Switch>
      </div>
  );
}

export default App;
