<template>
	<div>
		<p v-if="startTime === 0 && !isFinished">Waiting for game to start</p>
		<p v-else-if="startTime > 0" >Time: {{ time }}</p>
	</div>
</template>

<script>
export default {
	name: 'Timer',
	props: [ 'startTime', 'isFinished' ],
	data() {
		return {
			currentTime: 0
		};
	},

	methods: {
		updateCurrentTime() {
			if ( this.isFinished ) {
				return;
			}

			this.currentTime = Math.floor( performance.now() / 1000 );

			window.requestAnimationFrame( this.updateCurrentTime );
		}
	},

	computed: {
		time() {
			return this.currentTime - this.startTime;
		}
	},

	watch: {
		startTime( val ) {
			if ( val > 0 ) {
				this.updateCurrentTime();
			}
		}
	}
}

</script>

<style>

</style>
