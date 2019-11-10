<template>
	<div id="app" v-if="ready">
		<div v-if="!card" class="centerAction">
			<div class="title"><h1>Dyescape Bingo</h1></div>
			
			<div class="content">
				<button @click="generateCard">Generate your card</button>
			</div>

		</div>

		<bingo-card v-if="card !== null" :card="card" />
	</div>
</template>

<script>
import BingoCard from './components/BingoCard'
import Logger from './logging'

export default {
	name: 'app',
	components: {
		BingoCard
	},
	data() {return {
		ready: false,
		alert: null,

		card: null,


		cardChoices: [
			// V2
			"Choco posts 2 rocket league clips in a day",
			"KingAlter uses :pepe_kek: for the 15th time in a day",
			"Dennis posts some random shit that happened at work",
			"Someone posts a car in #cars that they can't afford and shit on it for no reason",
			"MiniDigger defends a company",
			"Michael yells at Dennis for his piss poor pc choices",
			"Droei eats lasagna for the third time in a week",
			"Someone posts cursed material in a topic related channel",
			"Aekalix posts some nice builds",
			":dyescape_goodbusy: is used",
			"Welcome or leave messages wont work",
			"Delayscape.com gets an update",
			"WalmartWelcomer.com gets posted",
			"Some dumb Spigot member is mentioned",
			"A person suggests something already implemented",
			"Perotin recruits a member to his guild on join",
			"Someone shits on America",
			"Cooking show happens in #food",
			"KingAlter laughs at something that isn't funny",
			"Jay yells at Dennis for absolutely anything",
			"Zirker posts more than 10 messages in a day",
			"Stefan posts 3 coubs in a day",
			"Dennis ignores the advice that Michael gives him in #tech and goes to his own conclusion",
			"Zirker rants about maths",
			"Jay welcomes a user",
			"Wiki Team gets called a non staff rank",
		]
	}},
	methods: {
		generateCard() {
			let used = [];
			let temp = [];
			let generated = 0;
			
			while(generated < 25) {
				if(generated === 12) {
					temp.push({
						id: -1,
						index: temp.length,
						phrase: "FREE",
						completed: true
					});
					generated++;
					continue;
				}

				let id = Math.floor(Math.random()*this.cardChoices.length);
				if(used.indexOf(id) !== -1) continue;

				let item = this.cardChoices[id];
				used.push(id);

				temp.push({
					id,
					index: temp.length,
					phrase: item,
					completed: false
				});

				generated++;
			}

			this.card = {
				card: temp,
				started: new Date()
			};

			this.saveCard();
		},
		saveCard() {
			localStorage.setItem("dye-bingoCard", JSON.stringify(this.card));
		}
	},
	created() {
		Logger.log("Cards", `Loaded ${this.cardChoices.length} cards to choose from!`, "success")

		if(!localStorage) {
			this.alert = {
				type: "danger",
				message: "Your browser doesn't support LocalStorage, progress wont be saved."
			}
			this.ready = true;
			return;
		}

		Logger.log("Events", `Registering...`, "success");
		this.$root.$on("completeAction", (card) => {
			this.card.card[card.index].completed = new Date();
		});
		this.$root.$on("saveCard", this.saveCard);
		Logger.log("Events", `Registered`, "success");

		const card = localStorage.getItem('dye-bingoCard');
		if(card) { // User has a previous card
			this.card = JSON.parse(card);
		}

		this.ready = true;
	}

}
</script>

<style lang="scss">
html, body, #app {
	height: 100%;
	width: 100%;
}
body {
	background-color: #333;
	color: #fff;

	margin: 0;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	
	display: flex;
	flex-direction: column;
}

.centerAction {
	width: 300px;
	text-align: center;

	margin: auto;
	border-radius: 1rem;

	background: rgba(0,0,0,0.5);

	.title {
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;

		background: rgba(255,255,255,0.05);

		padding: 1rem 0;

		h1 {
			margin: 0;
		}
	}
	.content {
		padding: 2rem 1rem;
	}
}
</style>