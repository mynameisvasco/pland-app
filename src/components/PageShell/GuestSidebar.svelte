<script>
    import { navigate } from "svelte-routing";
</script>

<div class="flex flex-col">
    <button on:click={() => navigate('/signup')} class="btn-lg btn-indigo">Sign
        Up</button>
    <p
        on:click={() => navigate('/login')}
        class="text-2xl cursor-pointer font-semibold text-center mt-4">
        Login
    </p>
</div>
