import _axios from 'axios';

const axios = baseURL => {

    const instance = _axios.create({
        baseURL: baseURL || 'http://localhost:5000/api/posts',  //如果有傳遞參數的話就使用傳遞的baseURL 否則就使用後者
        timeout: 1000
    });


    instance.interceptors.request.use(   //攔截器:攔截裡面請求的request
        config => {   
            const jwToken = global.auth.getToken();   //取得jwToken
            config.headers['Authorization'] = 'Bearer ' + jwToken;   //放入headers
            // Do something before request is sent
            return config;
        },  
        error => {
            // Do something with request error
            //console.log(error)
            return Promise.reject(error);
        }
    );

    return instance;
};

export { axios };
export default axios();