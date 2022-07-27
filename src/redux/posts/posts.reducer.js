import {postActionTypes} from './posts.actionTypes'

const INITIAL_STATE = {
  collections: [],
  count: undefined,
  isFetchLoading: undefined,
  isFetchCountLoading: undefined,
  error: undefined,
  CountError: undefined
}

const postsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case postActionTypes.FETCH_POSTS_START:
      return {
        ...state,
        isFetchLoading: true
      }
    case postActionTypes.FETCH_POSTS_COUNT_START:
      return {
        ...state,
        isFetchCountLoading: true
      }
    case postActionTypes.FETCH_POSTS_FAILURE:
      return {
        ...state,
        isFetchLoading: false,
        error: action.payload
      }
    case postActionTypes.FETCH_POSTS_COUNT_FAILURE:
      return {
        ...state,
        isFetchCountLoading: false,
        CountError: action.payload
      }

    case postActionTypes.FETCH_POSTS_COUNT_SUCCESS:
        return {
          ...state,
          isFetchCountLoading: false,
          CountError: undefined,
          count: action.payload
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
