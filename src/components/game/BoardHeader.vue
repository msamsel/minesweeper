<template>
	<div class="board-header">
		<button @click="$emit( 'restart' )" >Restart</button>
		<div class="board-header__result">
			<p v-if="result === 'victory'" >Congratulation you won!!!</p>
			<p v-if="result === 'loose'">You loose :(</p>
		</div>
		<div class="board-header__timer">
			<p v-if="result ==='' && startTime === 0">
				Waiting for start.
			</p>
			<p v-else>Time:
				<Timer :startTime="startTime" :isFinished="isFinished" />
			</p>
		</div>
	</div>
</template>

<script>
import Timer from '@/components/game/Timer.vue';

export default {
	name: 'BoardHeader',
	components: {
		Timer
	},
	props: [ 'startTime', 'isFinished', 'result' ]
};
</script>

<style scoped lang="scss">
	.board-header {
		max-width: 300px;
		width: 75vw;
		margin: 0 auto;
		display: flex;
		button {
			flex-grow: 0;
			color: rgb( 230, 230, 230 );
			background-color: rgb( 64, 64, 64 );
			border: 2px solid rgb( 8, 8, 8);
			border-radius: 3px;
			margin: 10px;
			font-weight: 700;
			cursor: pointer
		}

		&__timer {
			// margin-left: auto;
			flex-grow: 0;
		}

		&__result {
			flex-grow: 1;
		}
	}

</style>
