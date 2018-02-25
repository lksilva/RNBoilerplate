import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/Types';

const initialState = { counter: 0 }

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return Object.assign({}, state, {
        counter: state.counter + 1
      })
    case DECREMENT_COUNTER:
      return Object.assign({}, state, {
        counter: state.counter - 1
      })
    default:
      return state
  }
}
