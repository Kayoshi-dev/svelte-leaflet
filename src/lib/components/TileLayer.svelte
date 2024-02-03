<script lang="ts">
	import { updatedInstance } from '$lib/store/MapStore.js';
	import L, { type TileLayerOptions } from 'leaflet';
	import { onMount } from 'svelte';

	export let attribution: string;
	export let url: string;

	export let tileLayerOptions: Omit<TileLayerOptions, 'attribution'> = {};

	onMount(() => {
		updatedInstance((li) => {
			L.tileLayer(url, {
				attribution,
				...tileLayerOptions
			}).addTo(li);
		});
	});
</script>
