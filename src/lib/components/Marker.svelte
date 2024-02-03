<script lang="ts">
	import { onMount } from 'svelte';
	import L, { type LatLngExpression, type MarkerOptions } from 'leaflet';
	import { updatedInstance } from '$lib/store/MapStore.js';

	export let latlng: LatLngExpression;
	export let popupText: string | undefined = undefined;
	export let openPopup: boolean = false;

	export let markerOptions: MarkerOptions = {};

	onMount(() => {
		updatedInstance((li) => {
			const marker = L.marker(latlng, {
				...markerOptions
			}).addTo(li);

			if (popupText) marker.bindPopup(popupText);

			if (openPopup) marker.openPopup();
		});
	});
</script>
