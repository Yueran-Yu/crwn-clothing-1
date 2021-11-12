import {createSelector} from 'reselect';

// return directory object
const selectDirectory = state => state.directory

export const selectDirectorySections = createSelector([selectDirectory],
  directory=>directory.sections
)

