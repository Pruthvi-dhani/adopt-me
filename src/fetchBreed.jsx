const fetchBreed = async ({ queryKey }) => {
  // console.log("poojknkjnk", queryKey);
  const animal = queryKey[1];
  if (!animal) {
    return [];
  }
  const apiResponse = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!apiResponse.ok) {
    throw new Error(`breeds?animal=${animal} not working`);
  }

  return apiResponse.json();
};

export default fetchBreed;
