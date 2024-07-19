<script lang="ts">
    import {pb} from '$lib/pocketbase';

    let username = '';
    let password = '';

    async function login() {
        console.log('logging ins', username, password);
        await pb.admins.authWithPassword(username, password);
    }
</script>

<input bind:value={username} placeholder="user"/>
<input bind:value={password} placeholder="password" />
<button on:click={login}>Log In</button>