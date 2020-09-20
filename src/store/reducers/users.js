import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: true,
  error: null,
  lastUserDate: null,
  totalTeamMembers: 0,
  totalInvitedUsers: 0,
  totalPublishedCampaigns: 0,
  users: [],
};

const fetchUsersStart = (state, action) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

const fetchUsersSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    error: null,
    users: action.users,
  };
};

const fetchUsersFail = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_START:
      return fetchUsersStart(state, action);
    case actionTypes.FETCH_USERS_SUCCESS:
      return fetchUsersSuccess(state, action);
    case actionTypes.FETCH_USERS_FAIL:
      return fetchUsersFail(state, action);
    default:
      return state;
  }
};

export default reducer;
