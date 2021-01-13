<script lang="ts">
    import { nearEvents } from "../../../services/EventsService";
    import { MusicNote, Calendar, ArrowRight } from "svelte-hero-icons";
    import CircleIcon from "../../../components/CircleIcon.svelte";
    import { format } from "date-fns";
    import { tagToIcon } from "../../../services/Utils";
</script>

<div class="p-6 bg-white rounded-lg shadow-xl">
    <h1 class="text-3xl font-semibold mb-4">Events near you</h1>
    {#each $nearEvents as event, i}
        <div
            class:border-b={i !== $nearEvents.length - 1}
            class="flex justify-between items-center py-4 border-gray-100">
            <div class="flex flex-col">
                <div class="flex">
                    <CircleIcon
                        icon={tagToIcon(event._tags.split(',')[0])}
                        color="green"
                        size="12" />
                    <div class="flex flex-col ml-4">
                        <p class="text-xl font-medium">{event.name}</p>
                        <div
                            class="text-md text-gray-500 font-regular flex items-center">
                            <Calendar solid class="w-4 h-4 mr-1" />
                            {format(new Date(event.startsAt), 'dd-MM-yyyy')}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button
                    class="px-2 text-lg font-semibold bg-gray-100 rounded-lg shadow-sm">
                    Details
                </button>
            </div>
        </div>
    {/each}
</div>
