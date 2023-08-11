import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Allrecommended from "./components/Allrecommended";
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
