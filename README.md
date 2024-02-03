# Svelte-leaflet

Leaflet components bindings for Svelte !

## Installation

Install svelte-leaflet with your favorite package manager

```bash
npm install @kayoshi-dev/svelte-leaflet leaflet
```

## Features

- Map
- TileLayer
- Marker
- And more to come!

## Documentation

[!NOTE]  
This is still a WIP. API might change.

```ts
import { MapContainer, Marker, TileLayer } from '@kayoshi-dev/svelte-leaflet';
```

For the moment only three components are available :

### MapContainer

This is the main component that will help you create your interactive map.  
**All the other components should be used inside the body of that component.**

[!IMPORTANT]  
Must be used with the <TileLayer> component!

#### Props

- Center (mandatory)
- Zoom
- Zoom Options (an object that contains all the additionals properties you can add)

Usage :

```ts
<MapContainer center={[48, 2.34]}>

</MapContainer>
```

### TileLayer

This component allows you to define the tile layer you would like to use.

#### Props

- Attribution (mandatory)
- Url (mandatory)
- TileLayerOptions

Usage :

```ts
<MapContainer center={[48, 2.34]}>
    <TileLayer attribution="&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors" url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
</MapContainer>
```

### Marker (WIP)

Add one or multiple markers on your map

#### Props

- Latlng (mandatory)
- PopupText
- MarkerOptions

Usage :

```ts
<Marker latlng={[48, 2.34]} popupText={'Hello world!'} markerOptions={{ draggable: true }} />
```

## Authors

- [Kayoshi-dev](https://www.github.com/kayoshi-dev)
