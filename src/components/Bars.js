import React from 'react';
import { Link, BrowserRouter} from 'react-router-dom';

const Bars = () => {

    const onClick = () => {
        this.props.close();
    }

    return (
        <BrowserRouter>
            <div className="bar" >
                <p className="title has-text-centered">Content</p>
                    <ul >
                        <li className="bar square"><label className="label"><Link to="/" onClick={onClick}>二拾衣 首頁</Link></label></li>
                        <li className="bar square"><label className="label"><Link to="/login" onClick={onClick}>二拾衣 衣物</Link></label></li>
                        <li className="bar square"><label className="label"><Link to="/login" onClick={onClick}>回收衣物 表單</Link></label></li>
                    </ul>
                </div>
            </BrowserRouter>

    )
        
};

export default Bars;