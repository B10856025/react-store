import React, { useMemo } from 'react';
import Header from 'components/Header';


const Layout = props => {

    const user = useMemo(() => {   //回掉獲取user 再傳給header的nickname
        return global.auth.getUser() || {};   //或空對象
    }, [])
    return (
        <div className="main">
            <Header user={user} />
            {/*  props.children  >>>完成每個頁面的共同組建+不同的頁面內容 */ }
            {props.children}
        </div>
    )
};
export default Layout;