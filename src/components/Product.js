import React from 'react';
import Panel from 'components/Panel';
import { formatPrice } from 'commons/helper';
import EditInventory from 'components/EditInventory';
import axios from 'commons/axios';
import { toast } from 'react-toastify';
//import { useNavigate } from 'react-router-dom';

class Product extends React.Component{

    toEdit = () => {
        Panel.open({
            component: EditInventory,
            props: {
                product: this.props.product,
                deleteProduct: this.props.delete
            },
            callback: data => {   //回調函數
                if (data) {
                    this.props.update(data)
                }
            }
        });
    };

    addCart = async () => {
        if (!global.auth.isLogin()) {   //查看是否登入 
            toast.info('Please Login First')
            return;
        }

        try{
            const user = global.auth.getUser() || {};   ///取得使用這用戶來獲取不同使用者的cart
            const { id, name, image, price } = this.props.product;   //取得商品內容

            const res = await axios.get(`/carts?productId=${id}`);   //異步函數 等待非同步 由axios.get帶入carts的productId是否=${id}
        
            const carts = res.data;   

            if(carts && carts.length>0){  //如果carts不為空或>0
                const cart = carts[0];   //取得productId
                cart.mount += 1;   //mount+1
                await axios.put(`/carts/${cart.id}`, cart);   //等待非同步 由axios.Put改寫/carts/ >>  cart裡的${cart.id}
            } else{   //否則 
                const cart = {
                    productId: id, 
                    name,
                    image,
                    price,
                    mount: 1,
                    userId: user.email
                };
                await axios.post('/carts', cart);   //新增/carts資料庫 cart內容
                
            }
            toast.success('Add Cart Success');   //toast 彈出組件  新增購物車成功
            this.props.updateCarNum();
        }catch (error) {
            toast.error('Add Cart Failed');   ////toast 彈出組件  新增購物車失敗
        }
    };

    renderMangerBtn = () => {   //管理使用者權限的渲覽視圖
        const user = global.auth.getUser() || {}   //如果為空給它空字串
        if (user.type === 1) {
            return(
                <div className="p-head has-text-right" onClick={this.toEdit}>
                    <span className="icon edit-btn">
                        <i className="fa-solid fa-sliders"></i>
                    </span>
                </div>
            )
        }
        
        
    }

    render(){
        const { name, image, tags, price, status } = this.props.product;
        const _pClass = {
            available: 'product',
            unavailable: 'product out-stock'
        };
        const onePrice = formatPrice(1 * parseInt(price));

        return(
            <div className={_pClass[status]}>
                <div className="p-content">
                    {this.renderMangerBtn()}
                    <div className="img-wrapper" >
                        {status === 'unavailable' ? <p className="out-stock-text" >Out Of Stock</p> : ''}
                        
                        <figure className="img is-4by3" >
                            <img src={image} alt={name} />
                        </figure>
                    </div>
                    <p className="p-tags">{tags}</p>
                    <p className="p-name">{name}</p>
                </div>
                <div className="p-footer">
                    <p className="price">{onePrice}</p>
                    <button className="add-cart" disabled={status === 'unavailable'} onClick={this.addCart} >  
                        <i className="fa-solid fa-cart-shopping"></i>
                        <i className="fa-solid fa-cart-circle-plus"></i>
                    </button>
                </div>
            </div>
        );
    }

}

export default Product;