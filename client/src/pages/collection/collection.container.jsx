import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionsLoaded} from "../../redux/shop/shop.selectors";
import CollectionPage from "./collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import {compose} from "redux";

const mapStateToProps = createStructuredSelector({
  // here is a function
  isLoading: state => !selectIsCollectionsLoaded(state)
})

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage)

export default CollectionPageContainer;
// notice how containers don't render anything. they just pass props down to components
// Although this results in more files it helps keeping concerns separate to each specific 'Component'
