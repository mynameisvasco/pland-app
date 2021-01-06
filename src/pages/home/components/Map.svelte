<script>
    import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
    import { onMount } from "svelte";

    onMount(() => {
        mapboxgl.accessToken =
            "pk.eyJ1IjoibXluYW1laXN2YXNjbyIsImEiOiJjanFwYmVzdmMwbm05NDNwczhlamhvOHZmIn0.oTI0ZNvUle10KxcR-SqG8Q";
        var map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/streets-v11",
        });
    });
</script>

<div id="map" class="w-full h-screen" />
