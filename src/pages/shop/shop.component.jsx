import React from 'react';
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = () => (
  <div>
    {/*we will render nested route  here
    one route will lead us to the collection overview when we are only on shop
    another route will render our new category page which we build when we land on our /shop/:category */}
    <CollectionsOverview/>
  </div>
)

export default ShopPage;