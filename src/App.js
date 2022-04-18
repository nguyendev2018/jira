import 'antd/dist/antd.css';
import { Router, Switch } from 'react-router-dom';
import './App.css';
import All from './pages/CyberBug/All/All';
import Create from './pages/CyberBug/Create/Create';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { CyberBugTemplate } from './template/CyberBugTemplate';
import IndexCyberBug from './template/IndexCyberBug';
import { UserLoginTemplate } from './template/userLoginTemplate/UserLoginTemplate';
import { history } from './util/history';
import DrawerCyber from './HOC/CyberBugHOC/DrawerCyber'
import Detail from './pages/CyberBug/Detail/Detail';
function App() {
  return (
    <>
      <DrawerCyber />
      <Router history={history} >
        <Switch>
          <UserLoginTemplate path="/login" exact Component={Login} />
          <UserLoginTemplate path="/register" exact Component={Register} />
          <UserLoginTemplate path="/home" exact Component={Home} />
          <CyberBugTemplate exact path="/create" Component={Create} />
          <CyberBugTemplate exact path="/all" Component={All} />
          <CyberBugTemplate exact path="/detail/:projectId" Component={IndexCyberBug} />
        </Switch>
      </Router>
    </>



  );
}

export default App;
