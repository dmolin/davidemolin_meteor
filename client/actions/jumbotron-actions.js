import * as Collections from '../../lib/collections'

/**
 export default {
  slideTo(activeIndex) {
    //keep track of the highest slide index ever selected. this is only to ensure we are preloading images
    //and keeping them in cache (without using the default background again for those images, once loaded)
    let highestIndex = LocalState.get('JUMBOTRON_HIGHEST_ACTIVE_INDEX');
    return LocalState.set({
      'JUMBOTRON_CURRENT_INDEX': activeIndex,
      'JUMBOTRON_HIGHEST_ACTIVE_INDEX': activeIndex > highestIndex ? activeIndex : highestIndex
    });
  }
}*/

//action creators that use redux-thunk. they don't return action objects, but action functions
export const JUMBOTRON_SLIDE = 'JUMBOTRON_SLIDE';
export function slideTo(activeIndex, highestIndex) {
  return {
    type: JUMBOTRON_SLIDE,
    activeIndex,
    highestIndex
  }
}