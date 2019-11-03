<template>
	<div class="minesweeper">
		<BoardHeader @restart="restartHandler" :startTime="startTime" :isFinished="isFinished" />
		<Board :board="board" @tile="tileHandler" />
	</div>
</template>

<script>
import BoardHeader from '@/components/game/BoardHeader.vue';
import Board from '@/components/game/Board.vue';
import MinesweeperModel from '@/utils/MinesweeperModel';

let minesweeper = new MinesweeperModel();

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
			board: minesweeper.getView(),
			isStarted: false,
			isFinished: false,
			startTime: 0
		}
	},
	methods: {
		tileHandler( y, x ) {
			if ( !this.isFinished && !this.isStarted ) {
				this.startTime = Math.floor( performance.now() / 1000 );
				this.isStarted = true;
			}

			minesweeper.showPosition( x, y );
			this.board = minesweeper.getView();

			if ( minesweeper.isFinished() ) {
				this.isStarted = false;
				this.isFinished = true;
			}
		},

		restartHandler() {
			minesweeper = new MinesweeperModel();

			this.board = minesweeper.getView();
			this.isStarted = false;
			this.isFinished = false;
			this.startTime = 0;
		}
	}
};
</script>

<style>

</style>
