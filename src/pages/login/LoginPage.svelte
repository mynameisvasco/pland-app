<script>
    import LoginForm from "./components/LoginForm.svelte";
</script>

<div
    class="flex justify-center items-center w-full h-screen overflow-hidden relative">
    <div
        class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-300 to-indigo-300 z-20"
        style="opacity: 0.15" />
    <video
        class="absolute h-full w-full object-cover z-10"
        src="/vid.mp4"
        autoplay
        muted
        loop />
    <div class="grid grid-cols-12 relative z-30 w-full">
        <div
            class="col-span-10 col-start-2 lg:col-span-4 lg:col-start-5 bg-white rounded-lg shadow-xl p-10">
            <h1 class="text-4xl font-semibold mb-6">Welcome back</h1>
            <LoginForm />
        </div>
    </div>
</div>
