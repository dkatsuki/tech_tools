import wordCount from './each_page/word_count.js';

const functionList = {
	word_count: wordCount,
}

const func = () => {
	const element = document.querySelector('[data-tool-name]');

	if (!!element && !!element.dataset.toolName && !!functionList[element.dataset.toolName]) {
		functionList[element.dataset.toolName].call();
	}
}

export default func;