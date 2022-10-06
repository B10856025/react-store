import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import App from 'pages/App';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import Cart from 'pages/Cart';
import Register from 'pages/Register'

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>
)

export default Router;