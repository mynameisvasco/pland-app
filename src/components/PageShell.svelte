<script>
    import SearchBar from "./SearchBar.svelte";
</script>

<div class="flex p-8 absolute z-20 w-full">
    <div class="bg-green-500 w-1/6 h-20" />
    <div class="w-5/6 h-20 p-4">
        <SearchBar />
    </div>
</div>

<div class="relative z-10">
    <slot />
</div>
