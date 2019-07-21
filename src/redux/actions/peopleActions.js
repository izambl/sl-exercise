import * as services from '../../services/salesloft/api';
import {
  GET_PEOPLE_REQUEST, GET_PEOPLE_SUCCESS, GET_PEOPLE_FAILURE,
} from './peopleActionTypes';

export function loadPeople() {
  return (dispatch) => {
    dispatch({ type: GET_PEOPLE_REQUEST });

    services.getPeople()
      .then((response) => {
        dispatch({ type: GET_PEOPLE_SUCCESS, people: response.data });
      })
      .catch(() => dispatch({ type: GET_PEOPLE_FAILURE, error: 'unknown error' }));
  };
}

export default loadPeople;
