<script>
    import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
    import { onMount } from "svelte";

    onMount(() => {
        mapboxgl.accessToken =
            "pk.eyJ1IjoibXluYW1laXN2YXNjbyIsImEiOiJjanFwYmVzdmMwbm05NDNwczhlamhvOHZmIn0.oTI0ZNvUle10KxcR-SqG8Q";
        var map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/light-v10?optimize=true",
        });
    });
</script>

<div class="w-full h-screen relative z-10">
    <div id="map" class="w-full h-full" />
</div>
