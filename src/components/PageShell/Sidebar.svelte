<script lang="ts">
    import { user } from "../../services/AuthService";
    import GuestSidebar from "./GuestSidebar.svelte";
    import UserSidebar from "./UserSidebar.svelte";
    export let isOpen: boolean;
</script>

<div class:hidden={!isOpen} class="relative z-40">
    <div
        class="flex flex-col justify-between items-center absolute top-0 left-0 w-72 h-screen bg-white shadow-xl p-10">
        {#if $user && $user.id}
            <UserSidebar />
        {:else}
            <GuestSidebar />
        {/if}
    </div>
</div>
