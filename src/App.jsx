import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Css
import "./style.css"

// Components
import NavBar from "./components/NavBar/NavBar";

// Pages
import Home from "./pages/Home/Home";
import Filmes from "./pages/Filmes/Filmes";
import Series from "./pages/Series/Series";
import Apoie from "./pages/Apoie/Apoie"

// URl Api
// const urlMovies = "http://localhost:3001/movies";

function App() {
  const [url, setUrl] = useState("http://localhost:3001/movies")
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function FetchData() {
       const res = await fetch(url);
       const data = await res.json()

       setFilmes(data)
    }

    FetchData()
  }, [])

  return (
    <>
     <BrowserRouter>
     <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/filmes" element={<Filmes movies={filmes} />} />
        <Route path="/series" element={<Series/>} />
        <Route path="/apoie" element={<Apoie/>} />
      </Routes>
     </BrowserRouter>


    </>
  )
}

export default App
