<script lang="ts">
    import IconWithStat from "../IconWithStat.svelte";
    import { Speakerphone, Star } from "svelte-hero-icons";
    export let isOpen: boolean;
    let name: string = "Vasco Sousa";
    let est: string = "est. 2021";
</script>

<div class:hidden={!isOpen} class="relative z-40">
    <div
        class="flex flex-col justify-between items-center absolute top-0 left-0 w-72 h-screen bg-white shadow-xl p-10">
        <div>
            <img
                class="rounded-lg mb-3 w-30 mx-auto"
                alt="profile"
                src="https://eu.ui-avatars.com/api/?name={name}&rounded&size=128&background=E0E7FF&color=6366F1" />
            <p class="text-2xl font-semibold text-center">{name}</p>
            <p class="text-lg font-medium text-gray-500 text-center">{est}</p>
            <div class="h-1 border-b border-gray-200 my-12" />
            <div class="grid gird-cols-12 gap-8">
                <IconWithStat
                    icon={Speakerphone}
                    title="120"
                    subtitle="Planned events" />

                <IconWithStat
                    icon={Star}
                    title="4.8"
                    subtitle="Average Rating" />
            </div>
        </div>
        <div class="flex flex-col">
            <button class="btn-lg btn-indigo">My Account</button>
            <a
                href="/"
                class="text-2xl font-semibold text-center mt-4">Logout</a>
        </div>
    </div>
</div>
