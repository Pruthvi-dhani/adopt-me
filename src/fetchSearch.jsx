async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];
  const apiResponse = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  if (!apiResponse.ok) {
    throw new Error(
      `?animal=${animal}&location=${location}&breed=${breed} doesn't exist`
    );
  }
  return apiResponse.json();
}

export default fetchSearch;
