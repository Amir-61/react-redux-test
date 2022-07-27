import React, {useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { postsDataSelection, postsIsFetchingSelection, postsErrorSelection} from '../../redux/posts/post.selectors'
// import { connect } from 'react-redux'
import PostItem from '../postItem/postItem.component'
import { createStructuredSelector } from 'reselect'
import {fetchPostsStartAsync} from '../../redux/posts/posts.actions'
import Loading from '../loading/loading.component'


const PostCollection = () => {
  const dispatch = useDispatch()
  const posts = useSelector(postsDataSelection)
  const isLoading = useSelector(postsIsFetchingSelection)
  const postsError = useSelector(postsErrorSelection)


  useEffect(() => {
    dispatch(fetchPostsStartAsync())
  }, [])

  if(isLoading) return <Loading />
  return(
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          {Array.isArray(posts) && posts.length > 0 && posts.map((post) => (
            <div key={post.id}>
              <PostItem {...post}></PostItem>
            </div>
          ))}
          </Col>
      </Row>
    </Container>
  )
}

export default PostCollection

// another approach using mapStateToPropes and mapDispatchToProps

// const mapStateToProps = createStructuredSelector({
//   posts: postsDataSelection,
//   isLoading: postsIsFetchingSelection,
//   error: postsErrorSelection
// })

// const mapDispatchToProps = (dispatch) => ({
//   fetchPostsStartAsync: () => dispatch(fetchPostsStartAsync())
// });


// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PostCollection);

