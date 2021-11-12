import React from 'react';
import {DirectoryWrapper} from "./directory.style";
import MenuItem from "../menu-item/menu-item.component";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectDirectorySections} from "../../redux/directory/dirctory.selector";

const Directory = ({sections}) => (
  <DirectoryWrapper>
    {sections.map(({id, ...otherSectionProps}) => {
      return <MenuItem key={id} {...otherSectionProps}/>
    })}
  </DirectoryWrapper>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);