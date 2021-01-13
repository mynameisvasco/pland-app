<script lang="ts">
    import PageShell from "../../components/PageShell/PageShell.svelte";
    import { Event } from "../../services/EventsService";
    export let location: any;
    let event: Event = location.state.event;
</script>

<PageShell>
    <div class="pt-64 pb-16 md:pt-40 px-12">
        <div class="grid grid-cols-12 gap-8">
            <div class="col-span-12 md:col-span-6">
                <img
                    class="rounded-md"
                    src="https://source.unsplash.com/featured/1600x900/?{event._tags}"
                    alt={event.name} />
            </div>
            <div class="col-span-12 md:col-span-6">
                <h1 class="text-4xl font-semibold">{event.name}</h1>
                <div class="flex mt-2 mb-4">
                    {#each event._tags.split(',') as tag}
                        <span
                            class="text-gray-500 font-semibold bg-white rounde-md px-1 rounded-lg mr-2">#{tag}</span>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</PageShell>
