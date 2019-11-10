<template>
	<div class="bingo-card">
		<div class="titleSpan">
			<div>D</div>
			<div>E</div>
			<div>L</div>
			<div>A</div>
			<div>Y</div>
		</div>
		<div class="row" v-for="(row, index) of chunk(card.card, 5)" :key="index">
			<div class="item" v-for="(item, itemIndex) of row" :key="itemIndex" @click="completeAction(item)" :class="{completed: item.completed != false}">
				<div class="phrase">
					{{item.phrase}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "bingo-card",
	props: ["card"],
	methods: {
		chunk(arr, len) {
			let chunks = [],
			i = 0,
			n = arr.length;

			while (i < n) {
				chunks.push(arr.slice(i, i += len));
			}

			return chunks;
		},
		completeAction(card) {
			if(card.completed === false) {
				this.$root.$emit("completeAction", card)
			}
		}
	}
}
</script>

<style scoped lang="scss">
.bingo-card {
	margin: auto;
	overflow: auto;

	.row {
		display: flex;
		flex-direction: row;

		justify-content: space-between;

		border-top: 1px solid #cfcfcf;
		&:last-of-type {
			border-bottom: 1px solid #cfcfcf;
		}

		.item {
			display: flex;

			width: 10rem;
			height: 10rem;
			padding: .4rem;

			.phrase {
				margin: auto;
				text-align: center;
			}
		
			border-left: 1px solid #cfcfcf;
			&:last-of-type {
				border-right: 1px solid #cfcfcf;
			}
			
		}
	}

	.item {
		transition: .15s ease-in-out;
		cursor: pointer;
		&:hover {
			background-color: #444444;
		}

		&.completed {
			background-color: #1d1d1d;
			color: #909090;
			cursor: not-allowed;
		}
	}
}

.titleSpan {
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	font-size: 2rem;
	
	margin: 0 5rem;
}
</style>