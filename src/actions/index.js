import * as types from '../constants/ActionTypes'

export const addTopic = text => ({ type: types.ADD_TOPIC, text })
export const removeTopic = id => ({ type: types.REMOVE_TOPIC, id })
export const addComment = (id, text) => ({ type: types.ADD_COMMENT, id, text})
export const changeHeader = header => ({ type: types.CHANGE_HEADER, header })