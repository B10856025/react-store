import React from 'react';
import { Link, BrowserRouter} from 'react-router-dom';

const Bars = () => {
    return (
        
        <BrowserRouter>
            <div className="bar">
                <p className="title has-text-centered">Content</p>
                <ul>
                    <li className="bar square"><label className="label"><Link to="/login">關於我們</Link></label></li>
                    <li className="bar square"><label className="label"><Link to="/login">回收衣物</Link></label></li>
                    <li className="bar square"><label className="label"><Link to="/login">合作夥伴</Link></label></li>
                </ul>
            </div>
        </BrowserRouter>
        
    )
        
};

export default Bars;