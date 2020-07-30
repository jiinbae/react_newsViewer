import axios from 'axios';

export const getPost = id => {
    axios.get(
        `https://newsapi.org/v2/top-headlines?${countryQuery}${query}`,
        {
          headers: {
            'x-api-key': '0106e2c7f2e94c57bfb33b63b97f2a60',
          },
        },
      )}