import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesPage from "../pages/Movies.jsx";
import MovieDetailsPage from "../pages/MovieDetails.jsx";
import DefaultLayout from "../layouts/DefaultLayout.jsx";

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<div>Homepage</div>} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:id' element={<MovieDetailsPage />} />
        </Route>
        <Route path='*' element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
