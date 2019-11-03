<template>
	<div class="minesweeper-board" :style="cssVars" >
		<div v-for="(row, rowIndex ) in this.board" class="minesweeper-board__row" :key="rowIndex">
			<div v-for="( tile, tileIndex ) in row" class="minesweeper-board__tile" :key="rowIndex*height+tileIndex">
				{{ tile }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Board',
	props: [ 'board' ],
	computed: {
		numberOfTiles() {
			return this.board.length * this.board[ 0 ].length;
		},

		width() {
			return this.board[ 0 ].length;
		},

		height() {
			return this.board.length;
		},

		cssVars() {
			return {
				'--board-width': `${ this.width * 20 }px`,
				'--board-height': `${ this.height * 20 }px`,
				'--board-columns': this.width,
				'--board-rows': this.height
			};
		}
	}
};
</script>

<style scoped lang="scss">
	.minesweeper-board {
		margin: 0 auto;
		width: var( --board-width );
		height: var( --board-height );
		border: 1px solid black;

		&__row {
			margin: 0;
			height: 20px;
		}

		&__tile {
			display: inline-block;
			width: 20px;
			height: 20px;
			border: 1px solid black;
			box-sizing: border-box;
		}
	}
</style>
