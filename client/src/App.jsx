import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPage from "./pages/ForgotPage";
import Resetpage from "./pages/Resetpage";


function App() {
  
  return (
    <Router>
        <Routes>
          <Route path="/" element={< HomePage/>} />
          <Route path="/register" element={ <RegisterPage/>} />
          <Route path="https://aesthetic-starburst-228c64.netlify.app/forgotpassword" element ={<ForgotPage/>  } />
          <Route path="https://aesthetic-starburst-228c64.netlify.app/resetpassword/:token" element ={ <Resetpage />}  />
        </Routes>
    </Router> 
  );
}

export default App;
