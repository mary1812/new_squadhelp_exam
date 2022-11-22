import ACTION from '../actions/actionTypes';

const initialState = {
  isFetching: true,
  error: null,
  offers: [],
  haveMore: true,
  count: 0
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
        offers: [...action.data.offers],
        count: action.data.count,
        haveMore: action.data.haveMore,
      };
    }
    case ACTION.GET_OFFERS_FOR_MODERATOR_ACTION_ERROR: {
      return {
        ...state,
        count: 0,
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
