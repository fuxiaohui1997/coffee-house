import axios from 'axios'
import { Toast } from 'vant'
// create an axios instance
const service = axios.create({
	baseURL: 'http://193.112.249.63:4000',
	timeout: 5000
})

// request interceptor
service.interceptors.request.use(
	config => {
		return config
	},
	error => {
		console.log(error) // for debug
		return Promise.reject(error)
	}
)

service.interceptors.response.use(
	response => {
		const res = response.data
		if (res.code !== 20000) {
			if (res.code === 60204) {
				Toast('账号或密码错误')
			}
			return Promise.reject(new Error(res.message || 'Error'))
		} else {
			return res
		}
	},
	error => {
		console.log('err' + error)
		return Promise.reject(error)
	}
)

export default service
