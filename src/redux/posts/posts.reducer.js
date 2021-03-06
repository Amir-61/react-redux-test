import {postActionTypes} from './posts.actionTypes'

const INITIAL_STATE = {
  collections: [],
  isFetchLoading: undefined,
  error: undefined
}

const postsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case postActionTypes.FETCH_POSTS_START:
      return {
        ...state,
        isFetchLoading: true
      }
    case postActionTypes.FETCH_POSTS_FAILURE:
      return {
        ...state,
        isFetchLoading: false,
        error: action.payload
      }
    case postActionTypes.FETCH_POSTS_SUCCESS:
        return {
          ...state,
          isFetchLoading: false,
          error: undefined,
          collections: action.payload
        }
    default:
      return state
  }
}

export default postsReducer
