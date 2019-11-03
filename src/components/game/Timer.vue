<template>
	<span>{{ time }}</span>
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

	mounted() {
		this.updateCurrentTime();
	}
}

</script>

<style>

</style>
