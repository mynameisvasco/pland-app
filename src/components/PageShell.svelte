<script>
    import Logo from "./Logo.svelte";
    import Menu from "./Menu.svelte";
    import SearchBar from "./SearchBar.svelte";
</script>

<div
    class="grid grid-cols-12 gap-4 justify-between items-center p-8 absolute z-20 w-full">
    <div class="col-span-2">
        <Logo />
    </div>
    <div class="col-span-2">
        <Menu />
    </div>
    <div class="col-span-8">
        <SearchBar />
    </div>
</div>

<div class="relative z-10">
    <slot />
</div>
