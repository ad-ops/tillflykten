<script lang="ts">
    import * as Card from "$lib/components/ui/card";

    export let name: string;
    export let image: string;
    export let status: string;
    export let description: string;
</script>

<Card.Root class="grid grid-cols-2 gap-2">
    <Card.Header>
        <Card.Title>{name}</Card.Title>
        <Card.Description>{status}</Card.Description>
    </Card.Header>
    <Card.Content>
        <img class="p-3" src={image} alt="portrait" />
    </Card.Content>
    <Card.Footer class="col-span-2 text-wrap">
        {@html description}
    </Card.Footer>
</Card.Root>
