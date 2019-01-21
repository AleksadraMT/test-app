import {
  CHANGE_HEADER,
} from '../constants/ActionTypes';

const initialState = {
    back: false,
    title: 'Sayer',
    subtitle: 'World’s most used time waster',
    page: false,
}

export default function header(state = initialState, action) {
  switch(action.type) {
    case CHANGE_HEADER:
    return Object.assign({}, state, action.header);

    default:
    return state;
  }
}