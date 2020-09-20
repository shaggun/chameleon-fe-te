import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: true,
  error: null,
  lastUserDate: null,
  totalTeamMembers: 0,
  totalInvitedUsers: 0,
  totalPublishedCampaigns: 0,
  users: [],
  selectedUser: null,
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

const setUsersSummary = (state, action) => {
  return {
    ...state,
    lastUserDate: action.lastUserDate,
    totalTeamMembers: action.totalTeamMembers,
    totalInvitedUsers: action.totalInvitedUsers,
    totalPublishedCampaigns: action.totalPublishedCampaigns,
  };
};

const selectUSer = (state, action) => {
  return {
    ...state,
    selectedUser: action.selectedUser,
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
    case actionTypes.SET_USERS_SUMMARY:
      return setUsersSummary(state, action);
    case actionTypes.SELECT_USER:
      return selectUSer(state, action);
    default:
      return state;
  }
};

export default reducer;
