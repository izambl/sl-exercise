import {
  GET_PEOPLE_REQUEST,
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE_FAILURE,
} from '../actions/peopleActionTypes';

export const initialState = {
  people: [], // Array of loaded people objects
  loading: false, // True when people is being loaded
  lastError: null, // Last server error, if any, is stored here
};

function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PEOPLE_REQUEST:
      return { ...state, lastError: null, loading: true };
    case GET_PEOPLE_SUCCESS:
      return {
        ...state,
        lastEror: null,
        loading: false,
        people: action.people,
      };
    case GET_PEOPLE_FAILURE:
      return { ...state, loading: false, lastError: action.error };
    default:
      return state;
  }
}

export default peopleReducer;
