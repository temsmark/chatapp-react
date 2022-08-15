import './App.css';
import React from "react";
import {BrowserRouter,Route} from "react-router-dom";
import {Routes} from "react-router";



import Chat from './pages/Chat'
import Home from './pages/Home'
import {Provider} from "react-redux";
import store from "./app/store";

function App() {
    return (
        <Provider store={store}>
        <div className="centered-div">
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/chat/:username" element={<Chat/>}/>
                </Routes>
        </BrowserRouter>
        </div>
        </Provider>
    );
}

export default App;
