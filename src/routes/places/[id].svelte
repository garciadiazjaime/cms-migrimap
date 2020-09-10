<script>
  import { onMount } from "svelte";
  import { stores, goto } from '@sapper/app';

  import { getPlaces, savePlace } from "../../utils/mintAPI";

  const { preloading, page, session } = stores(); 
  const { params } = $page;

  let place = {}

  onMount(async () => {
    const response = await getPlaces(params.id);

    if (Array.isArray(response) && response.length) {
      place = response[0]
    }
	});

  async function saveHandler() {
    await savePlace(place, params.id)

    await goto('/places');
	}
</script>

Nombre:
<input bind:value={place.name} >
<br />

Descripción:
<input bind:value={place.description} >
<br />

Perfil:
<input bind:value={place.profile} >
<br />

Dirección:
<input bind:value={place.address} >
<br />

Dirección Google Maps:
<input bind:value={place.gmaps} >
<br />

Teléfono(s):
<input bind:value={place.phone} >
<br />

Servicios gratuitos:
<input bind:value={place.servicesFree} >
<br />

Servicios con cuota de recuperación:
<input bind:value={place.servicesNonFree} >
<br />

Fotografía(s):
<input bind:value={place.img} >
<br />

Sitio Web:
<input bind:value={place.website} >
<br />

Redes sociales:
<input bind:value={place.socialNetwork} >
<br />

Director(a):
<input bind:value={place.ceo} >
<br />

Responsable:
<input bind:value={place.owner} >
<br />

Idiomas:
<input bind:value={place.language} >
<br />

Horario de atención:
<input bind:value={place.schedule} >
<br />

Capacidad:
<input bind:value={place.capacity} >
<br />

Población actual:
<input bind:value={place.population} >
<br />

Categoría:
<input bind:value={place.category} >
<br />

<button on:click={saveHandler}>Save</button>
<a href="/places">Cancel</a>
