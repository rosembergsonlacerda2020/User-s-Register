import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from'./Routes'
import Footer from '../components/templates/templates/footer';
import Nav from '../components/templates/templates/nav';
import Logo from '../components/templates/templates/logo';

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav  />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>