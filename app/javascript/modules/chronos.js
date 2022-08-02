class Chronos {
  constructor() {
		this.today = new Date();
	}

	getTodayDateInstance = () => {
		return(this.today);
	}

	getCurrentYear = () => {
		return(this.today.getFullYear());
	}

	getNextYear = () => {
		return(this.getCurrentYear() + 1);
	}
}

export default new Chronos();