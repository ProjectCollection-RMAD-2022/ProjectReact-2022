import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./components/pages/home/home";
import { Routes, Route, Link } from "react-router-dom";
import CardView from "./components/pages/summery/CardView";
import StartUp from "./components/startUp/startUp";

function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<StartUp/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/summery" element={<CardView/>}/>
            <Route path="/noteCollector" element={<StartUp/>}/>
        </Routes>
    </div>
  );
}
export default App;
