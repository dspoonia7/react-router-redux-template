import { INCREASE, DECREASE } from '../constants'

const initialState = {
  text: ''
}

export default function update(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return {
        ...state,
        text: action.data,
      }
    default:
      return state;
  }
}
