<template>
	<div class="minesweeper">
		<BoardHeader />
		<Board :board="board" @tile="tileHandler" />
	</div>
</template>

<script>
import BoardHeader from '@/components/game/BoardHeader.vue';
import Board from '@/components/game/Board.vue';
import MinesweeperModel from '@/utils/MinesweeperModel';

const minesweeper = new MinesweeperModel();
window.ms = minesweeper;

export default {
	name: 'Minesweeper',
	props: [
		'size',
		'bombsNumber'
	],
	components: {
		BoardHeader,
		Board
	},
	data() {
		return {
			board: minesweeper.getView()
		}
	},
	methods: {
		tileHandler( y, x ) {
			minesweeper.showPosition( x, y );

			this.board = minesweeper.getView();
		}
	}

};
</script>

<style>

</style>
