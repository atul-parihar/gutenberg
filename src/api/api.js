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

  // Filtering out zip files
  const filteredResults = res.data.results.filter(
    (book) => book.mime_type !== 'application/zip'
  );

  return { ...res.data, results: filteredResults };
};
