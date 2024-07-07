import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from "./pages/Home"
import NavBar from "./components/common/NavBar"
import Login from "./pages/login"
import  Signup from "./pages/signup"
import VerifyEmail from './pages/VerifyEmail';
import About from './pages/About';
import Contact from './pages/Contact';
import ForgotPassword from './pages/ForgotPassword';
import UpdatePassword from './pages/updatePassword';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile)

  // useEffect(() => {                                                    // it store data of user in localstroage and when we open browser then that user logined;                 
  //   if(localStorage.getItem("token")){
  //     const token = JSON.parse(localStorage.getItem("token"))
  //     dispatch(getUserDetails(token, navigate))
  //   }
  // }, [])
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter" >
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/verify-email" element={<VerifyEmail/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/update-password/:id" element={<UpdatePassword/>}/>
      </Routes>
    </div>
  );
}
export default App;
