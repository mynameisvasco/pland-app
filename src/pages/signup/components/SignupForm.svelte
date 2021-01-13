<script>
    import { navigate } from "svelte-routing";
    import { createForm } from "svelte-forms-lib";
    import { register } from "../../../services/AuthService";

    const { form, handleChange, handleSubmit } = createForm({
        initialValues: {
            name: "",
            email: "",
            password: "",
            phone: "",
        },
        onSubmit: (values) => {
            register(values.name, values.email, values.password, values.phone);
        },
    });
</script>

<form on:submit={handleSubmit}>
    <div class="mb-6">
        <p class="text-lg font-regular text-gray-700">Name</p>
        <input
            on:change={handleChange}
            bind={$form.name}
            class="input-lg input-gray w-full"
            name="name"
            required
            placeholder="Peter Smith" />
    </div>
    <div class="mb-6">
        <p class="text-lg font-regular text-gray-700">Email</p>
        <input
            on:change={handleChange}
            bind={$form.email}
            class="input-lg input-gray w-full"
            name="email"
            type="email"
            required
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
            required
            placeholder="mypass" />
    </div>
    <div class="mb-6">
        <p class="text-lg font-regular text-gray-700">Phone</p>
        <input
            on:change={handleChange}
            bind={$form.phone}
            class="input-lg input-gray w-full"
            name="phone"
            placeholder="934133011" />
    </div>
    <p
        on:click={() => navigate('/login')}
        class="text-md cursor-pointer font-regular text-gray-700 mb-4">
        I already have an account.
    </p>
    <button class="btn-lg btn-indigo mr-4">Sign Up</button>
</form>
