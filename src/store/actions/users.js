import testdata from "../../api/testdata";
import * as actionTypes from "./actionTypes";
import { maxBy, sumBy, orderBy, filter } from "lodash";

const fetchUsersStart = () => {
  return {
    type: actionTypes.FETCH_USERS_START,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: actionTypes.FETCH_USERS_SUCCESS,
    users,
  };
};

const fetchUsersFail = (error) => {
  return {
    type: actionTypes.FETCH_USERS_FAIL,
    error: error,
  };
};

const setUsersSummary = (
  lastUserDate,
  totalTeamMembers,
  totalInvitedUsers,
  totalPublishedCampaigns
) => {
  return {
    type: actionTypes.SET_USERS_SUMMARY,
    lastUserDate,
    totalTeamMembers,
    totalInvitedUsers,
    totalPublishedCampaigns,
  };
};

export const selectUser = (selectedUser) => {
  return {
    type: actionTypes.SELECT_USER,
    selectedUser,
  };
};

export const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUsersStart());

  testdata
    .get()
    .then((response) => {
      if (response.data) {
        //In a full project there should be a dropdown to sort asc or desc
        const sortedUsers = orderBy(response.data, ["created_at"], ["asc"]);

        dispatch(fetchUsersSuccess(sortedUsers));

        //Selecting the first user from the list
        const selectedUser = sortedUsers.length > 0 ? sortedUsers[0] : null;

        dispatch(selectUser(selectedUser));

        const totalTeamMembers = filter(response.data, function (o) {
          return o.style === "member";
        });

        const lastUserDate = maxBy(response.data, function (o) {
          return o.created_at;
        });

        const totalInvitedUsers = sumBy(response.data, function (o) {
          return o.stats.invited_users_count;
        });

        const totalPublishedCampaigns = sumBy(response.data, function (o) {
          return o.stats.published_campaigns_count;
        });

        dispatch(
          setUsersSummary(
            lastUserDate.created_at,
            totalTeamMembers.length,
            totalInvitedUsers,
            totalPublishedCampaigns
          )
        );
      }
    })
    .catch((e) => {
      dispatch(fetchUsersFail(e));
    });
};
