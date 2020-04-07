import myrequest from '@/utils/myrequest'
export function login(data) {
	return myrequest({
		url: '/app/user/login',
		method: 'post',
		data
	})
}

export function regist(data) {
	return myrequest({
		url: '/app/user/regist',
		method: 'post',
		data
	})
}
