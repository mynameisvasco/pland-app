<script>
    import { navigate } from "svelte-routing";
</script>

<div on:click={() => navigate('/')} class="flex items-center cursor-pointer">
    <img src="/pland-logo.png" alt="Pland logo" class="w-10 h-10 mr-2" />
    <p class="text-2xl text-gray-900 font-medium">Pland</p>
</div>
