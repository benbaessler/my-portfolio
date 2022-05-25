import './App.css';

import Topbar from './components/Topbar';
import Home from './sections/Home'
import About from './sections/About'
import Soon from './sections/Soon'

function App() {

  return <div className="App">
    <Topbar/>
    <Home/>
    <About/>
    <Soon/>
  </div>

}

export default App;
