import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesPage from "../pages/MoviesPage.jsx";
import MovieDetailsPage from "../pages/MovieDetailsPage.jsx";
import DefaultLayout from "../layouts/DefaultLayout.jsx";
import GlobalContext from "../contexts/GlobalContext.js";
import { useState } from "react";
import NotFoundPage from '../pages/NotFoundPage.jsx';
import Homepage from "../pages/Homepage.jsx";
import AddMoviePage from "../pages/AddMoviePage.jsx";

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
            <Route path='/' element={<Homepage />} />
            <Route path='/movies' element={<MoviesPage />} />
            <Route path='/movies/:id' element={<MovieDetailsPage />} />
            <Route path="/movies/new" element={<AddMoviePage />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App;
