function doubleAll(numbers) {
	return numbers.map(function(a) {
		return a * 2;
	})
}

module.exports = doubleAll;

// official solution:
// module.exports = function doubleAll(numbers) {
// 	return numbers.map(function double(num) {
// 		return num * 2
// 	})
// }