function getShortMessages(messages) {
	var shortMsgs = []
	messages.filter(function(msg) {
		if (msg.message.length < 50) {
			shortMsgs.push(msg.message); 
		}
	})
	return shortMsgs;
}

module.exports = getShortMessages;

// official solution:
// module.exports = function getShortMessages(messages) {
//   return messages.filter(function(item) {
//     return item.message.length < 50
//   }).map(function(item) {
//     return item.message
//   })
// }