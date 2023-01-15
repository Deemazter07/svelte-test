<script>
	let text = 'Halo';
	$: if (text.toLowerCase() === 'dimas') {
		text = 'Blokkk';
	}
</script>

<svelte:head>
	<title>Custom Page</title>
	<meta name="description" content="Custom page" />
</svelte:head>

<div class="text-column">
	<h1 class="text">{text}</h1>
	<input type="text" bind:value={text} />
</div>

<style>
	.text {
		color: aqua;
	}
</style>
