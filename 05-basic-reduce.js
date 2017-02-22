function countWords(inputWords) {
	var result = {};
	var countedWords = inputWords.reduce(function(allWords, word, index, arr) {
		// console.log(allWords);
		if (result[word] === undefined) {
			result[word] = 1;
		}
		else {
			result[word] ++;
		}
		// console.log(result);
		// return result;
	}, null);
	return result;
}

module.exports = countWords;