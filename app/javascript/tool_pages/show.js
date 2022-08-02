import wordCount from './each_page/word_count.js';
import yearCalenderConverter from './each_page/year_calender_converter.js';

const functionList = {
	word_count: wordCount,
	year_calender_converter: yearCalenderConverter,
}

const func = () => {
	const element = document.querySelector('[data-tool-name]');

	if (!!element && !!element.dataset.toolName && !!functionList[element.dataset.toolName]) {
		functionList[element.dataset.toolName].call();
	}
}

export default func;