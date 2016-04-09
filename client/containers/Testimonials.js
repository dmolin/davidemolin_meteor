import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Testimonials from '../components/Testimonials';
import Spinner from '../components/Spinner';
import * as Collections from '/lib/collections'
import {composeWithTracker} from 'react-komposer';

//first, create the React-komposer Meteor container...
export const onPropsChange = (props, onData) => {
  if(Meteor.subscribe('testimonials').ready()) {
    const testimonials = Collections.Testimonials.find({},{sort:{at:-1}}).fetch();
    onData(null, {testimonials});
  }
};

const MeteorContainer = composeWithTracker(onPropsChange, Spinner)(Testimonials);

//wrap the Meteor container into a Redux container, to get access to dispatch
function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MeteorContainer)