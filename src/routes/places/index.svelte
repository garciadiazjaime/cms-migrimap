<script>
  import { onMount } from "svelte";
  import { getPlaces } from "../../utils/mintAPI";

  let places = []

  onMount(async () => {
    places = await getPlaces();
	});
</script>

<a href="/places/add">Add</a>

<br /><br />

{#if places}
  {#each places as place}
    <div>
      <a href="/places/{place._id}">{place.name}</a>
    </div>
  {/each}
{/if}
