import React from 'react';
import Layout from 'Layout';


export default function Form(props){
    
    
    
    return (
        <Layout>
            <div className="form">
                <div>
                    <h1 className="label">舊衣寄回表單</h1>
                    <h2 className="label-line">舊衣寄回小公約</h2>
                    <p className="text">
                        1.寄回衣物需有8成新以上，並無明顯污漬<br/>
                        2.寄回衣物視材質&種類決定價格($70-$300)<br/>
                        3.賣出衣物依價格返回5%-10%回饋金<br/>
                        4.若衣物超過3個月未賣出，將捐至合作夥伴慈善機構<br/>
                        5.當天16:00前使用網路預約取件，<br/>物流公司司機於隔天到府取件並現場收取貨件運費，預計於後天送達指定地點。<br/>
                        6.取件當天物流公司將主動電聯寄件人收件時間，請寄件人事先將貨件包裝完成。<br/>
                        7.如遇天災不可抗力之因素，影響宅配取件作業，<br/>網路預約取件日將自動順延，敬請見諒。<br/>
                        8.網路預約取件當日18:00後如需修改訂單，請聯繫二拾衣世紀客服人員:1234567。<br/>
                    </p>
                </div>
                <form>
                    <label className="label">姓名:</label>
                        <input 
                            type="text" 
                            name="sellName" 
                            value={inputs.sellName || ""} 
                            onChange={handleChange}
                        />
                    
                    <label  className="label">手機:
                        <input 
                            type="text" 
                            name="phone" 
                            value={inputs.phone || ""} 
                            onChange={handleChange}
                        />
                    </label>
                    <label  className="label">E-mail:
                        <input 
                            type="text" 
                            name="email" 
                            value={inputs.email || ""} 
                            onChange={handleChange}
                        />
                    </label>
                </form>
            </div>
            
            
            
        </Layout>
    )
}
