import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import LatestWorks from '../components/LatestWorks';
import Spinner from '../components/Spinner';
import * as Collections from '/lib/collections'
import {composeWithTracker} from 'react-komposer';

//first, create the React-komposer Meteor container...
export const onPropsChange = (props, onData) => {
  if(Meteor.subscribe('projects').ready()) {
    const projects = Collections.Projects.find({}, {sort:{priority:-1, createdAt:-1}}).fetch();
    onData(null, {projects});
  }
};

const MeteorContainer = composeWithTracker(onPropsChange, Spinner)(LatestWorks);

//wrap the Meteor container into a Redux container, to get access to dispatch
function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MeteorContainer)
