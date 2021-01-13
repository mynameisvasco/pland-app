<script lang="ts">
    import mapboxgl, { Map } from "mapbox-gl";
    import { afterUpdate, onMount } from "svelte";
    import {
        fetchEventsByLocation,
        nearEvents,
    } from "../../../services/EventsService";
    import {
        Coordinates,
        locationCoordinates,
    } from "../../../services/LocationService";

    mapboxgl.accessToken =
        "pk.eyJ1IjoibXluYW1laXN2YXNjbyIsImEiOiJjanFwYmVzdmMwbm05NDNwczhlamhvOHZmIn0.oTI0ZNvUle10KxcR-SqG8Q";
    let map: Map | undefined;

    async function initMap() {
        map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/light-v10?optimize=true",
        });
        map?.resize();
    }

    async function updateMapLocation(location: Coordinates) {
        map?.flyTo({ center: location, zoom: 13 });
        nearEvents.set(await fetchEventsByLocation(location));
    }

    onMount(() => {
        initMap();
    });

    afterUpdate(() => {
        updateMapLocation($locationCoordinates);
    });
</script>

<div id="map" class="w-full h-screen" />
