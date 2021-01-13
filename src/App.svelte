<script>
    import { onMount } from "svelte";

    import { Router, Route } from "svelte-routing";
    import CreateEventPage from "./pages/create-event/CreateEventPage.svelte";
    import EventPage from "./pages/event/EventPage.svelte";
    import HomePage from "./pages/home/HomePage.svelte";
    import LoginPage from "./pages/login/LoginPage.svelte";
    import SignupPage from "./pages/signup/SignupPage.svelte";
    import { fetchUserDetails } from "./services/AuthService";
    import { geolocate } from "./services/LocationService";

    onMount(() => {
        fetchUserDetails();
    });
    geolocate();
</script>

<Router url="">
    <Route path="/" component={HomePage} />
    <Route path="/create-event" component={CreateEventPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/signup" component={SignupPage} />
    <Route path="/event" component={EventPage} />
</Router>
