import { generateEmptyBoard } from './tools';

export default class Board {
	constructor( width, height ) {
		this._width = width;
		this._height = height;
		this._board = generateEmptyBoard( width, height );
	}

	get widthLength() {
		return this._width;
	}

	get heightLength() {
		return this._height;
	}

	setBomb( width, height ) {
		this._board[ width ][ height ].setType( 'bomb' )
	}

	isBomb( width, height ) {
		return this._board[ width ][ height ].isBomb();
	}

	setSafe( width, height ) {
		this._board[ width ][ height ].setType( 'safe' );
	}

	setTileValue( width, height, value ) {
		this._board[ width ][ height ].value = value;
	}

	isShown( width, height ) {
		return this._board[ width ][ height ].isShown();
	}

	isFlagged( width, height ) {
		return this._board[ width ][ height ].isFlagged();
	}

	show( width, height ) {
		return this._board[ width ][ height ].show();
	}

	toggleFlag( width, height ) {
		this._board[ width ][ height ].toggleFlag();
	}

	getTileValue( width, height ) {
		return this._board[ width ][ height ].value;
	}
}
