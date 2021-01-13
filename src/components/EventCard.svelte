<script lang="ts">
    import { navigate } from "svelte-routing";
    import { addMinutes, format } from "date-fns";
    import { LocationMarker, Calendar, Clock } from "svelte-hero-icons";
    import { Event } from "../services/EventsService";

    export let event: Event;
</script>

<div
    class="bg-white shadow-sm rounded-lg cursor-pointer"
    on:click={() => navigate('/event', { state: { event } })}>
    <img
        class="rounded-t-lg"
        src="https://source.unsplash.com/featured/1600x900/?{event._tags}"
        alt="event" />
    <div class="px-4 py-2">
        <h2 class="text-2xl font-semibold mt-2">{event.name}</h2>
        <div class="flex mt-2 mb-4">
            {#each event._tags.split(',') as tag}
                <span
                    class="text-gray-500 font-semibold bg-gray-100 rounde-md px-1 rounded-lg mr-2">#{tag}</span>
            {/each}
        </div>
        <div class="flex items-center mb-4">
            <LocationMarker class="w-6 h-6 text-gray-500 mr-2" solid />
            <span class="text-gray-500">Rua 123, Porto</span>
        </div>
        <div class="flex items-center mb-4">
            <Calendar class="w-6 h-6 text-gray-500 mr-2" solid />
            <span
                class="text-gray-500">{format(new Date(event.startsAt), 'dd-MM-yyyy')}</span>
        </div>
        <div class="flex items-center mb-4">
            <Clock class="w-6 h-6 text-gray-500 mr-2" solid />
            <span
                class="text-gray-500">{format(new Date(event.startsAt), 'HH:mm')}
                -
                {format(addMinutes(new Date(event.startsAt), event.duration), 'HH:mm')}
            </span>
        </div>
    </div>
</div>
