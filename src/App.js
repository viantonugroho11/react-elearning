
import './App.css';
import { Switch,Route } from 'react-router'
import DashboardAdmin from './admin/DashboardAdmin';
function App() {
  return (
    	<div>
        <Switch>
          <Route exact path="/" component={DashboardAdmin} />
        </Switch>
      </div>
  );
}

export default App;
