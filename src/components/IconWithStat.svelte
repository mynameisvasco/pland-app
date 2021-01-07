<script lang="ts">
    export let icon: any;
    export let title: string;
    export let subtitle: string;
</script>

<div class="flex items-center ">
    <div class="bg-indigo-100 text-indigo-500 rounded-full p-2">
        <svelte:component this={icon} solid class="w-8 h-8" />
    </div>
    <div class="flex-col ml-2">
        <h4 class="font-semibold text-3xl">{title}</h4>
        <h5 class="font-medium text-md text-gray-500">{subtitle}</h5>
    </div>
</div>
