import './App.css';

import Topbar from './components/Topbar';
import Home from './sections/Home'
import About from './sections/About'
import Work from './sections/Work'
import Soon from './sections/Soon'

function App() {

  return <div className="App">
    <Topbar/>
    <Home/>
    <About/>
    <Work/>
    {/* <Soon/> */}
  </div>

}

export default App;
