<template>
	<div class="minesweeper-board" :style="cssVars" >
		<BoardTile v-for="i in numberOfTiles" :key="i" />
	</div>
</template>

<script>
import BoardTile from '@/components/game/BoardTile.vue';

export default {
	name: 'Board',
	props: [ 'size', 'board' ],
	components: {
		BoardTile
	},
	computed: {
		numberOfTiles() {
			return this.size.width * this.size.height;
		},
		cssVars() {
			return {
				'--board-width': `${ this.size.width * 20 }px`,
				'--board-height': `${ this.size.height * 20 }px`,
				'--board-columns': this.size.width,
				'--board-rows': this.size.height
			};
		}
	}
};
</script>

<style scoped>
	.minesweeper-board {
		margin: 0 auto;
		display: grid;
		width: var( --board-width );
		height: var( --board-height );
		grid-template-columns: repeat( var( --board-columns ), 1fr );
		grid-template-rows: repeat( var( --board-rows ), 1fr )
	}
</style>
