<script lang="ts">
    import { page } from "$app/stores";

    import * as Card from "$lib/components/ui/card";
    import type { Character } from "$lib/pocketbase.js";

    export let data;
    const characters: Character[] = data.characters || [];
</script>

<svelte:head>
    <title>Characters</title>
    <meta name="description" content="Characters page" />
</svelte:head>

<h1>Kompisarna</h1>
<div class="grid grid-cols-4 gap-4">
    {#each characters as character}
        <Card.Root class="">
            <Card.Header>
                <a href="{$page.url.pathname}/{character.name.toLowerCase()}">
                    <Card.Title>{character.name}</Card.Title>
                </a>
                <Card.Description
                    >{@html character.description}</Card.Description
                >
            </Card.Header>
            <Card.Content>
                <img class="" src={character.image} alt="portrait" />
            </Card.Content>
            <Card.Footer></Card.Footer>
        </Card.Root>
    {/each}
</div>
