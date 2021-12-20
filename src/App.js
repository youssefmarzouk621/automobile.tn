import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/home/Home";
import { Footer } from "./components/footer/Footer";
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
  
function App() {
  return (
    <Router>
      <Topbar />
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route element={<Login/>} path="/login"/>
        <Route element={<Register/>} path="/register"/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
