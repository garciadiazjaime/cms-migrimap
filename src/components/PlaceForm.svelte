<script>
  import { onMount } from "svelte";
  import { stores, goto } from '@sapper/app';
  import { getPlaces, savePlace } from "../utils/mintAPI";
  import InputBlock from './InputBlock.svelte';
  
  const { preloading, page, session } = stores(); 
  const { params } = $page;

  let place = {}

  onMount(async () => {
    const response = params.id && await getPlaces(params.id);

    if (Array.isArray(response) && response.length) {
      place = response[0]
    }
	});

  async function saveHandler() {
    await savePlace(place, params.id)

    await goto('/places');
	}
</script>

<style>
  .layout {
    display: grid;
    grid-template-columns: 1fr 250px;
    border-radius: 4px;
    overflow: hidden;
  }
  h1 {
    color: #fff;
    text-align: center;
  }
  .inputs {
    color: white;
    background: #696A6D;
    padding: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
  }
  .inputs span {
    display: block;
  }
  .actions {
    background: #8a8b8f;
    padding: 30px;
  }
  input {
    border: none;
    border-radius: 4px;
    padding: 5px 8px;
    display: block;
    width: 100%;
    box-sizing: border-box;
  }
  .btn-primary {
    background-color: #f69571;
    border: none;
    margin-bottom: 10px;
    width: 100%;
    display: block;
    border-radius: 4px;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    color: white;
    font-size: 18px;
    font-weight: 500;
    line-height: 1;
    padding: 12px 0;
    text-align: center;
    text-decoration: none;
    transition: box-shadow .28s cubic-bezier(.4,0,.2,1);
  }
  .btn-primary:hover {
    color: #fff;
  }
  .btn-primary:focus {
    outline: none;
  }
  a {
    display: block;
    padding: 10px;
    color: white;
  }
</style>
<h1>Crear perfil</h1>
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
    <button class="btn-primary" on:click={saveHandler}>Save</button>
    <a class="" href="/places">Cancel</a>
  </div>
</div>