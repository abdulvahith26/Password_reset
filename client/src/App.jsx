import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPage from "./pages/ForgotPage";
import ResetPage from "./pages/ResetPage";



const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={< HomePage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/forgotpassword" element ={<ForgotPage/>  } />
          <Route path="/resetpassword/:token" element = {<ResetPage/>}  />
        </Routes>
    </Router>



    </div>
  );
};

export default App;

