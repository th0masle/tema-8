<script>
import Activity from './components/Activity.svelte'
	let activity = {}
	const getActivity = () => {
		fetch('https://www.boredapi.com/api/activity?type=recreational')
			.then(res => res.json() )
			.then(json => activity = json )
	}
</script>


<main>

	<button on:click={getActivity}>Hit me</button>

<Activity />

	<div class="activity">
		<h2>{activity.activity}</h2>
		<p>{activity.type}</p>
		<p>{activity.accessibility}</p>
		<p>{activity.price}</p>
		<p>{activity.participants}</p>
		<p>{activity.link}</p>
	</div>

</main>


<style>
	main {
		display: grid;
		place-items: center;
		height: 100vh;
		position: relative;

	}

	button {
		position: absolute;
		top: 2rem;
		background: black;
		color: white;
		cursor: pointer;
		border-radius: 15%
	}

	.activity {
		width: 60vw;
		height: 40vh;
		padding: 2rem;
		background: #eee;
		box-shadow: 0 0 1rem 1px grey
	}
</style>