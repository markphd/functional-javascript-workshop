function checkUsersValid(goodUsers) {
	// console.log(goodUsers, "g");
	return function allUsersValid(submittedUsers) {
		return submittedUsers.every(function(submit) {
			return goodUsers.some(function(good) {
				return good.id === submit.id;
			})
		})
	}
}

module.exports = checkUsersValid;

// official solution:
// module.exports = function checkUsersValid(goodUsers) {
//   return function allUsersValid(submittedUsers) {
//     return submittedUsers.every(function(submittedUser) {
//       return goodUsers.some(function(goodUser) {
//         return goodUser.id === submittedUser.id
//       })
//     })
//   }
// }