import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://newscatcher.p.rapidapi.com/v1/search_free',
  params: { q: 'ISS', media: 'True', lang: 'en' },
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_API_KEY,
    'x-rapidapi-host': 'newscatcher.p.rapidapi.com',
  },
};

const getArticles = () => {
  return axios.request(options);
};

export { getArticles };
