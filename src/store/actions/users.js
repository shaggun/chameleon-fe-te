import testdata from "../../api/testdata";
import * as actionTypes from "./actionTypes";
import { orderBy } from "lodash";

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
          const selectedUser = sortedUsers[0] ?? null;

          dispatch(selectUser(selectedUser));
      }
    })
    .catch((e) => {
      dispatch(fetchUsersFail(e));
    });
};
