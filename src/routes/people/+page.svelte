<script lang="ts">
    import PersonCard from "./PersonCard.svelte";
    import { type Person } from "$lib/pocketbase.js";
    import profile from "$lib/images/blank-profile.webp";
    export let data;
    const people: Person[] = data.people || [];
</script>

<svelte:head>
    <title>People</title>
    <meta name="description" content="People page" />
</svelte:head>

<h1>Personer</h1>

<div class="grid grid-cols-3 gap-4">
    {#each people as person}
        <PersonCard
            name={person.name}
            description={person.description}
            status={person.status || ""}
            image={person.image || profile}
        />
    {/each}
</div>
