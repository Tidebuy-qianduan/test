import axios from 'axios';
import Qs from 'qs';

export function appCommDefaultExpandRes(reqPromise) {
  return new Promise((resolve, reject) => {
    reqPromise.then(res => {
      let result = res.data;
      if (result.code === 0) {
        resolve(result.data)
      }
    })
  })
}

export const login = ({ username, password }) => {
  const data = {
    username,
    password
  };
  return axios.request({
    url: '/authentication/form',
    data: Qs.stringify(data),
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
    auth: {
      username: 'tlzCloudApp',
      password: 'tlzCloudApp'
    },
    appConfig: {
      auth: {
        authorization: false
      }
    }
  })
};


