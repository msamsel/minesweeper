<template>
	<div>
		<Minesweeper
			:size="{ width: 10, height: 8 }"
			:bombNumber="10"
		/>
	</div>
</template>

<script>
// @ is an alias to /src
import Minesweeper from '@/components/game/Minesweeper.vue';

export default {
	name: 'home',
	components: {
		Minesweeper
	}
}
</script>
