import chronos from '../../modules/chronos.js';

const etoList = [
	'申',
	'酉',
	'戌',
	'亥',
	'子',
	'丑',
	'寅',
	'卯',
	'辰',
	'巳',
	'午',
	'未',
]

const walekiList = {
	明治: {
		start: 1868,
		end: 1912,
	},
	大正: {
		start: 1912,
		end: 1926,
	},
	昭和: {
		start: 1926,
		end: 1989,
	},
	平成: {
		start: 1989,
		end: 2019,
	},
	令和: {
		start: 2019,
		end: chronos.getNextYear(),
	},
}

const createRowElement = (year, walekiName, waleki, age, eto) => {
	const row = document.createElement('div');
	row.dataset.seileki = year;
	row.dataset.waleki = `${walekiName}${waleki}`;
	row.dataset.age = age;

	const createChild = (content) => {
		const element = document.createElement('div');
		const p = document.createElement('p');
		p.textContent = content;
		element.appendChild(p);
		return(element);
	}

	row.appendChild(createChild(`${year}年`));
	row.appendChild(createChild(`${walekiName}${waleki}年`));
	row.appendChild(createChild(`${age}歳`));
	row.appendChild(createChild(`${eto}`));
	return(row);
}

const createCalenderTable = () => {
	const container = document.querySelector('[data-year-calender-table]');
	let startYear, endYear, waleki;
	const currentYear = chronos.getCurrentYear();

	Object.keys(walekiList).reverse().forEach((walekiName) => {
		startYear = walekiList[walekiName].start;
		endYear = walekiList[walekiName].end;
		waleki = endYear - startYear + 1;

		for (let year = endYear; year >= startYear; year--) {
			container.appendChild(createRowElement(year, walekiName, (year - startYear + 1), (currentYear - year), etoList[year % 12]));
		}
	})
}

const setSearchFunction = () => {
	const searchButton = document.querySelector('[data-name="search-button"]');
	searchButton.onclick = () => {
		const inputList = document.querySelectorAll('input[data-name]');
		let input = null;
		for (let i = 0; i < inputList.length; i++) {
			if (!!input && !!inputList.item(i).value) {
				inputList.item(i).value = '';
			} else if (!!inputList.item(i).value) {
				input = inputList.item(i);
			}
		}

		if (!input) {
			return;
		}

		const prefix = input.dataset.name.split('-')[0];
		let value;

		if (prefix == 'waleki') {
			const walekiName = document.querySelector('[data-name="waleki-select"]').value;
			value = `${walekiName}${input.value}`;
		} else {
			value = input.value;
		}

		const rows = document.querySelectorAll(`div.table > [data-${prefix}]:not([data-${prefix}="${value}"])`);

		for (let i = 0; i < rows.length; i++) {
			rows.item(i).classList.add('display_none');
		}

		const targetRows = document.querySelectorAll(`div.table > [data-${prefix}="${value}"]`);

		for (let i = 0; i < targetRows.length; i++) {
			targetRows.item(i).classList.remove('display_none');
		}
	}

	const resetButton = document.querySelector('[data-name="reset-button"]');
	resetButton.onclick = () => {
		const inputList = document.querySelectorAll('input[data-name]');
		for (let i = 0; i < inputList.length; i++) {
			inputList.item(i).value = '';
		}

		const select = document.querySelector('[data-name="waleki-select"]');
		select.selectedIndex = 0;

		const rows = document.querySelectorAll(`div.table > [data-seileki]`);
		for (let i = 0; i < rows.length; i++) {
			rows.item(i).classList.remove('display_none');
		}
	}
}

const addWalekiOptions = () => {
	const walekiOptionValues = Object.keys(walekiList).reverse();
	const walekiSelect = document.querySelector('[data-name="waleki-select"]');
	let option;

	walekiOptionValues.forEach((value) => {
		option = document.createElement('option');
		option.text = value;
		option.value = value;
		walekiSelect.appendChild(option);
	})
}

const func = () => {
	addWalekiOptions();
	createCalenderTable();
	setSearchFunction();
}

export default func;