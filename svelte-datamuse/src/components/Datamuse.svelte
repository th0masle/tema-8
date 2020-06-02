<script>
    //fetch data

    let synonyms = []

    export let words

    $: if (words.length > 2) {
        fetch('https://api.datamuse.com/words?ml=' + words)
            .then(res => res.json())
            .then(json => {
                synonyms = json
                console.log(json)
            })
    }
</script>

<section>
    <h2>Results from datamuse: {words}</h2>



    {#each synonyms as synonym}
     <div>
        <p>{synonym.word}</p>
        <p>{synonym.score}</p>
     </div>
    {:else}
        <div>
            <p>please type a word </p>
        </div>
    {/each}

</section>

<style>

section{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
    
}

section > div {
    background-color: lightgray;
    display: grid;
    place-items: center;
    height: 100%
}

</style>