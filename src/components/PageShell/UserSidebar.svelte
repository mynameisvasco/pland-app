<script>
    import { format } from "date-fns";
    import { Speakerphone, Star } from "svelte-hero-icons";
    import { user } from "../../services/AuthService";
    import IconWithStat from "../IconWithStat.svelte";
</script>

<div>
    <img
        class="rounded-lg mb-3 w-30 mx-auto"
        alt="profile"
        src="https://eu.ui-avatars.com/api/?name={$user.name}&rounded&size=128&background=E0E7FF&color=6366F1" />
    <p class="text-2xl font-semibold text-center">{$user.name}</p>
    <p class="text-lg font-medium text-gray-500 text-center">
        Est
        {format(new Date($user.createdAt), 'yyyy')}
    </p>
    <div class="h-1 border-b border-gray-200 my-12" />
    <div class="grid gird-cols-12 gap-8">
        <IconWithStat
            icon={Speakerphone}
            title="120"
            subtitle="Planned events" />

        <IconWithStat
            icon={Star}
            title={$user.rating}
            subtitle="Average Rating" />
    </div>
</div>
<div class="flex flex-col">
    <button class="btn-lg btn-indigo">My Account</button>
    <a href="/" class="text-2xl font-semibold text-center mt-4">Logout</a>
</div>
