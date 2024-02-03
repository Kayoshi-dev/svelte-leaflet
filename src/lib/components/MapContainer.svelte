<script lang="ts">
	import 'leaflet/dist/leaflet.css';
	import L, { type LatLngExpression, type ZoomPanOptions } from 'leaflet';
	import { onMount } from 'svelte';
	import { leafletInstance } from '$lib/store/MapStore.js';

	let map: HTMLElement;

	export let center: LatLngExpression;
	export let zoom: number | undefined = 7;
	export let zoomOptions: ZoomPanOptions = {};

	onMount(() => {
		const sl = L.map(map).setView(center, zoom, { ...zoomOptions });
		leafletInstance.set(sl);
	});
</script>

<div id="map" bind:this={map}>
	<slot />
</div>

<style>
	#map {
		height: 100%;
	}
</style>
