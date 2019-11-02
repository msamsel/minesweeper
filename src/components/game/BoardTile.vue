<template>
	<div class="minesweeper-board__tile">
	</div>
</template>

<script>
export default {
	name: 'BoardTile',
	props: [ 'gridPosition' ]
};
</script>

<style scoped>
	.minesweeper-board__tile {
		width: 20px;
		height: 20px;
		border: 1px solid black;
	}
</style>
