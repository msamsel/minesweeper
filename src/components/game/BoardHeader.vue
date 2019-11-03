<template>
	<div class="board-header">
		<button @click="$emit( 'restart' )" >Restart</button>
		<Timer v-if="result === ''" :startTime="startTime" :isFinished="isFinished" />
		<p v-else-if="result === 'victory'" >Congratulation you won!!!</p>
		<p v-else>You loose :(</p>
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

<style>

</style>
