import {UserActionTypes} from "./user.types";

// action function takes a parameter
export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
})