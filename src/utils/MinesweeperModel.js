import { generateBombsPositions } from './tools';
import Board from './Board';
export default class MinesweeperModel {
	constructor( { width = 10, height = 8, bombsNumber = 10 } = {} ) {
		this.width = width;
		this.height = height;
		this.bombsNumber = bombsNumber;

		this.board = new Board( width, height )

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
			this.board.setBomb( bomb.x, bomb.y );
		}

		for ( let j = 0; j < this.height; j++ ) {
			for ( let i = 0; i < this.width; i++ ) {
				if ( this.board.isBomb( i, j ) ) {
					continue;
				}

				this.board.setSafe( i, j );

				const neighbourBombs = this._getNumberOfBombNeighbours( i, j );
				this.board.setTileValue( i, j, neighbourBombs );
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

		if ( this.board.isShown( x, y ) ) {
			return;
		}

		if ( this.board.isFlagged( x, y ) ) {
			return;
		}

		if ( !this._init ) {
			this.init( x, y );
		}

		const showResult = this.board.show( x, y );

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
		this.board.toggleFlag( x, y );
	}

	getView() {
		// Need to rotate array for proper rendering;
		const view = [];

		for ( let y = 0; y < this.board.heightLength; y++ ) {
			view[ y ] = [];
			for ( let x = 0; x < this.board.widthLength; x++ ) {
				if ( this.board.isFlagged( x, y ) ) {
					view[ y ][ x ] = '🚩';
					continue;
				} else if ( !this.board.isShown( x, y ) ) {
					view[ y ][ x ] = '';
					continue;
				} else if ( this.board.isBomb( x, y ) ) {
					view[ y ][ x ] = '💣';
					continue;
				} else {
					view[ y ][ x ] = this.board.getTileValue( x, y );
				}
			}
		}

		return view;
	}

	isShown( x, y ) {
		return this.board.isShown( x, y );
	}

	isFlagged( x, y ) {
		return this.board.isFlagged( x, y );
	}

	_getNumberOfSafeTiles() {
		let result = 0;

		for ( let x = 0; x < this.board.widthLength; x++ ) {
			for ( let y = 0; y < this.board.heightLength; y++ ) {
				if ( this.board.isShown( x, y ) || this.board.isBomb( x, y ) ) {
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

				if ( this.board.isBomb( positionX, positionY ) ) {
					result++;
				}
			}
		}

		return result;
	}
}
