<script>
    import { Router, Route } from "svelte-routing";
    import CreateEventPage from "./pages/create-event/CreateEventPage.svelte";
    import HomePage from "./pages/home/HomePage.svelte";
</script>

<Router url="">
    <Route path="/" component={HomePage} />
    <Route path="/create-event" component={CreateEventPage} />
</Router>
