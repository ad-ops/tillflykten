
<script lang="ts">
    import {type Sms} from '$lib/pocketbase'

    export let data;
    const sms: Sms[] = data.sms || []

</script>
<h1>Messages</h1>

{#each sms as message}
    <p>
        {message.phone} {message.counterpart} {message.message}
    </p>
{/each}