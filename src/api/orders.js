import myrequest from '@/utils/myrequest'

export function addOrders(data) {
	return myrequest({
		url: '/orders/add',
		method: 'post',
		data
	})
}

export function getList(user) {
	return myrequest({
		url: '/orders/applist',
		method: 'get',
		params: { user }
	})
}

export function reminder(data) {
	return myrequest({
		url: '/orders/reminder',
		method: 'post',
		data
	})
}

export function deleteOrder(data) {
	return myrequest({
		url: '/orders/delete',
		method: 'post',
		data
	})
}

export function updateOrder(data) {
	return myrequest({
		url: '/orders/appupdate',
		method: 'post',
		data
	})
}

export function closeOrder(data) {
	return myrequest({
		url: '/orders/close',
		method: 'post',
		data
	})
}