<script>
	const api_key = '1a83951d4dc44c5c99bf4b1ed6b595db'
	let q = ''
	let article


const getNews = () => {
	fetch(`https://newsapi.org/v2/everything?q=${q}&apiKey=${api_key}`)
		.then(res => res.json())
		.then(json => {
			console.log(json.articles[0])
			article = json.articles[0]
		})
}
</script>


<main>
	<header>
		<input type="text" bind:value={q} placeholder="type to search">
		<button on:click={getNews}>OK</button>
	</header>

	{#if article}
<a href="{article.url}">
	<div class="article">
		<h1>{ article.title }</h1>
		<p>{ article.description }</p>
	</div>
</a>
{:else}
<h2>Skriv noe og trykk ok...</h2>
{/if}


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
	height: 100%
}
.article{
	width: 40vw;
	height: 40vh;
	background-color: #eee;
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