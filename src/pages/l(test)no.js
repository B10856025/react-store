


import React from 'react';
//import { useHistory } from "react-router-dom";

class Login extends React.Component{
    
    /*-- (一)
    1.命名和綁定
    2.event
    3.this
    4.傳遞參數
    
    /*--範例
    handleClick = (msg, event) => {
        event.preventDefault();
        console.log(this);
        alert(msg);
    };

    //Refs (二)
    /*emailRef = React.createRef()
    passwordRef = React.createRef()

    //State (三)
    /*constructor(){
        super();
        this.state = {
            isLike: false
        };
    }
    /*state ={
        isLike: false,
        count: 0
    };*/

    //受控組件  (四)  //非受控組件
    state ={
        email: '',
        password: ''
    };



    handleSubmit = event => {
        //1.阻止默認事件行為 
        event.preventDefault();
        //2.獲取表單數據
        //console.log(this.emailRef.current.value);
        /*const formData ={
            email: this.emailRef.current.value,
            password: this.passwordRef.current.value
        }*/
        console.log(this.state);
        //3.處理登入邏輯

        //4.跳到首頁
        
        //this.props.history.push("/cart");
    };

    /*handleClick = () => {
        this.setState({
            isLike: !this.state.isLike
        });
        this.setState({
            count: this.state.count + 1
        });

        this.setState(prevState => {
            return { count: prevState.count + 2 }; 
        });
    };*/
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render(){
        return (
            <div className="login-wrapper">
                {/*
                <a href="/login" className="button" onClick={this.handleClick.bind(this, 'Clicked!')}>
                    click me
        </a>*/}
                

                <form className="box login-box" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Email" name="email" /*ref={this.emailRef} value={this.state.email}*/ onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Password" name="password" /*ref={this.passwordRef value={this.state.password}*/ onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="control">
                        <button className="button is-fullwidth is-primary">Login</button>
                    </div>

                    {/*<div className="control">
                        <button className="button is-fullwidth is-link" onClick={this.handleClick}>{this.state.isLike ? 'NO' : '讚'}</button>
                    </div>*/}
                </form>
            </div> 
        );////JSX babel
    }
}

export default Login;