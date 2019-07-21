import client from '../authClient';

export const getPeople = () => client.get('/people.json');

export default getPeople;
