const axios = require("axios");
const planets = require("../src/planets.js");

test("use axios directly in test", async () => {
  const resp = await axios.get("https://swapi.co/api/planets/1/");
  expect(resp.status).toBe(200);
  expect(resp.data.name).toBe("Tatooine");
});

test("or maybe abstract out axios", async () => {
  const data = await planets.get(1);
  expect(data.name).toBe("Tatooine");
});

test("this one should not exist", async () => {
  const data = await planets.get("planetbob");
  expect(data.detail).toBe("Not found");
});
