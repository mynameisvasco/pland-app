<script lang="ts">
    import { navigate } from "svelte-routing";
    import { Menu } from "svelte-hero-icons";
    import Logo from "../Logo.svelte";
    import SearchBar from "./SearchBar.svelte";

    export let onSidebarToggle: () => void;
</script>

<div class="flex flex-col md:flex-row items-center p-12 absolute z-20 w-full">
    <div class="mb-4 md:mb-0 mr-12">
        <Logo />
    </div>
    <div class="grid grid-cols-12 gap-4 w-full">
        <div class="col-span-12 md:col-span-6">
            <SearchBar />
        </div>
        <div class="col-span-12 md:col-span-6 flex w">
            <button class="btn-lg btn-white mr-3" on:click={onSidebarToggle}>
                <Menu class="w-8" solid />
            </button>
            <button
                on:click={() => navigate('/create-event')}
                class="btn-lg btn-indigo">
                Plan Event
            </button>
        </div>
    </div>
</div>
