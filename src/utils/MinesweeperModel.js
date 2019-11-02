export default class MinesweeperModel {
	constructor( { width = 10, height = 8, bombsNumber = 10 } = {} ) {
		this.width = width;
		this.height = height;
		this.bombsNumber = bombsNumber;

		this.board = addEmptyBoard( this.width, this.height );

		this._init = false;
	}

	init( x, y ) {
		const bombs = generateBombsPositions( {
			width: this.width,
			height: this.height,
			blockedX: x,
			blockedY: y,
			bombsNumber: this.bombsNumber
		} );

		for ( const bomb of bombs ) {
			this.board[ bomb.x ][ bomb.y ].setType( 'bomb' );
		}

		for ( let j = 0; j < this.height; j++ ) {
			for ( let i = 0; i < this.width; i++ ) {
				if ( this.board[ i ][ j ].isBomb() ) {
					continue;
				}
				this.board[ i ][ j ].setType( 'safe' );
				this.board[ i ][ j ].value = this._getNumberOfBombNeighbours( i, j );
			}
		}

		this._init = true;
	}

	finish() {
		console.log( 'the end' );
	}

	showPosition( x, y ) {
		if ( x < 0 ||
			x > this.width - 1 ||
			y < 0 ||
			y > this.height -1
		) {
			return;
		}

		if ( this.board[ x ][ y ].isShown() ) {
			return;
		}

		if ( !this._init ) {
			this.init( { x, y } );
		}

		const showResult = this.board[ x ][ y ].show();

		if ( showResult < 0 ) {
			this.finish();
		} else if ( showResult === 0 ) {
			this.showNeighbours( x, y );
		}
	}

	showNeighbours( x, y ) {
		this.showPosition( x-1, y );
		this.showPosition( x-1, y-1 );
		this.showPosition( x, y-1 );
		this.showPosition( x+1, y-1 );
		this.showPosition( x+1, y );
		this.showPosition( x+1, y+1 );
		this.showPosition( x, y+1 );
		this.showPosition( x-1, y+1 );
	}

	getView() {
		const view = [];

		for ( let x = 0; x < this.board.length; x++ ) {
			view[ x ] = [];
			for ( let y = 0; y < this.board[ x ].length; y++ ) {
				if ( !this.board[ x ][ y ].isShown() ) {
					view[ x ][ y ] = '';
					continue;
				} else if ( this.board[ x ][ y ].isBomb() ) {
					view[ x ][ y ] = 'booom';
					continue;
				} else {
					view[ x ][ y ] = this.board[ x ][ y ].value;
				}
			}
		}

		return view;
	}

	_getNumberOfBombNeighbours( x, y ) {
		const horizontal = [ x-1, x, x+1 ],
			vertical = [ y-1, y, y+1 ];

		let result = 0;

		for ( const positionX of horizontal ) {
			for ( const positionY of vertical ) {
				if ( positionX === x && positionY === y ) {
					continue;
				}

				if ( positionX < 0 ||
					positionX > this.width - 1 ||
					positionY < 0 ||
					positionY > this.height - 1
				) {
					continue;
				}

				if ( this.board[ positionX ][ positionY ].isBomb() ) {
					result++;
				}
			}
		}

		return result;
	}
}

function generateBombsPositions( { width, height, blockedX, blockedY, bombsNumber } ) {
	const numbers = [],
		blockedNumber = blockedX + width * blockedY;

	for ( let i = 0; i < width * height; i++ ) {
		if ( i === blockedNumber ) {
			continue;
		}
		numbers.push( i );
	}

	numbers.sort( () => 0.5 - Math.random() );

	const bombsIndexes = numbers.slice( 0, bombsNumber );

	return bombsIndexes.map( value => {
		const y = Math.floor( value / width );
		const x = value % width;

		return { x, y };
	} );
}

function addEmptyBoard( width, height ) {
	const ret = [];

	for ( let i = 0; i < width; i++ ) {
		ret[ i ] = [];
		for ( let j = 0; j < height; j++ ) {
			ret[ i ][ j ] = new Tile();
		}
	}

	return ret;
}

class Tile {
	constructor( type = '' ) {
		this.hidden = true;
		this.flagged = false;
		this.type = type;
	}

	setType( value ) {
		Object.defineProperty( this, 'type', {
			value,
			writable: false
		} );
	}

	show() {
		this.hidden = false;
		return this.isBomb() ? -1 : this.value;
	}

	isShown() {
		return !this.hidden;
	}

	isBomb() {
		return this.type === 'bomb';
	}

}
