<script lang="ts">
	// import Product from 'src/components/products/+product.svelte';
	import Products from '../../components/products/+products.svelte';
	import { onMount } from 'svelte';
	import type { ProductsInterface } from '../../interfaces';

	let products: ProductsInterface;

	async function getProducts() {
		const res = await fetch('https://dummyjson.com/products', {
			method: 'GET'
		});

		products = await res.json();
	}

	onMount(getProducts);
</script>

<svelte:head>
	<title>Products</title>
	<meta name="products" content="Products" />
</svelte:head>

{#if products}
	<div class="h-auto">
		<Products data={products} />
	</div>
{:else}
	<p>Loading ...</p>
{/if}

<style>
</style>
