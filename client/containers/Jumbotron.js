import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {slideTo} from '../actions/jumbotron-actions'
import {createContainer} from 'meteor/react-meteor-data'
import * as Collections from '/lib/collections'
import Spinner from '../components/Spinner'

import Jumbotron from '../components/Jumbotron.js'

import {composeWithTracker} from 'react-komposer';

export const onPropsChange = (props, onData) => {
  console.log("props", props);
  if(Meteor.subscribe('projects.featured').ready()) {
    const projects = Collections.FeaturedProjects.find({}, {sort:{priority:-1, createdAt:-1}}).fetch() || [];
    console.log("subscription ready. projects", projects)
    onData(null, Object.assign({}, props, {projects}));
  }
};

const Container = composeWithTracker(onPropsChange)(Jumbotron, Spinner);

function mapStateToProps(state) {
  return {
    ...state.jumbotron
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    slideTo
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
