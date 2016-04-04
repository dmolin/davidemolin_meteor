import {JUMBOTRON_SLIDE} from '../actions/jumbotron-actions'

export const initialState = {
  activeIndex: 0,
  highestIndex: 0
}

export default function(state = initialState, action) {
  const {activeIndex, highestIndex, type} = action;
  
  switch(type) {
    case JUMBOTRON_SLIDE:
      return Object.assign({}, state, {activeIndex: activeIndex, highestIndex:(activeIndex > highestIndex ? activeIndex : highestIndex) })
    default:
      return state
  }
}