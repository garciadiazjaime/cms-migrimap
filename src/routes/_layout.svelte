<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	:global(body) {
		background-color: #313131;
	}
	main {
		position: relative;
		margin: 0 auto;
		padding: 1em;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>
