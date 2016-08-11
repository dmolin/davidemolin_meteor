import {JUMBOTRON_SLIDE} from '../actions/jumbotron-actions'

/**
 *  highestIndex is used to implement a basic lazy loading mechanism.
 *  It represent the highest index of a visited slide (and, by extension, how many of them we already loaded)
 *  When rendering out the Jumbotron, we'll load the images of the slide indexes <= highestIndex, while the others
 *  will not be loaded yet, to save bandwidth and improve performances
 **/
export const initialState = {
  activeIndex: 0,
  highestIndex: 0
}

export default function(state = initialState, action) {
  const {activeIndex, type} = action;
  
  switch(type) {
    case JUMBOTRON_SLIDE:
      return Object.assign({}, state, {activeIndex: activeIndex, highestIndex:(activeIndex > state.highestIndex ? activeIndex : state.highestIndex) })
    default:
      return state
  }
}
