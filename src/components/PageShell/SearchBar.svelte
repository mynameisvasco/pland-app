<script lang="ts">
    import { Search } from "svelte-hero-icons";
    import {
        fetchEventsByTags,
        fetchEventsByName,
        searchedEvents,
    } from "../../services/EventsService";
    let searchQuery = "";

    async function search(value: string) {
        if (value.length >= 4) {
            const eventsByName = await fetchEventsByName(value);
            const eventsByTags = await fetchEventsByTags(value.split(","));
            searchedEvents.set([...eventsByName, ...eventsByTags]);
        } else if (value.length === 0) {
            searchedEvents.set([]);
        }
    }
    $: {
        search(searchQuery);
    }
</script>

<div class="relative w-full">
    <Search class="absolute right-0 w-8 mr-4 text-gray-500" solid />
    <input
        bind:value={searchQuery}
        placeholder="Search for anything..."
        class="input-lg input-white w-full" />
</div>
