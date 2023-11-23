import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import SignIn from './components/authorization/SignIn'; 
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App(props) {

  return (
        <div className='app-wrapper'>
          <Header />
          <NavBar />
          <div className='app-wrapperContent'>
          <Routes>
            <Route path='/dialogs' 
                element = {  <DialogsContainer  store={props.store} /> } />
            <Route path='/profile' 
                element = {  <Profile store={props.store} /> } />
            </Routes>
          </div>
        </div>  
    );
}

export default App;
