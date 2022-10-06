import React, { useState, useMemo } from 'react';
import axios from 'commons/axios';
import { formatPrice } from 'commons/helper';

const CartItem = props => {
    const [mount, setMount] = useState(props.cart.mount)
    const {id, name, image, price } = props.cart || {};

    const sumPrice = useMemo(() => {
        return formatPrice(mount * parseInt(price));
    }, [mount, price]); 
    
    
    const handleChange = e => {
        const _mount = parseInt(e.target.value);   //拿到字目串轉整數值
        setMount(_mount);
        const newCart = {   //將新數目存到數據庫
            ...props.cart,
            mount: _mount
        }
        axios.put(`/carts/${id}`, newCart).then(res => {
            props.updateCart(newCart);
        });
    };

    const deleteCart = () => {
        axios.delete(`/carts/${id}`).then(res => {
            props.deleteCart(props.cart);   //調用父組件的資料
        });
    };

    return (
        <div className="columns is-vcentered">
            <div className="column is-narrow" onClick={deleteCart} >
                <span className="close">X</span>
            </div>
            <div className="column is-narrow">
                <img src={image} alt={name} width="100" />
            </div>
            <div className="column cart-name">{name}</div>
            <div className="column">
                <span className="price">{price}</span>
            </div>
            <div className="column">
                <input type="number" className="input num-input" min={1} value={mount} onChange={handleChange} />
            </div>
            <div className="column">
                <span className="sum-price">{sumPrice}</span>
            </div>    
        </div>
    );
};

export default CartItem;