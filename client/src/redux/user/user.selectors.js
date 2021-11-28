import {createSelector} from "reselect";

// return user object
const selectUser = state => state.user;
//return currentUser
export const selectCurrentUser = createSelector([selectUser],
  (user) => user.currentUser
)