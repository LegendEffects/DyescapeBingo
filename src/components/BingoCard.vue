<template>
	<div class="bingo-card">
		<div class="titleSpan">
			<div @click="$root.$emit('esa', 6)">D</div>
			<div>E</div>
			<div @click="$root.$emit('esa', 7)">L</div>
			<div>A</div>
			<div @click="$root.$emit('esa', 8)">Y</div>
		</div>
		<div class="row" v-for="(row, index) of chunk(card.card, 5)" :key="index">
			<div class="item" v-for="(item, itemIndex) of row" :key="itemIndex" @click="completeAction(item, $event)" :class="{completed: item.completed != false}">
				<div class="phrase">
					{{item.phrase}}
				</div>
			</div>
		</div>

		<div class="popout" :style="popout.style">
			<input type="text" v-model="popout.boxVal">
			<button @click="submitProof">Submit Proof</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "bingo-card",
	props: ["card"],
	data() {return {
		popout: {
			style: {
				left: 0,
				top: 0,
				display: "none",
			},
			boxVal: "",
			card: null,
		}
	}},
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
		completeAction(card, e) {
			if(this.popout.card !== null && this.popout.card.index === card.index) {
				if(this.popout.style.display !== "none") {
					this.popout.style.display = "none";
					return;
				}
			}

			if(card.completed !== false) return;
			this.popout.style = {
				left: e.clientX+"px",
				top: e.clientY+"px",
				display: "block"
			}

			this.popout.card = card;
		},
		submitProof() {
			if(this.popout.card.completed !== false) return;
			this.popout.card.proof = this.popout.boxVal;

			this.$root.$emit("completeAction", this.popout.card);

			this.popout.style.display = "none";
			this.popout.boxVal = null;
			this.popout.card = null;
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
			min-width: 10rem;
			min-height: 10rem;

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
			background-color: rgba(255,255,255, 0.08)
		}

		&.completed {
			background-color: rgba(0,0,0,0.3);
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

.popout {
	position: absolute;
	background-color: rgba(0,0,0,0.1);

	padding: 1rem;
	border-radius: 1rem;
}
</style>