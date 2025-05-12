import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Homepage</div>} />
        <Route path='/movies' element={<div>Movies</div>} />
        <Route path='/movies/:id' element={<div>Movie Details</div>} />
        <Route path='*' element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
