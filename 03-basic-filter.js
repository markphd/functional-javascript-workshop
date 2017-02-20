function getShortMessages(messages) {
	messages.filter(function(msg) {
		if (msg.message.length < 50) {
			return msg.message;
		}
	})
}

module.exports = getShortMessages;