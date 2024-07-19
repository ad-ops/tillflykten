<script lang="ts">
    export let phoneId;
    export let owner;
    export let image;
</script>

<div class="flex flex-col p-4">
    <a href="/messages/{phoneId}">
        <img src={image} alt="" />
    </a>
    <h3 class="text-center">{owner}s</h3>
</div>
