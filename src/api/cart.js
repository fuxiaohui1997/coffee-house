import myrequest from '@/utils/myrequest'

export function getCart(query) {
	return myrequest({
		url: '/cart/list',
		method: 'get',
		params: query
	})
}

export function addCart(data) {
	return myrequest({
		url: '/cart/add',
		method: 'post',
		data
	})
}

export function deleteCart(id) {
	return myrequest({
		url: '/cart/delete',
		method: 'get',
		params: id
	})
}
