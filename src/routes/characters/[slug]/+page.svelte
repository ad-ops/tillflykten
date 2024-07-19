<script>
    export let data;
    const name = data.title.slice(0, 1).toUpperCase() + data.title.slice(1);
</script>

<h1>{name}</h1>
<p>{data.content}</p>