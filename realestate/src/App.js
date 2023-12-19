import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Hero from './Component/Hero/hero';
import Companies from './Component/Companies/Companies';
import Residencies from './Component/Residencies/Residencies';


function App() {
  return (
  <div className='App'>
    <div>
      <div className='white-gradient'/>
      <Header/>
      <Hero/>
    </div>
    <Companies/>
    <Residencies/>
  </div>
  );
}

export default App;
