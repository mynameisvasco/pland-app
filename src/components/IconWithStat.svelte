<script lang="ts">
    import CircleIcon from "./CircleIcon.svelte";

    export let icon: any;
    export let title: string;
    export let subtitle: string;
</script>

<div class="flex items-center ">
    <CircleIcon {icon} size="12" />
    <div class="flex-col ml-2">
        <h4 class="font-semibold text-3xl">{title}</h4>
        <h5 class="font-medium text-md text-gray-500">{subtitle}</h5>
    </div>
</div>
