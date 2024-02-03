<script lang="ts">
	import { onMount } from 'svelte';
	import L, { type LatLngExpression, type MarkerOptions } from 'leaflet';
	import { updatedInstance } from '$lib/store/MapStore.js';

	export let latlng: LatLngExpression;
	export let markerOptions: MarkerOptions = {};

	onMount(() => {
		updatedInstance((li) => {
			L.marker(latlng, {
				...markerOptions
			})
				.addTo(li)
				.bindPopup('test')
				.openPopup();
		});
	});
</script>
