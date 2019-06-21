/*
  Be sure to import in all of the action types from `../actions`
*/
import { ADD_SMURF, GET_SMURFS, FETCH_FAILED, GET_SMURFS_SUCCESS, ADD_SMURF_SUCCESS } from "../actions";

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
  //  updatingSmurf: false,
  //  deletingSmurf: false,
   error: null,
 }

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SMURF_SUCCESS:
      return { ...state, smurfs: state.smurfs.concat(action.payload), addingSmurf: false };

    case GET_SMURFS_SUCCESS:
      return { ...state, smurfs: action.payload, fetchingSmurfs: false };

    case GET_SMURFS:
      return { ...state, fetchingSmurfs: true };
    
    case ADD_SMURF:
      return { ...state, addingSmurf: true };
    
    case FETCH_FAILED:
      return { ...state, addingSmurf: false, fetchingSmurfs: false, error: action.payload };

    default:
      return state;
  }
}