import './App.css';

import Topbar from './components/Topbar';
import Home from './sections/Home'
import About from './sections/About'
import Work from './sections/Work'
import Contact from './sections/Contact'
import Footer from './components/Footer';

function App() {

  return <div style={{ backgroundColor: "#292b47"}}>
    <div className="main">
      <Topbar/>
      <Home/>
      <About/>
      <Work/>
      <Contact/>
    </div>  
    <Footer/>
  </div>
    

}

export default App;
