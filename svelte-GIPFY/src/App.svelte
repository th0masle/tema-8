<script>
	import { fade, fly, scale } from 'svelte/transition'
	const limit = 1
	let apiKey = 'r3ajw0vtt9xGDMgs5qbAUhebNn0271hg'
	let q = ''
	let gif

	const getGif = () => {
		fetch(`https://api.giphy.com/v1/gifs/search?q=${q}&limit=${limit}&apiKey=${apiKey}`)
			.then(res => res.json())
			.then(json => {
				console.log(json)
				gif = json.data[0].images.downsized_medium.url
			})
	}
</script>

<main>

	{#if gif}
		<img src="{gif}" alt="{q}" class="gif"> 
{:else}
<h2>Skriv noe og trykk ok...</h2>
{/if}

	<header>
		<input 
   				 placeholder="type to search" 
   				 bind:value={q}
				on:keydown={ event => event.key == 'Enter' ? getGif() : 'getGif'}
				on:click={ e => e.target.value=''}
				on:focus={ e => e.target.value = '' }
    >
		<button on:click={getGif}>OK</button>
	</header>
</main>


<style>
:global(body, html){
	margin: 0;
	padding: 0;
}
:global(*){
	box-sizing: border-box;
}

main{
	display: grid;
	place-items: center;
	height: 100%;
	background-image: linear-gradient(to right, pink , lightyellow, lightblue);
}

.gif{
	width: 40vw;
	height: 40vh;
	background-color: lightgrey;
	padding: .5rem;
}

img {
	padding: 2rem;
}

header{
	width: 100%;
	padding: 0 20vw 0 2vw;
	position: absolute;
	display: grid;
	top:2rem;

}

</style>