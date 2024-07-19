<script lang="ts">
    import { Separator } from "$lib/components/ui/separator";
    import { type Event } from "$lib/pocketbase.js"

    export let data;
    const encounters: Event[] = data.events || [];
</script>

<svelte:head>
    <title>Story</title>
    <meta name="description" content="Story page" />
</svelte:head>

<h1>Resan</h1>

{#each encounters as encounter}
    <div>
        <h3 class="text-xl">{encounter.title}</h3>
        <h5 class="text-sm">{encounter.date.slice(0, 10)}</h5>
        <span>{@html encounter.description}</span>
    </div>
    <div class="py-3">
        <Separator />
    </div>
{/each} 
