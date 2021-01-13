<script lang="ts">
    import { user } from "../services/AuthService";
</script>

{#if $user.id}
    <slot />
{/if}
