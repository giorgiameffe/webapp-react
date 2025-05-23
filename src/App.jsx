import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesPage from "../pages/Movies.jsx";
import MovieDetailsPage from "../pages/MovieDetails.jsx";
import DefaultLayout from "../layouts/DefaultLayout.jsx";
import GlobalContext from "../contexts/GlobalContext.js";
import { useState } from "react";
import NotFound from '../components/NotFound.jsx';

function App() {

  const [isLoading, setIsLoading] = useState(false);

  return (

    <GlobalContext.Provider value={{
      isLoading,
      setIsLoading
    }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            {/* <Route path='/' element={<div>Homepage</div>} /> */}
            <Route path='/movies' element={<MoviesPage />} />
            <Route path='/movies/:id' element={<MovieDetailsPage />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App;
