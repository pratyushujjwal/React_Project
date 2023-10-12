import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";


function App() {
    return ( <
        main className = "text-gray-400 bg-gray-900 body-font" >
        <
        Navbar / >
        <
        About / >
        <
        Projects / >
        <
        Contact / >
        <
        /main>
    );
}

export default App;