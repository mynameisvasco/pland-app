<script>
    export let values;
</script>

<div class="mb-6">
    <p class="text-lg font-regular text-gray-700">Name</p>
    <input
        bind:value={values.name}
        class="input-lg input-gray w-full"
        name="name"
        placeholder="My Birthday Party" />
</div>
<div class="grid grid-cols-12 mb-6 gap-6">
    <div class="col-span-6">
        <p class="text-lg font-regular text-gray-700">Duration (min)</p>
        <input
            bind:value={values.duration}
            class="input-lg input-gray w-full"
            name="duration"
            placeholder="45" />
    </div>
    <div class="col-span-6">
        <p class="text-lg font-regular text-gray-700">Starts At</p>
        <input
            bind:value={values.startsAt}
            class="input-lg input-gray w-full"
            name="startsAt"
            placeholder="11/01/2020 10:50" />
    </div>
</div>
<div class="grid grid-cols-12 mb-6 gap-6 items-center">
    <div class="col-span-6">
        <p class="text-lg font-regular text-gray-700">Attendance limit</p>
        <input
            bind:value={values.attendance}
            class="input-lg input-gray w-full"
            name="attendance"
            placeholder="15" />
    </div>
    <div class="col-span-6">
        <div class="flex justify-between">
            <div class="flex items-center ">
                <input
                    bind:checked={values.ticketline}
                    type="checkbox"
                    class="form-checkbox h-5 w-5 mr-2" />
                <span class="text-lg text-gray-700">Ticketline</span>
            </div>
            {#if values.ticketline}
                <div class="ml-4">
                    <p class="text-lg font-regular text-gray-700">
                        Ticket Price ($)
                    </p>
                    <input
                        bind:value={values.ticketPrice}
                        class="input-lg input-gray w-full"
                        name="ticketprice"
                        placeholder="2.40" />
                </div>
            {/if}
        </div>
    </div>
</div>
<div class="mb-6">
    <p class="text-lg font-regular text-gray-700">Tags</p>
    <input
        bind:value={values.tags}
        class="input-lg input-gray w-full"
        name="tags"
        placeholder="#birthday, #cake" />
</div>
