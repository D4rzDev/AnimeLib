import React from "react";
import Topreviews from "./components/Topreviews";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Recommended from "./components/Recommended";
import Allrecommended from "./components/Allrecommended";
import Recentepisodes from "./components/Recentepisodes";
import Alltop from "./components/Alltop";
import { Route, Routes} from 'react-router-dom'

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/main" element={<Main/>} />
      <Route path="/allrec" element={<Allrecommended/>} />
      <Route path="/alltop" element={<Alltop/>} />


    </Routes>
    </>
  );
}

export default App;
