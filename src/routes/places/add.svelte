<script>
  import { onMount } from "svelte";
  import { goto } from '@sapper/app';
  import InputBlock from '../../components/InputBlock.svelte';
  import { savePlace } from "../../utils/mintAPI";

  const place = {}

  async function saveHandler() {
    await savePlace(place)

    await goto('/places');
	}
</script>
<style>
  .layout {
    display: grid;
    grid-template-columns: 1fr 250px;
  }
  .inputs {
    background: #ffe8cb;
    padding: 1em 2em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-end: 10px;
  }
  .actions {
    display: grid;
    background: #e7ffff;
    grid-auto-flow: row;
    padding: 1em 2em;
    grid-template-rows: 2em 2em;
  }
</style>
<div class="layout">
  <div class="inputs">
    <InputBlock>
      <span slot="label">
        Nombre:
      </span>
      <span slot="input">
        <input bind:value={place.name} >
      </span>
    </InputBlock>

    <InputBlock>
      <span slot="label">
        Descripción:
      </span>
      <span slot="input">
        <input bind:value={place.description} >
      </span>
    </InputBlock>

    <InputBlock>
      <span slot="label">
        Perfil:
      </span>
      <span slot="input">
        <input bind:value={place.profile} >
      </span>
    </InputBlock>

    <InputBlock>
      <span slot="label">
        Dirección:
      </span>
      <span slot="input">
        <input bind:value={place.address} >
      </span>
    </InputBlock>

    <InputBlock>
      <span slot="label">
        Dirección Google Maps:
      </span>
      <span slot="input">
        <input bind:value={place.gmaps} >
      </span>
    </InputBlock>

    <InputBlock>
      <span slot="label">
        Teléfono(s):
      </span>
      <span slot="input">
        <input bind:value={place.phone} >
      </span>
    </InputBlock>

    <InputBlock>
      <span slot="label">
        Servicios gratuitos:
      </span>
      <span slot="input">
        <input bind:value={place.servicesFree} >
      </span>
    </InputBlock>

    <InputBlock>
      <span slot="label">
        Servicios con cuota de recuperación:
      </span>
      <span slot="input">
        <input bind:value={place.servicesNonFree} >
      </span>
    </InputBlock>

    <InputBlock>
      <span slot="label">
        Fotografía(s):
      </span>
      <span slot="input">
        <input bind:value={place.img} >
      </span>
    </InputBlock>


    <InputBlock>
      <span slot="label">
        Sitio Web:
      </span>
      <span slot="input">
        <input bind:value={place.website} >
      </span>
    </InputBlock>

    <InputBlock>
      <span slot="label">
        Redes sociales:
      </span>
      <span slot="input">
        <input bind:value={place.socialNetwork} >
      </span>
    </InputBlock>

    <InputBlock>
      <span slot="label">
        Director(a):
      </span>
      <span slot="input">
        <input bind:value={place.ceo} >
      </span>
    </InputBlock>

    <InputBlock>
      <span slot="label">
        Responsable:
      </span>
      <span slot="input">
        <input bind:value={place.owner} >
      </span>
    </InputBlock>

    <InputBlock>
      <span slot="label">
        Idiomas:
      </span>
      <span slot="input">
        <input bind:value={place.language} >
      </span>
    </InputBlock>

    <InputBlock>
      <span slot="label">
        Horario de atención:
      </span>
      <span slot="input">
        <input bind:value={place.schedule} >
      </span>
    </InputBlock>

    <InputBlock>
      <span slot="label">
        Capacidad:
      </span>
      <span slot="input">
        <input bind:value={place.capacity} >
      </span>
    </InputBlock>

    <InputBlock>
      <span slot="label">
        Población actual:
      </span>
      <span slot="input">
        <input bind:value={place.population} >
      </span>
    </InputBlock>

    <InputBlock>
      <span slot="label">
        Categoría:
      </span>
      <span slot="input">
        <input bind:value={place.category} >
      </span>
    </InputBlock>
  </div>
  <div class="actions">
    <button on:click={saveHandler}>Save</button>
    <a href="/places">Cancel</a>
  </div>
</div>
