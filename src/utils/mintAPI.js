function getPlacesQuery(id = '' ) {
  return `
    {
      migriPlace(id: "${id}") {
        _id
        name
        description
        profile
        address
        gmaps
        phone
        servicesFree
        servicesNonFree
        website
        socialNetwork
        ceo
        owner
        language
        schedule
        capacity
        population
        category
        imageUrl
        imageId
        gps {
          coordinates
        }
      }
    }
  `
}

async function requestHelper(payload) {
  const result = await fetch(
    `process.API_URL/graphiql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }
  );

  return await result.json()
}

async function getPlaces(id) {
  const payload = {
    query: getPlacesQuery(id)
  };

  const {
    data: { migriPlace }
  } = await requestHelper(payload)

  return migriPlace;
}

async function savePlace(profile, id) {
  const payload = {
    query: `mutation Mutation(
      $id: String,
      $name: String!,
      $description: String,
      $profile: String,
      $address: String,
      $gmaps: String,
      $phone: String,
      $servicesFree: String,
      $servicesNonFree: String,
      $website: String,
      $socialNetwork: String,
      $ceo: String,
      $owner: String,
      $language: String,
      $schedule: String,
      $capacity: String,
      $population: String,
      $category: String,
      $gps: GPSInputTypeMigrimap,
    ) {
      addMigriPlace(
        id: $id,
        name: $name,
        description: $description,
        profile: $profile,
        address: $address,
        gmaps: $gmaps,
        phone: $phone,
        servicesFree: $servicesFree,
        servicesNonFree: $servicesNonFree,
        website: $website,
        socialNetwork: $socialNetwork,
        ceo: $ceo,
        owner: $owner,
        language: $language,
        schedule: $schedule,
        capacity: $capacity,
        population: $population,
        category: $category,
        gps: $gps,
      )
    }`,
    variables: {
      id,
      ...profile
    }
  };

  return await requestHelper(payload);
}

async function saveImage(formData, path) {
  const result = await fetch(
    `process.API_URL/image${path}`,
    {
      method: "POST",
      body: formData
    }
  );

  return await result.json()
}

async function deletePlace(id) {
  const payload = {
    query: `mutation Mutation(
      $id: String,
    ) {
      deleteMigriPlace(
        id: $id,
      )
    }`,
    variables: {
      id,
    },
  };

  await requestHelper(payload);
}

export {
  getPlaces,
  savePlace,
  saveImage,
  deletePlace,
} 
