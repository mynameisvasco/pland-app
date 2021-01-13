<script>
    import { navigate } from "svelte-routing";
    import { createForm } from "svelte-forms-lib";
    import { login } from "../../../services/AuthService";

    const { form, handleChange, handleSubmit } = createForm({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            login(values.email, values.password);
        },
    });
</script>

<form on:submit={handleSubmit}>
    <div class="mb-6">
        <p class="text-lg font-regular text-gray-700">Email</p>
        <input
            on:change={handleChange}
            bind={$form.email}
            class="input-lg input-gray w-full"
            name="email"
            placeholder="example@gmail.com" />
    </div>
    <div class="mb-6">
        <p class="text-lg font-regular text-gray-700">Password</p>
        <input
            on:change={handleChange}
            bind={$form.password}
            class="input-lg input-gray w-full"
            name="password"
            type="password"
            placeholder="mypass" />
    </div>
    <p
        on:click={() => navigate('/signup')}
        class="text-md cursor-pointer font-regular text-gray-700 mb-4">
        I don't have an account yet.
    </p>
    <button type="submit" class="btn-lg btn-indigo mr-4">Login</button>
</form>
