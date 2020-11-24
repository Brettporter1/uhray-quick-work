import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://newscatcher.p.rapidapi.com/v1/search_free',
  params: { q: 'ISS', media: 'True', lang: 'en' },
  headers: {
    'x-rapidapi-key': '9691156362msh2815ce3e67997fep1470c8jsn5244af5bb496',
    'x-rapidapi-host': 'newscatcher.p.rapidapi.com',
  },
};

const getArticles = () => {
  return axios.request(options);
};

export { getArticles };
