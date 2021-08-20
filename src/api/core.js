//网络模块核心代码
import axios from "axios";
import { GET, POST } from "./config";


//创建配置axios实例
const intance = axios.create({
    baseURL: "https://www.fastmock.site/mock/f3b81b200dc63043749d69ed922a7277/shopManage",
    timeout: 10000
});


// 添加请求拦截器
intance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
intance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么

    return Promise.reject(error);
});

export function request(method, url, params) {
    switch (method) {
        case GET:
            return get(url, params);
        case POST:
            return post(url, params);
    }
}

function get(url, params) {
    return intance.get(url, params)
}

function post(url, params) {
    return intance.post(url, params)
}