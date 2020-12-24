import './App.css';
import Header from './components/Header/Header.jsx';
import Login from './components/Login/Login.jsx';
import Home from './components/Home/Home.jsx';
import Plots from './components/Plots/Plots.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import useToken from './components/Login/useToken';


function App(props) {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
  <div className='app-wrapper'>
    <BrowserRouter>
      <Header />
      <div className='app-wrapper'>
        <Route exact path='/' render={ () => <Home homeTableContent={props.state.homePage}/>} />
        <Route path='/plots' render={ () => <Plots />} />
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;