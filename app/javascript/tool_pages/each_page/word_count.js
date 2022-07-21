const func = () => {
	const textArea = document.querySelector('[data-counting-word-textarea]');

	const countCollectStringLength = (string) => {
		return([...string].length)
	}

	const countNewLine = (string) => {
		return(string.length - string.replace(/\n/g, '').length);
	}

	const countWhiteSpage = (string) => {
		return(string.length - string.replace(/ |　/g, '').length);
	}

	const getResultElements = () => {
		return(document.querySelectorAll('[data-count-results-container] > div > div:last-child > p'));
	}

	const countAndDisplay = () => {
		const resultElements = getResultElements();
		const allWordCount = countCollectStringLength(textArea.value);
		const newLineCount = countNewLine(textArea.value);
		const whiteSpageCount = countWhiteSpage(textArea.value);

		resultElements[0].textContent = allWordCount;
		resultElements[1].textContent = (allWordCount - newLineCount - whiteSpageCount);
		resultElements[2].textContent = (allWordCount - newLineCount);
		resultElements[3].textContent = (allWordCount - whiteSpageCount);
		resultElements[4].textContent = (newLineCount);
	};

	textArea.oninput = countAndDisplay;

	const resetWord = () => {
		textArea.value = '';
		const resultElements = getResultElements();
		resultElements.forEach((resultElement) => {
			resultElement.textContent = '0';
		})
	}

	const resetButton = document.querySelector('[data-reset-word-button]');
	resetButton.onclick = resetWord;
}

export default func;