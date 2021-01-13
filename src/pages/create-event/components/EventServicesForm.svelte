<script lang="ts">
    export let values;

    function handleChange(name: string) {
        values.services.includes(name)
            ? (values.services = values.services.filter((s) => s !== name))
            : values.services.push(name);
    }
</script>

<div class="mb-6">
    <div class="flex items-center ">
        <input
            on:change={() => handleChange('catering')}
            type="checkbox"
            class="form-checkbox h-5 w-5 mr-2" />
        <span class="text-lg text-gray-700">Catering</span>
    </div>
    <div class="flex items-center ">
        <input
            on:change={() => handleChange('musicians')}
            type="checkbox"
            class="form-checkbox h-5 w-5 mr-2" />
        <span class="text-lg text-gray-700">Musicians</span>
    </div>
    <div class="flex items-center ">
        <input
            on:change={() => handleChange('stage')}
            type="checkbox"
            class="form-checkbox h-5 w-5 mr-2" />
        <span class="text-lg text-gray-700">Stage & Sound Team</span>
    </div>
    <div class="flex items-center ">
        <input
            on:change={() => handleChange('cleaners')}
            type="checkbox"
            class="form-checkbox h-5 w-5 mr-2" />
        <span class="text-lg text-gray-700">Cleaners</span>
    </div>
</div>
