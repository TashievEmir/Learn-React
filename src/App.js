import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import SignIn from './components/authorization/SignIn';
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
        <div className='app-wrapper'/*className="App"*/>
          <Header />
          <NavBar />
          <div className='app-wrapperContent'>
          <Routes>
            <Route path='/dialogs' Component={Dialogs} />
            <Route path='/profile' Component={Profile} />
            </Routes>
          </div>
        </div>
    </BrowserRouter>    
    );
}

export default App;
