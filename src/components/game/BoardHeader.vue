<template>
	<div class="board-header">
		<button @click="$emit( 'restart' )" >Restart</button>
		<Timer :startTime="startTime" :isFinished="isFinished" />
	</div>
</template>

<script>
import Timer from '@/components/game/Timer.vue';

export default {
	name: 'BoardHeader',
	components: {
		Timer
	},
	props: [ 'startTime', 'isFinished' ]
};
</script>

<style>

</style>
