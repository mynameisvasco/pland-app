<script>
    import SearchedEventsList from "./SearchedEventsList.svelte";
    import { searchedEvents } from "../../services/EventsService";

    import Sidebar from "./Sidebar.svelte";
    import TopBar from "./TopBar.svelte";

    let isSidebarOpen = false;
    function handleSidebarToggle() {
        isSidebarOpen = !isSidebarOpen;
    }
</script>

<TopBar onSidebarToggle={handleSidebarToggle} />
<Sidebar isOpen={isSidebarOpen} />
<div class="h-screen">
    <div class="h-full" class:hidden={$searchedEvents.length == 0}>
        <SearchedEventsList />
    </div>
    <slot />
    <div
        on:click={handleSidebarToggle}
        class="w-full h-screen absolute top-0 right-0 z-30"
        class:bg-gray-900={isSidebarOpen}
        class:bg-opacity-40={isSidebarOpen}
        class:hidden={!isSidebarOpen} />
</div>
