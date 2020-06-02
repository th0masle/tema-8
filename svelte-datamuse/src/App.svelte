<script>
	import Datamuse from './components/Datamuse.svelte'
	let words = ''

</script>


<main>
<div class="input">
	<input type="text" bind:value={words} placeholder="write a word to rhyme">
</div>
	<Datamuse {words}/>

</main>


<style>
main {
	display: grid;
	grid-template-rows: 10vh 90vh;

}

.input{
	display: grid;
	place-items: center;
}

input {
	width: 40vw;
	font-size: 1.2rem;
	padding: .8rem;
	outline: none;
	border-radius: 1rem;
}

:global(section){
	background-color: green
}

</style>