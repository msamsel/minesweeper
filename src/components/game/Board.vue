<template>
	<div class="minesweeper-board" :style="cssVars" >

	</div>
</template>

<script>
export default {
	name: 'Board',
	props: [ 'size' ],
	computed: {
		cssVars() {
			return {
				'--board-width': this.size.width,
				'--board-height': this.size.height
			};
		}
	}
};
</script>

<style scoped>
	.minesweeper-board {
		display: grid;
		grid-template-columns: repeat( var( --board-width ), 1fr );
		grid-template-rows: repeat( var( --board-height ), 1fr )
	}
</style>
