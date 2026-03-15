import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AskQuestion from "./pages/AskQuestion";
import Disease from "./pages/Disease";
import Weather from "./pages/Weather";
import WhatToGrow from "./pages/WhatToGrow";

export default function App(){

  return(
    <Router>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/ask" element={<AskQuestion/>}/>
        <Route path="/disease" element={<Disease/>}/>
        <Route path="/weather" element={<Weather/>}/>
        <Route path="/grow" element={<WhatToGrow/>}/>

      </Routes>

    </Router>
  );
}