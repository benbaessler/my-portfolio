import './App.css';

import HttpsRedirect from 'react-https-redirect';

import Topbar from './components/Topbar';
import Home from './sections/Home'
import Work from './sections/Work'

function App() {

  return (
    <HttpsRedirect>
      <div className="App">
        <Topbar/>
        <Home/>
        <Work/>
      </div>
    </HttpsRedirect>
  );
}

export default App;
