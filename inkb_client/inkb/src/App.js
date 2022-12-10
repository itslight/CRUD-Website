import './App.css';
import Header from './Components/Header';
import HomeBody from './Components/HomeBody';
import LargeCard from './Components/LargeCard';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp'
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Header/>
        <HomeBody/>
        <LargeCard/>
        <Footer/>
        <Router>
          <Routes>
          {/* <Route exact path="/" component={Home} /> */}
            <Route path='/' element={<HomeBody/>} />
            <Route path="/SignUp" element={<SignUp/>} />
            
            {/* <Route path="/contactus" component={ContactUs} /> */}
           
            {/* <Navigate to="/" /> */}
          </Routes>
        </Router>
    </div>
  );
}

export default App;
