<script>
	// import {apikeys} from '/Users/simo018/Documents/GitHub/00api_keys/apikeys.js'
	import {
		scale,
		fade
	} from 'svelte/transition'

	let ingredients = []
	let recipe
	$: console.log(ingredients.toString())
	const apikey = '27594b9f2dc14ebc91cb614b42e3463e'

	const getRecipes = () => {
		fetch(
				`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apikey}&ingredients=${ingredients}&number=1`
			)
			.then(res => res.json())
			.then(json => {
				console.log(json)
				recipe = json[0]
				showRecipe = true
			})
	}
	const add = (e) => {
		e.target.checked ? ingredients = [...ingredients, e.target.id] : ingredients.filter(i => i != e.target.id)
	}

	let inp
	let suggestions = []

	let showRecipe = false

	const autocomplete = () => {
		if (inp.length < 2) return
		fetch(`https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${apikey}&query=${inp}`)
			.then(res => res.json())
			.then(json => suggestions = json)
	}
</script>

<main>
	<h1>Se, lag og spis</h1>
	<input type="text" placeholder="Søk etter ingredienser" bind:value={inp} on:input={autocomplete}>

	{#if ingredients.length > 0}
		<button transition:scale on:click={getRecipes}>Finn oppskrift</button>
	{/if}

	{#if !showRecipe}
	<div class="find" in:scale>	
			<div>
			<h3>Matprodukter</h3>
		<div class="suggestions">
			{#each suggestions as item}
				<li class="suggestion" on:click={()=>ingredients = [item.name, ...ingredients]}>{item.name}</li>
			{/each}
		</div>

		</div>
		<div class="ingredients">
		<h3>Valgte matprodukter</h3>
			{#each ingredients as item}
				<li class="ingredient" on:click={()=>{ingredients = ingredients.filter(i=>i!=item)}}>{item}</li>
			{/each}
		</div>
	</div>


	{:else}



	<div class="recipe" in:scale>

		<h1 class="matoverskrift">{recipe.title}</h1>

		<div class="divider">		

			<img src="{recipe.image}" alt="">

			<div class="info">			
				<h2>Du mangler disse ingrediensene</h2>

				{#each recipe.missedIngredients as missed}
					<li>{missed.name}</li>
				{/each}
			<button class="tilbake" on:click={()=>showRecipe=false}>Tilbake</button>

			</div>

		</div>
	</div>
	{/if}
</main>

<style>

	:global(*) {
		box-sizing: border-box;
	}
	:global(body, html) {
		background-color: #EDF0F1;
	}

button {
	cursor: pointer;
	background-color: #ED8332;
	border-radius: 10%;
}

input, button {
	padding: 1.2rem;
	outline: none;
}

.tilbake {
	background-color: #D65746;
	cursor: pointer;
	padding: .5rem;
	margin-top: 1rem;
}

.recipe {
	display: grid;
align-items: center;
}

.matoverskrift {
	font-size: 2rem;
}

input {
	background-color: #DCDCDC;
}

	li {
	padding: .5rem;

	}

	.info{
		border: 1px solid black;
		border-radius: 1rem;
		width: 55%;
		height: 100%;
	}

	img {
		border-radius: 1rem;
margin-left: 4rem;
	}

	.divider{
		display:grid;
		grid-template-columns: 1fr 2fr;
		gap:1.5rem;
		place-items: center;
	}
	.find{
		margin-top:3rem;
		display:grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;

	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	.suggestions {
		display:grid;
	  /*  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); */
		gap:1rem;
		cursor: pointer;
	}
	.suggestions {
		display: grid;
		place-items: center;
	}

	.suggestion {
		display: grid;
		place-items: center;
		padding: .5rem; 
		text-align: center;
		border-radius: 100px;
		background-color: #c6DEFF;
		color: black;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
		transition: ease 0.15s;
	}

	.suggestion:hover {
		transform: scale(1.25);
	}

	.ingredients li::after{
		width: 1rem;
		height: 1rem;
		content: 'x';
		margin-left: 1rem;
		border-radius: 10%;
		cursor: pointer;
		padding: 0.2rem;
	}

	h1 {
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 250;
	}

	h2 {
		font-size: 1.25em;
	}

	@media (min-width: 840px) {
		main {
			max-width: none;
		}
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	@media (min-width: 440px) {
		main {
			max-width: none;
		}
	}
	
</style>