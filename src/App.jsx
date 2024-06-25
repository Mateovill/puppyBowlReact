import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import AllPlayers from './pages/AllPlayer'
import SinglePlayer from './pages/SinglePlayer';
import NewPlayer from './pages/NewPlayer';
import Delete from './components/Delete';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<AllPlayers />}   />
          <Route path='/single-player/:playerId' element={<SinglePlayer />} />
            <Route path='/new-player' element={<NewPlayer />} />
            <Route path='/deleteplayer/:playerId' element={<Delete />} />
        </Routes>
        
      </Router>
    </>
  )
}

export default App
