<script lang=ts>
    import PhoneCard from './PhoneCard.svelte'
    import {type Phone} from '$lib/pocketbase'

    export let data;
    const phones: Phone[] = data.phones || []
</script>

<svelte:head>
    <title>Messages</title>
    <meta name="description" content="Messages page" />
</svelte:head>

<h1>SMS</h1>

<div class="flex flex-row items-center">
    {#each phones as phone}
        <PhoneCard phoneId={phone.id} owner="{phone.owner}" image={phone.image} />
    {/each}
</div>
