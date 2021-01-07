<script lang="ts">
    import { Menu } from "svelte-hero-icons";
    import Logo from "../Logo.svelte";
    import SearchBar from "./SearchBar.svelte";

    export let onSidebarToggle: () => void;
</script>

<div class="flex flex-col md:flex-row items-center p-8 absolute z-20 w-full">
    <div class="mb-4 md:mb-0 mr-12">
        <Logo />
    </div>
    <div class="flex w-full md:w-2/3">
        <div class="w-full mr-3">
            <SearchBar />
        </div>
        <button class="btn-lg btn-white" on:click={onSidebarToggle}>
            <Menu class="w-8" solid />
        </button>
    </div>
</div>
