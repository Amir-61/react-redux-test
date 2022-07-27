import {postActionTypes} from './posts.actionTypes';

export const fetchPostStart = () => ({
  type: postActionTypes.FETCH_POSTS_START
})

export const fetchPostCountStart = () => ({
  type: postActionTypes.FETCH_POSTS_COUNT_START
})


export const fetchPostsSuccess = (postsObj) => ({
  type: postActionTypes.FETCH_POSTS_SUCCESS,
  payload: postsObj
})

export const fetchPostsCountSuccess = (postsLength) => ({
  type: postActionTypes.FETCH_POSTS_COUNT_SUCCESS,
  payload: postsLength
})

export const fetchPostsFailure = (errorObj) => ({
  type: postActionTypes.FETCH_POSTS_FAILURE,
  payload: errorObj,
})

export const fetchPostsCountFailure = (errorObj) => ({
  type: postActionTypes.fetchPostsCountFailure,
  payload: errorObj,
})

export const fetchPostsStartAsync = (offset) => {
  return dispatch => {
    dispatch(fetchPostCountStart())
      fetch(`https://jsonplaceholder.typicode.com/posts?_start=${offset}&_limit=5`)
      .then(res => res.json())
      .then(
        (result) => {
          dispatch(fetchPostsSuccess(result))
        },
        (error) => {
          dispatch(fetchPostsFailure(error))
        }
    )
}}

export const fetchPostsCountAsync = () => {
  return dispatch => {
    dispatch(fetchPostCountStart())
      fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => res.json())
      .then(
        (result) => {
          dispatch(fetchPostsCountSuccess(result.length))
        },
        (error) => {
          dispatch(fetchPostsCountFailure(error))
        }
    )
}}
