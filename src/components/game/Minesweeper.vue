<template>
	<div class="minesweeper">
		<BoardHeader />
		<Board :size="size" />
	</div>
</template>

<script>
import BoardHeader from '@/components/game/BoardHeader.vue';
import Board from '@/components/game/Board.vue';
import MinesweeperModel from '@/utils/MinesweeperModel';

window.ms = new MinesweeperModel();

export default {
	name: 'Minesweeper',
	props: [
		'size',
		'bombNumber'
	],
	components: {
		BoardHeader,
		Board
	}
};
</script>

<style>

</style>
