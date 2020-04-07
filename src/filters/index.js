export function dealPrice(x, d = 0) {
	let f = parseFloat(x)
	if (isNaN(f)) {
		return
	}
	if (f == 0) {
		return f
	}
	d = d ? d * 100 : 100
	f = Math.round(f * 100) / d
	let s = f.toString()
	let rs = s.indexOf('.')
	if (rs < 0) {
		rs = s.length
		s += '.'
	}
	while (s.length <= rs + 2) {
		s += '0'
	}
	return s
}
