
import './App.css';
import { Switch,Route } from 'react-router'
import DashboardAdmin from './admin/DashboardAdmin';
import IndexGuru from './admin/dataguru/IndexGuru';
import CreateGuru from './admin/dataguru/CreateGuru';
function App() {
  return (
    	<div>
        <Switch>
          <Route exact path="/" component={DashboardAdmin} />
          <Route exact path="/admin/guru" component={IndexGuru} />
          <Route exact path="/admin/guru/create" component={CreateGuru} />
        </Switch>
      </div>
  );
}

export default App;
