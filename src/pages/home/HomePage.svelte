<script>
    import PageShell from "../../components/PageShell/PageShell.svelte";
    import { searchedEvents } from "../../services/EventsService";
    import Map from "./components/Map.svelte";
    import NearEvents from "./components/NearEvents.svelte";
</script>

<PageShell>
    <div class="h-full relative z-10" class:hidden={$searchedEvents.length > 0}>
        <Map />
        <div class="grid grid-cols-12 absolute top-0 left-0 px-8 pt-40 w-full">
            <div class="col-span-3">
                <NearEvents />
            </div>
        </div>
    </div>
</PageShell>
