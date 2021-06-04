
import axios from 'axios';


async function req(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL: 'http://192.168.3.147:12002',//'192.168.3.147:12002'
    timeout: 5000,
    // withCredentials: false
  })
  // instance.interceptors.response.use(res=>{
  //     return res.data 
  // },err=>{
  //     console.log(err)
  // })

  //请求拦截，添加token
  // instance.interceptors.request.use(config => {
  //   let token = localStorage.getItem('token');
  //   if (token) {
  //     //bearer token 规范 jwt
  //     config.headers.Authorization = 'Bearer ' + token;
  //   }
  //   return config;
  // }, err => {
  //   console.log('拦截 出错' + err)
  // })

  //响应拦截，在token 失效，服务器返回401时候
  // instance.interceptors.response.use(null, err => {
  //   if (err.response.status === 401) {//没有登陆或者令牌过期
  //     //清空本地token
  //     console.log('请求出错--拦截')

  //     //跳转login
  //     //   router.replace('/login')
  //   }
  // })
  return instance(config);
}

export {
  req
}