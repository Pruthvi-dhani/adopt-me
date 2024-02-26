import Pet from "./Pet";

const Results = (pets) => {
  pets = pets.pets;
  // console.log("cdscsdcds: ", pets.length, Array.isArray(pets), pets);
  // return {};
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            location={`${pet.city}, ${pet.state}`}
            images={pet.images}
            id={pet.id}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
