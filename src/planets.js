const axios = require("axios");

async function get(id) {
  try {
    const resp = await axios.get(`https://swapi.co/api/planets/${id}/`);
    return resp.data;
  } catch (error) {
    return error.response.data;
  }
}

module.exports = { get };
