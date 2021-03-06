export const peopleData = {
  totalCount: 82,
  people: [
    {
      name: "Luke Skywalker",
      birthYear: "19BBY",
      eyeColor: "blue",
      gender: "male",
      mass: 77,
      homeworld: { name: "Tatooine", terrains: ["desert"] },
      species: null,
    },
    {
      name: "C-3PO",
      birthYear: "112BBY",
      eyeColor: "yellow",
      gender: "n/a",
      mass: 75,
      homeworld: { name: "Tatooine", terrains: ["desert"] },
      species: { name: "Droid", homeworld: null },
    },
    {
      name: "R2-D2",
      birthYear: "33BBY",
      eyeColor: "red",
      gender: "n/a",
      mass: 32,
      homeworld: {
        name: "Naboo",
        terrains: ["grassy hills", "swamps", "forests", "mountains"],
      },
      species: { name: "Droid", homeworld: null },
    },
    {
      name: "Darth Vader",
      birthYear: "41.9BBY",
      eyeColor: "yellow",
      gender: "male",
      mass: 136,
      homeworld: { name: "Tatooine", terrains: ["desert"] },
      species: null,
    },
    {
      name: "Leia Organa",
      birthYear: "19BBY",
      eyeColor: "brown",
      gender: "female",
      mass: 49,
      homeworld: {
        name: "Alderaan",
        terrains: ["grasslands", "mountains"],
      },
      species: null,
    },
    {
      name: "Owen Lars",
      birthYear: "52BBY",
      eyeColor: "blue",
      gender: "male",
      mass: 120,
      homeworld: { name: "Tatooine", terrains: ["desert"] },
      species: null,
    },
    {
      name: "Beru Whitesun lars",
      birthYear: "47BBY",
      eyeColor: "blue",
      gender: "female",
      mass: 75,
      homeworld: { name: "Tatooine", terrains: ["desert"] },
      species: null,
    },
    {
      name: "R5-D4",
      birthYear: "unknown",
      eyeColor: "red",
      gender: "n/a",
      mass: 32,
      homeworld: { name: "Tatooine", terrains: ["desert"] },
      species: { name: "Droid", homeworld: null },
    },
    {
      name: "Biggs Darklighter",
      birthYear: "24BBY",
      eyeColor: "brown",
      gender: "male",
      mass: 84,
      homeworld: { name: "Tatooine", terrains: ["desert"] },
      species: null,
    },
    {
      name: "Obi-Wan Kenobi",
      birthYear: "57BBY",
      eyeColor: "blue-gray",
      gender: "male",
      mass: 77,
      homeworld: { name: "Stewjon", terrains: ["grass"] },
      species: null,
    },
    {
      name: "Anakin Skywalker",
      birthYear: "41.9BBY",
      eyeColor: "blue",
      gender: "male",
      mass: 84,
      homeworld: { name: "Tatooine", terrains: ["desert"] },
      species: null,
    },
    {
      name: "Wilhuff Tarkin",
      birthYear: "64BBY",
      eyeColor: "blue",
      gender: "male",
      mass: null,
      homeworld: { name: "Eriadu", terrains: ["cityscape"] },
      species: null,
    },
    {
      name: "Chewbacca",
      birthYear: "200BBY",
      eyeColor: "blue",
      gender: "male",
      mass: 112,
      homeworld: {
        name: "Kashyyyk",
        terrains: ["jungle", "forests", "lakes", "rivers"],
      },
      species: { name: "Wookie", homeworld: { name: "Kashyyyk" } },
    },
    {
      name: "Han Solo",
      birthYear: "29BBY",
      eyeColor: "brown",
      gender: "male",
      mass: 80,
      homeworld: {
        name: "Corellia",
        terrains: ["plains", "urban", "hills", "forests"],
      },
      species: null,
    },
    {
      name: "Greedo",
      birthYear: "44BBY",
      eyeColor: "black",
      gender: "male",
      mass: 74,
      homeworld: {
        name: "Rodia",
        terrains: ["jungles", "oceans", "urban", "swamps"],
      },
      species: { name: "Rodian", homeworld: { name: "Rodia" } },
    },
    {
      name: "Jabba Desilijic Tiure",
      birthYear: "600BBY",
      eyeColor: "orange",
      gender: "hermaphrodite",
      mass: 1358,
      homeworld: {
        name: "Nal Hutta",
        terrains: ["urban", "oceans", "swamps", "bogs"],
      },
      species: { name: "Hutt", homeworld: { name: "Nal Hutta" } },
    },
    {
      name: "Wedge Antilles",
      birthYear: "21BBY",
      eyeColor: "hazel",
      gender: "male",
      mass: 77,
      homeworld: {
        name: "Corellia",
        terrains: ["plains", "urban", "hills", "forests"],
      },
      species: null,
    },
    {
      name: "Jek Tono Porkins",
      birthYear: "unknown",
      eyeColor: "blue",
      gender: "male",
      mass: 110,
      homeworld: {
        name: "Bestine IV",
        terrains: ["rocky islands", "oceans"],
      },
      species: null,
    },
    {
      name: "Yoda",
      birthYear: "896BBY",
      eyeColor: "brown",
      gender: "male",
      mass: 17,
      homeworld: { name: "unknown", terrains: ["unknown"] },
      species: { name: "Yoda's species", homeworld: { name: "unknown" } },
    },
    {
      name: "Palpatine",
      birthYear: "82BBY",
      eyeColor: "yellow",
      gender: "male",
      mass: 75,
      homeworld: {
        name: "Naboo",
        terrains: ["grassy hills", "swamps", "forests", "mountains"],
      },
      species: null,
    },
  ],
};

const peopleQuery = `
  query AllPeople($first: Int, $last: Int) {
    allPeople(first: $first last: $last) {
      totalCount
      people {
        name
        birthYear
        eyeColor
        gender
        mass
        homeworld {
          name
          terrains  
        }
        species {
          name
          homeworld {
            name
          }
        }
      }
    }
  }
`;

export const graphQLSource = {
  url: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  body: peopleQuery,
  dataField: "allPeople.people",
  countField: "allPeople.totalCount",
};
