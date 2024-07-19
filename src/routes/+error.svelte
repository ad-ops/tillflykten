<script>
	import { page } from '$app/stores';

    const status = $page.status;
    const message = $page.error?.message || 'Unknown error';
</script>

{#if status === 404}
    <h1>Du är vilse och kommer troligen dö ensam... (404)</h1>
{:else}
    <h1>{status} - {message}</h1>
{/if}