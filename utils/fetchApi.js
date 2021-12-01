import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export async function fetchApi(url) {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "a7dc88c1b0msh86f1dcafa83e0dep1abbbcjsn1a9238d43fc4",
    },
  });

  return data;
}
