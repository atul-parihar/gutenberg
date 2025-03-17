import axios from 'axios';

const BASE_URL = 'http://skunkworks.ignitesol.com:8000/books';

export const fetchBooks = async ({ pageParam = 1, search = '', topic = '' }) => {
  const res = await axios.get(BASE_URL, {
    params: {
      search,
      topic,
      mime_type: 'image',
      page: pageParam,
    },
  });
  return res.data;
};
