import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Profile from './components/Profile';

function App() {
  return (
    <div className='app-wrapper'/*className="App"*/>
      <Header/>
      <NavBar />
      <Profile />

    </div>

    );
}

export default App;
