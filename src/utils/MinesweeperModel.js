import { generateBombsPositions, addEmptyBoard } from './tools.js';
export default class MinesweeperModel {
	constructor( { width = 10, height = 8, bombsNumber = 10 } = {} ) {
		this.width = width;
		this.height = height;
		this.bombsNumber = bombsNumber;

		this.board = addEmptyBoard( this.width, this.height );

		this._init = false;
		this._finish = false;
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
		this._finish = true;
	}

	isFinished() {
		return this._finish;
	}

	getResult() {
		if ( !this.isFinished() ) {
			return 'in progress';
		}

		if ( this.isVictory ) {
			return 'victory';
		}

		return 'loose';
	}

	showPosition( x, y ) {
		if ( this.isFinished() ) {
			return;
		}

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

		if ( this.board[ x ][ y ].isFlagged() ) {
			return;
		}

		if ( !this._init ) {
			this.init( x, y );
		}

		const showResult = this.board[ x ][ y ].show();

		if ( showResult < 0 ) {
			this.finish();
		} else if ( showResult === 0 ) {
			this.showNeighbours( x, y );
		}

		if ( this._getNumberOfSafeTiles() === 0 ) {
			this.isVictory = true;
			this.finish();
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

	toggleFlag( x, y ) {
		this.board[ x ][ y ].toggleFlag()
	}

	getView() {
		// Need to rotate array for proper rendering;
		const view = [];

		for ( let y = 0; y < this.board[ 0 ].length; y++ ) {
			view[ y ] = [];
			for ( let x = 0; x < this.board.length; x++ ) {
				if ( this.board[ x ][ y ].isFlagged() ) {
					view[ y ][ x ] = '🚩';
					continue;
				} else if ( !this.board[ x ][ y ].isShown() ) {
					view[ y ][ x ] = '';
					continue;
				} else if ( this.board[ x ][ y ].isBomb() ) {
					view[ y ][ x ] = '💣';
					continue;
				} else {
					view[ y ][ x ] = this.board[ x ][ y ].value;
				}
			}
		}

		return view;
	}

	isShown( x, y ) {
		return this.board[ x ][ y ].isShown();
	}

	isFlagged( x, y ) {
		return this.board[ x ][ y ].isFlagged();
	}

	_getNumberOfSafeTiles() {
		let result = 0;

		for ( let x = 0; x < this.board.length; x++ ) {
			for ( let y = 0; y < this.board[ 0 ].length; y++ ) {
				const currentTile = this.board[ x ][ y ];

				if ( currentTile.isShown() || currentTile.isBomb() ) {
					continue;
				}

				result++;
			}
		}

		return result;
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
