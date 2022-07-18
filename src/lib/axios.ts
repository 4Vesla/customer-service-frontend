const axios = require('axios').default

const axiosInst = axios.create({
  baseURL: 'http://dev.roman-ko.net',
//   headers: { 'Access-Control-Allow-Origin': 'http://dev.roman-ko.net' },
})

export default axiosInst
