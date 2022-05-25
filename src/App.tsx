import './App.css';

import Topbar from './components/Topbar';
import Home from './sections/Home'
import About from './sections/About'

function App() {

  return <div className="App">
    <Topbar/>
    <Home/>
    <About/>
  </div>
  
}

export default App;
