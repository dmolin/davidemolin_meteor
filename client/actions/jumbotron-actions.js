//action creators that use redux-thunk. they don't return action objects, but action functions
export const JUMBOTRON_SLIDE = 'JUMBOTRON_SLIDE';
export function slideTo(activeIndex) {
  return {
    type: JUMBOTRON_SLIDE,
    activeIndex
  }
}