import './App.css';
import React from "react";
import {BrowserRouter,Route} from "react-router-dom";
import {Routes} from "react-router";



import './App.css'
import Chat from './pages/Chat'
import Home from './pages/Home'

function App() {
    return (
        <div className="centered-div">
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/chat/:username" element={<Chat/>}/>
                </Routes>
        </BrowserRouter>
        </div>

    );
}

export default App;
