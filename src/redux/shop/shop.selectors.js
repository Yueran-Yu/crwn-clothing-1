import {createSelector} from "reselect";
import memoize from 'lodash.memoize';

const selectShop = state => state.shop

export const selectShopCollections = createSelector([selectShop],
  shop => shop.collections
)

// before convert an object into an array


export const selectCollection = memoize(collectionUrlParam => createSelector([selectShopCollections],
  collections => collections[collectionUrlParam])
)
