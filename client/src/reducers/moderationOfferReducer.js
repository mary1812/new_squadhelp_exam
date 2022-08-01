import ACTION from '../actions/actionTypes';

const initialState = {
  isFetching: true,
  error: null,
  data: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION.SET_OFFER_STATUS_BY_MODERATOR_ACTION_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null
      }
    }
    case ACTION.SET_OFFER_STATUS_BY_MODERATOR_ACTION_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        data: [...state.data, action.data]
      }
    }
    case ACTION.SET_OFFER_STATUS_BY_MODERATOR_ACTION_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
      }
    case ACTION.CLEAR_STORE: {
      return {
        ...initialState
      }
    }
    default:
      return state;
  }
}