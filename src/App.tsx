import './App.css';

import Topbar from './components/Topbar';
import Home from './sections/Home'
import Work from './sections/Work'

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
