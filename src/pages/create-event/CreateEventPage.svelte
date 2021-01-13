<script>
    import CircleIcon from "../../components/CircleIcon.svelte";
    import PageShell from "../../components/PageShell/PageShell.svelte";
    import EventDetailsForm from "./components/EventDetailsForm.svelte";
    import EventServicesForm from "./components/EventServicesForm.svelte";
    import EventPlaceForm from "./components/EventPlaceForm.svelte";
    import { createEvent } from "../../services/EventsService";

    const values = {
        name: "",
        schedule: "",
        date: "",
        attendance: "",
        tags: "",
        cover: "",
        placeId: "",
        ticketline: false,
        services: [],
    };

    async function handlePlanEvent() {
        await createEvent(values);
    }
</script>

<PageShell>
    <div class="pt-64 pb-16 md:pt-40 px-12">
        <h1 class="text-4xl font-semibold">Plan Event</h1>
        <div class="grid grid-cols-12 gap-8 w-full my-8">
            <div class="col-span-12 md-col-span-6 lg:col-span-4 flex flex-col">
                <div class="mb-8 flex items-center">
                    <CircleIcon text="1" color="indigo" />
                    <span class="text-xl font-medium ml-3 text-gray-700">
                        Event's Details
                    </span>
                </div>
                <div class="bg-white rounded-lg shadow-md p-6">
                    <EventDetailsForm {values} />
                </div>
            </div>
            <div class="col-span-12 md-col-span-6 lg:col-span-4 flex flex-col">
                <div class="mb-8 flex items-center">
                    <CircleIcon text="2" color="indigo" />
                    <span class="text-xl font-medium ml-3 text-gray-700">
                        Event's Place
                    </span>
                </div>
                <div class="bg-white rounded-lg shadow-md p-6">
                    <EventPlaceForm {values} />
                </div>
            </div>
            <div class="col-span-12 md-col-span-6 lg:col-span-4 flex flex-col">
                <div class="mb-8 flex items-center">
                    <CircleIcon text="3" color="indigo" />
                    <span class="text-xl font-medium ml-3 text-gray-700">
                        Event's Services
                    </span>
                </div>
                <div class="bg-white rounded-lg shadow-md p-6">
                    <EventServicesForm />
                    <span class="text-gray-500">
                        All the services are provided by our direct
                        collaborators. You can expect the best people on your
                        area to fulfil your needs.
                    </span>
                </div>
                <div class="mt-4 flex justify-end">
                    <button
                        on:click={handlePlanEvent}
                        class="btn-lg btn-indigo">Plan</button>
                </div>
            </div>
        </div>
    </div>
</PageShell>
