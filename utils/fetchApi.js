import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export async function fetchApi(url) {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": process.env.API_KEY,
    },
  });

  return data;
}
