import _axios from 'axios';

const axios = baseURL => {

    const instance = _axios.create({
        baseURL: baseURL || 'http://localhost:3004',  //如果有傳遞參數的話就使用傳遞的baseURL 否則就使用後者
        timeout: 1000
    });

    return instance;
}

export { axios };
export default axios();