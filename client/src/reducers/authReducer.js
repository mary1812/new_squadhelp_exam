import ACTION from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  error: null,
  data: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION.AUTH_ACTION_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION.AUTH_ACTION_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        data: action.data
      };
    }
    case ACTION.AUTH_ACTION_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }
    case ACTION.AUTH_ACTION_CLEAR_ERROR: {
      return {
        ...state,
        error: null,
      };
    }
    case ACTION.AUTH_ACTION_CLEAR: {
      return {...initialState};
    }
    case ACTION.GET_USER_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
        data: null,
      };
    }
    case ACTION.GET_USER_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        data: action.data,
      };
    }
    case ACTION.GET_USER_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
        data: null,
      };
    }
    case ACTION.CLEAR_STORE: {
      return {...initialState};
    }
    case ACTION.UPDATE_USER_DATA_SUCCESS: {
      return {
        ...state,
        data: { ...state.data, ...action.data },
        error: null,
      };
    }
    case ACTION.UPDATE_USER_DATA_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case ACTION.CLEAR_USER_ERROR: {
      return {
        ...state,
        error: null,
      };
    }
    default:
      return state;
  }
}
