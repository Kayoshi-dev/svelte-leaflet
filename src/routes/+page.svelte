<script lang="ts">
	import MapContainer from '$components/MapContainer.svelte';
	import TileLayer from '$components/TileLayer.svelte';
	import Marker from '$components/Marker.svelte';
</script>

<main>
	<MapContainer center={[48, 2.34]}>
		<TileLayer
			attribution={`'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'`}
			url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'}
		/>

		<Marker latlng={[48, 2.34]} popupText={'Hello world!'} markerOptions={{ draggable: true }} />
		<Marker latlng={[45, 2.34]} />
		<Marker latlng={[42, 2.34]} />
	</MapContainer>
</main>

<style lang="scss">
	main {
		height: 100vh;
	}
</style>
