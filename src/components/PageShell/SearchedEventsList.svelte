<script lang="ts">
    import EventCard from "../EventCard.svelte";
    import { searchedEvents } from "../../services/EventsService";
</script>

<div class="w-full h-full pt-40 px-12">
    <h1 class="text-4xl font-semibold mb-8">Search results</h1>
    <div class="grid grid-cols-12 gap-6">
        {#each $searchedEvents as event}
            <div class="col-span-6 md:col-span-3 lg:col-span-2">
                <EventCard {event} />
            </div>
        {/each}
    </div>
</div>
