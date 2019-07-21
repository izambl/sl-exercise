import client from '../authClient';

import data from '../data.json';

// export const getPeople = () => client.get('/people.json');

export const getPeople = () => {
  return Promise.resolve(data);
};

export default getPeople;
