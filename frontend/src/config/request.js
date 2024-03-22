import axios from "axios";
import { message } from 'antd';

// const [messageApi, contextHolder] = message.useMessage();

//利用axios创建axios实例，设置axios的其他方法baseURL，响应时间
const request = axios.create({
    //配置基础路径
    baseURL: "http://localhost:3000/api",
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
});

//意思是携带cookie信息,保持session的一致性
request.defaults.withCredentials =true
//request实例添加请求响应拦截器
request.interceptors.request.use((config) => {
    // config含有header
    // let UserStore = useUserStore();
    // if(UserStore.session){
    //    config.headers.session = UserStore.session
    // }
    return config;
})

request.interceptors.response.use((response)=>{
    //简化数据
    return response.data;
    //进度条
},(error)=>{
    //处理http失败错误
    //创建message变量存储message失败信息
    let message = '';
    //http状态码
    message = error.message;
    //提示错误信息
    // messageApi.open({
    //     type: 'error',
    //     content: message,
    // });

    return Promise.reject(error)
})

export default request;