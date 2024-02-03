<script lang="ts">
	import MapContainer from '$components/MapContainer.svelte';
	import TileLayer from '$components/TileLayer.svelte';
	import Marker from '$components/Marker.svelte';
</script>

<MapContainer center={[48, 2.34]}>
	<TileLayer
		slot="tileLayer"
		attribution={`'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'`}
		url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'}
	/>

	<Marker latlng={[48, 2.34]} />
</MapContainer>
