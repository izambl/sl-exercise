// API key should be retrieved from another service letting the user to authenticate
export const initialState = {
  apiKey: process.env.API_KEY, // User api key
};

export default (state = initialState) => ({ ...state });
