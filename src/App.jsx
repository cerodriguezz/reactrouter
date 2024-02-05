import './App.css'
import { Link, Routes, Route } from 'react-router-dom';
import Red from './components/Red';
import Blue from './components/Blue';

function App() {


  return (
<>
<div id="container">
      <div id="navbar">
        <Link to = "blue">Blue</Link>
        <Link to = "red">Red</Link>
        <Link to = "home">Home</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path='/blue' element = {<Blue />}/>
          <Route path='/red' element = {<Red />}/>
          <Route path='/home' element = {<h1>home</h1>}/>
        </Routes>
        </div>
    </div>
</>
  )
}

export default App
