import CartItem from 'components/CartItem';
import Layout from 'Layout';
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'commons/axios';
import { formatPrice } from 'commons/helper';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Cart = () => {
    const [carts, setCarts] = useState([]);   //useState函數傳遞參數  >>用hook定義state狀態

    useEffect( () => {
        const user = global.auth.getUser() || {};   ///取得使用這用戶來獲取不同使用者的cart
        axios.get(`/carts?userId=${user.email}`).then(res => setCarts(res.data));   //根據userId(user的email)來判斷
    }, []);

    const totalPrice = useMemo(() => {
        const totalPrice = carts
            .map(cart => cart.mount * parseInt(cart.price))
            .reduce((a, value) => a + value, 0);
        return formatPrice(totalPrice);
    }, [carts]);

    const updateCart = cart => {
        const newCarts = [...carts];
        const _index = newCarts.findIndex(c => c.id === cart.id);
        newCarts.splice(_index, 1, cart);
        setCarts(newCarts);
    }

    const deleteCart = cart => {
        const _carts = carts.filter(c => c.id !== cart.id);
        setCarts(_carts);
    }
    
    return(
        <Layout>
        <div className="cart-page">
            <span className="cart-title">Cart Page</span>
            <div className="cart-list">
                <TransitionGroup component={null}>
                    {carts.map(cart => (
                        <CSSTransition classNames="cart-item" timeout={300} key={cart.id}>
                            <CartItem key={cart.id} cart={cart} updateCart={updateCart} deleteCart={deleteCart} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>    
            </div>
            {carts.length === 0 ? <p className="no-cart">No Goods</p> : ''}  {/*判斷購物車長度是否為0*/ }
            
            <div className="cart-total">
                Total:
                <span className="total-price">{totalPrice}</span>
            </div>
        </div>
    </Layout>
    );
};

export default Cart;