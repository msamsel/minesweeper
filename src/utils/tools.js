import Tile from './Tile.js';

export function generateBombsPositions( { width, height, blockedX, blockedY, bombsNumber } ) {
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

export function addEmptyBoard( width, height ) {
	const ret = [];

	for ( let i = 0; i < width; i++ ) {
		ret[ i ] = [];
		for ( let j = 0; j < height; j++ ) {
			ret[ i ][ j ] = new Tile();
		}
	}

	return ret;
}
