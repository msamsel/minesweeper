export default class Tile {
	constructor( type = '' ) {
		this.hidden = true;
		this.flagged = false;
		this.type = type;
	}

	setType( value ) {
		this.type = value;
	}

	show() {
		this.hidden = false;
		return this.isBomb() ? -1 : this.value;
	}

	toggleFlag() {
		this.flagged = !this.flagged;
	}

	isShown() {
		return !this.hidden;
	}

	isBomb() {
		return this.type === 'bomb';
	}

	isFlagged() {
		return this.flagged;
	}
}
