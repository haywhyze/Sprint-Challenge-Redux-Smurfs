import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const GET_SMURFS = 'GET_SMURFS';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';

export const addSmurf = () => {
  return {
    type: ADD_SMURF
  }
}

export const addSmurfSuccess = smurf => {
  return {
    type: ADD_SMURF_SUCCESS,
    payload: smurf
  }
}

export const getSmurfs = () => {
  return {
    type: GET_SMURFS
  }
}

export const getSmurfSuccess = smurfs => {
  return {
    type: GET_SMURFS_SUCCESS,
    payload: smurfs
  }
}

export const fetchFailed = error => {
  return {
    type: FETCH_FAILED,
    payload: error,
  }
}

export const fetchSmurfs = () => dispatch => {
  dispatch(getSmurfs())
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch(getSmurfSuccess(res.data));
    })
    .catch(error => {
      dispatch(fetchFailed(error.message));
    });
};

export const addOneSmurf = (smurf) => dispatch => {
  dispatch(addSmurf())
  axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      dispatch(addSmurfSuccess(res.data));
    })
    .catch(error => {
      dispatch(fetchFailed(error.message));
    });
};
