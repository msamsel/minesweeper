<template>
	<div class="minesweeper-board" :style="cssVars" >
		<div v-for="(row, rowIndex ) in this.board" class="minesweeper-board__row" :key="rowIndex + '' ">
			<div v-for="( tile, tileIndex ) in row" class="minesweeper-board__tile" :key="rowIndex + '-' + tileIndex"
				@click="$emit( 'tile', rowIndex, tileIndex ) "
			>
				<p>{{tile}}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Board',
	props: [ 'board' ],
	computed: {
		width() {
			return this.board[ 0 ].length;
		},

		height() {
			return this.board.length;
		},

		cssVars() {
			const cellSize = 30;
			return {
				'--board-columns': this.width,
				'--board-rows': this.height,
				'--cell-size': `${ cellSize }px`
			};
		}
	}
};
</script>

<style scoped lang="scss">
	.minesweeper-board {
		margin: 0 auto;
		width: calc( var( --cell-size ) * var( --board-columns ) );
		height: calc( var( --cell-size ) * var( --board-rows ) );
		border: 1px solid black;

		&__row {
			margin: 0;
			height: var( --cell-size )
		}

		&__tile {
			display: inline-block;
			width: var( --cell-size );
			height: var( --cell-size );
			border: 1px solid black;
			box-sizing: border-box;
			vertical-align: top;
			cursor: pointer;
			p {
				margin: 0;
				padding: 0;
			}
		}
	}
</style>
