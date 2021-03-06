import {createSelector} from 'reselect'

const postsSelector = (state) => state.posts;

export const postsDataSelection = createSelector(
  [postsSelector],
  (posts) => posts.collections
)

export const postsIsFetchingSelection = createSelector(
  [postsSelector],
  (posts) => posts.isFetchLoading
)

export const postsErrorSelection = createSelector(
  [postsSelector],
  (posts) => posts.error
)
