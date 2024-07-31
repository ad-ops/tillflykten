<script lang="ts">
    import { pb } from "$lib/pocketbase";

    let username = "";
    let password = "";

    async function login() {
        pb.authStore.clear();
        console.log("logging ins", username, password);
        if (!username || !password) {
            try {
                const authData = await pb
                    .collection("users")
                    .authWithOAuth2({ provider: "github" });
                console.log("tried github stuff");
                console.log(pb.authStore.isValid);
                console.log(pb.authStore.token);
                console.log(pb.authStore.model?.id);
            } catch (e) {
                console.error(e);
            }
        }
        else {
            await pb.admins.authWithPassword(username, password);
        }
    }
</script>

<input bind:value={username} placeholder="user" />
<input bind:value={password} placeholder="password" />
<button on:click={login}>Log In</button>
