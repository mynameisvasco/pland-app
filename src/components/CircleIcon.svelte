<script lang="ts">
    export let icon = false;
    export let text = false;
    export let color = "indigo";
    export let size = "8";
</script>

<div
    class="bg-{color}-100 text-{color}-500 rounded-full p-2 w-{size} h-{size} flex items-center justify-center">
    {#if text}
        <span class="text-xl font-semibold">{text}</span>
    {:else}
        <svelte:component this={icon} solid class="w-{size} h-{size}" />
    {/if}
</div>
