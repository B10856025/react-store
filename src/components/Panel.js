/*
    1.一次渲染 隨需調用
    2.裝載組件
        1.子組件作為參數傳遞並被渲染
        2.子組件可以關閉彈出層
        3.子組件與調用者可以通訊
*/

import React from "react";
//import { createRoot } from 'react-dom/client';
import { render } from 'react-dom';


class Panel extends React.Component {
    state = {
        active: false,
        component: null,
        callback: () => {}
    };

    open = (
        options = {
            props: {},
            component: null,
            callback: () => {}
        }
    ) => {
        const { props, component , callback} = options ;
        const _key = new Date().getTime();
        const _component = React.createElement(component, {
            ...props, close: this.close,
            key: _key 
        });  //構造函數做轉換;傳遞close
        this.setState({
            active: true,
            component: _component,
            callback: callback
        });
    };

    close = data => {
        this.setState({
            active: false
        });
        this.state.callback(data);
    };

    render(){
        const _class = {
            true: 'panel-wrapper active',
            false: 'panel-wrapper'
        };
        return(
            <div className={_class[this.state.active]}>
                <div className="over-layer" onClick={() => {this.close();}}></div>
                <div className="panel">
                    <div className="head">
                        <span className="close" onClick={() => {this.close();}}>x</span>
                        {this.state.component}
                    </div>
                </div>
            </div>
        );
    }
}

const _div = document.createElement('div');
document.body.appendChild(_div);

const _panel = render(<Panel />, _div);
export default _panel;

