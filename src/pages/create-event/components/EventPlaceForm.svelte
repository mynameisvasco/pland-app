<script lang="ts">
    import { LocationMarker } from "svelte-hero-icons";
    import CircleIcon from "../../../components/CircleIcon.svelte";
    import {
        Coordinates,
        locationCoordinates,
    } from "../../../services/LocationService";
    import {
        fetchPlaceByName,
        fetchPlaceByLocation,
        Place,
        nearPlaces,
    } from "../../../services/PlacesServices";

    export let values: any;

    let places: Place[] = [];

    async function handlePlaceSearch(e: any) {
        const value = e.target.value;
        places = await fetchPlaceByName(value);
    }

    async function fetchNearPlaces(location: Coordinates) {
        nearPlaces.set(await fetchPlaceByLocation(location));
    }

    $: {
        fetchNearPlaces($locationCoordinates);
    }
</script>

<form>
    <div class="mb-6">
        <p class="text-lg font-regular text-gray-700">Search</p>
        <input
            on:keydown={handlePlaceSearch}
            class="input-lg input-gray w-full"
            placeholder="The best place" />
    </div>
    <div class="flex justify-between items-center py-2 mt-2">
        {#each places as place}
            <div class="flex items-center">
                <CircleIcon icon={LocationMarker} color="green" size="10" />
                <p class="text-xl font-medium ml-2">{place.name}</p>
            </div>
            <div>
                <p>${(place.price / 100).toFixed(2)}</p>
            </div>
            <div>
                <span
                    on:click={() => (values.placeId = place.id)}
                    class="cursor-pointer bg-gray-100 rounded-lg shadow-sm p-1 font-medium">Select</span>
            </div>
        {/each}
    </div>
    <div>
        <p class="text-lg font-regular text-gray-700">Near you</p>
        {#each $nearPlaces as place}
            <div class="flex justify-between items-center py-2">
                <div class="flex items-center">
                    <CircleIcon icon={LocationMarker} color="green" size="10" />
                    <p class="text-xl font-medium ml-2">{place.name}</p>
                </div>
                <div>
                    <p>${(place.price / 100).toFixed(2)}</p>
                </div>
                <div>
                    <span
                        on:click={() => (values.placeId = place.id)}
                        class:bg-indigo-500={values.placeId === place.id}
                        class:text-indigo-100={values.placeId === place.id}
                        class="cursor-pointer bg-gray-100 rounded-lg shadow-sm p-1 font-medium">
                        {#if values.placeId === place.id}
                            Selected
                        {:else}Select{/if}
                    </span>
                </div>
            </div>
        {/each}
    </div>
</form>
