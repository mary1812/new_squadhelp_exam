import ACTION from '../actions/actionTypes';
import CONSTANTS from '../constants';

const initialState = {
  isFetching: true,
  error: null,
  offers: [],
  haveMore: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION.GET_OFFERS_FOR_MODERATOR_ACTION_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION.GET_OFFERS_FOR_MODERATOR_ACTION_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        offers: [...state.offers, ...action.data],
        haveMore: action.data.haveMore,
      };
    }
    case ACTION.GET_OFFERS_FOR_MODERATOR_ACTION_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
        offers: [],
      };
    }
      
    case ACTION.CLEAR_STORE: {
      return {...initialState};
    }
    default:
      return state;
  }
}
