import client from '../authClient';

export const getPeople = () => client.get('/people');

export default getPeople;
