<script>
  import { onMount } from "svelte";
  import { getPlaces } from "../../utils/mintAPI";

  let places = []

  onMount(async () => {
    places = await getPlaces();
	});
</script>
<style>
  .profile-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-column-gap: 20px;
  }
  .profile-card {
    background: #696A6D;
    border-radius: 4px;
    color: white;
    padding: 15px;
  }
  .toolbar {
    background: #696A6D;
    border-radius: 4px;
    margin-bottom: 15px;
    color: white;
  }
  .toolbar a {
    text-decoration: none;
    display: inline-block;
    border-right: 1px solid rgba(255, 255, 255, .2);
    padding: 15px;
  }

</style>
<div class="toolbar">
  <a href="/places/add">Crear perfil nuevo</a>
</div>

<div class="profile-list">
  {#if places}
    {#each places as place}
      <a class="profile-card" href="/places/{place._id}">
        {place.name} 
      </a>
    {/each}
  {/if}
</div>
