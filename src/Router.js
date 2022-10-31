import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import App from 'pages/App';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import Cart from 'pages/Cart';
import Register from 'pages/Register'
import Products from 'components/Products'
import Form from 'components/Form'

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            <Route path="/form" element={<Form />} />
        </Routes>
    </BrowserRouter>
)

export default Router;