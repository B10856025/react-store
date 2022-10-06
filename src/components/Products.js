import React from 'react';
import axios from 'commons/axios';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import ToolBox from 'components/ToolBox';
import Product from 'components/Product';
import Panel from 'components/Panel';
import AddInventory from 'components/AddInventory';

class Products extends React.Component{
    
    state = {
        products : [
            /*{
                id: 1,
                name: '128*128',
                images: 'http://bulma.io/images/placeholders/128x128.png',
                tags: 'one',
                price: 999,
                status: 'available'
            },
            {
                id: 2,
                name: '128*128',
                images: 'http://bulma.io/images/placeholders/128x128.png',
                tags: 'two',
                price: 999,
                status: 'available'
            },
            {
                id: 3,
                name: '128*128',
                images: 'http://bulma.io/images/placeholders/128x128.png',
                tags: 'three',
                price: 999,
                status: 'available'
            },
            {
                id: 4,
                name: '128*128',
                images: 'http://bulma.io/images/placeholders/128x128.png',
                tags: 'four',
                price: 999,
                status: 'available'
            },
            {
                id: 5,
                name: '128*128',
                images: 'http://bulma.io/images/placeholders/128x128.png',
                tags: 'five',
                price: 999,
                status: 'unavailable'
            }*/
        ],
        sourceProducts: [],
        cartNum: 0
    };

    componentDidMount(){   //生命週期函數
        axios.get('/products').then(response => {
            this.setState({
                products: response.data,
                sourceProducts: response.data
            });
        });
        this.updateCarNum();
    }

    //search
    search = text => {
        console.log(text);
        //1. get new array
        let _products = [...this.state.sourceProducts];
        
        //2. filter new array
        _products = _products.filter(p => {
            // name:Abcd   text:ab  ===>[''Ab]
            //text: ''   ==>["", "", "", ""]
            const matchArray = p.name.match(new RegExp(text, 'gi'));
            return !!matchArray;
        });

        //3. set state
        this.setState({
            products: _products
        });
    };

    toAdd = () =>{
        Panel.open({
            component: AddInventory,
            callback: data => {
                if (data) {
                    this.add(data);
                }
            }
        });
    };

    add = product => {
        const _products = [ ...this.state.products];
        _products.push(product);
        const _sProducts = [ ...this.state.sourceProducts];
        _sProducts.push(product);

        this.setState({
            products: _products,
            sourceProducts: _sProducts
        });
    };

    update = product => {
        const _products = [ ...this.state.products]
        const _index = _products.findIndex(p => p.id ===product.id);
        _products.splice(_index, 1, product);
        const _sProducts = [ ...this.state.sourceProducts];
        const _sIndex = _products.findIndex(p => p.id ===product.id);
        _sProducts.splice(_sIndex, 1, product);

        this.setState({
            products: _products,
            sourceProducts: _sProducts
        });
    };


    delete = id => {
        const _products = this.state.products.filter(p => p.id !==id);
        const _sProducts = this.state.sourceProducts.filter(p => p.id !==id);

        this.setState({
            products: _products,
            sourceProducts: _sProducts
        });
    };

    updateCarNum = async () => {   //異步函數
        const cartNum = await this.initCartNum();
        this.setState({
            cartNum: cartNum
        });
    };

    initCartNum = async () => {    
        const res = await axios.get('/carts');   //等待非同步 由axios.get拿到列表資料
        const carts = res.data || [];   //res.data不為空
        const cartNum = carts
            .map(cart => cart.mount)   //取得cart.mount的值  >[2, 1, 1]
            .reduce((a, value) => a + value, 0);   //陣列累加 起始值0
        return cartNum;
    };

    render(){
        return(
            <div>
                <ToolBox search={this.search} cartNum={this.state.cartNum} />
            
                <div className="products">
                    <div className="columns is-multiline is-desktop">
                        <TransitionGroup component={null}>
                            {this.state.products.map(p => {
                                return(
                                    <CSSTransition classNames="product-fade" timeout={300} key={p.id}>
                                        <div className="column is-3" key={p.id}>
                                            <Product product={p} update={this.update} delete={this.delete} updateCarNum={this.updateCarNum} />
                                        </div>
                                    </CSSTransition>
                                    
                                );
                            })}
                        </TransitionGroup>
                        
                    </div>
                    <button className="button is-primary add-btn" onClick={this.toAdd}>Add</button>
                </div>
            </div>
        );
    }
}
export default Products;