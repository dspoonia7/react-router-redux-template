import { UPDATE_NAME } from '../constants'

const initialState = {
  name: 'Ms'
}

export default function update(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.data,
      }
    default:
      return state;
  }
}
