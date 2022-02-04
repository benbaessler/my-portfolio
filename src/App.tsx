import './App.css';

import Topbar from './components/Topbar';
import Home from './sections/Home'
import Work from './sections/Work'

import { OverlayTrigger, Button, Tooltip } from 'react-bootstrap'

function App() {

  return (
    <div className="App">
      <Topbar/>
      <Home/>
      <Work/>
    </div>
  );
}

export default App;
