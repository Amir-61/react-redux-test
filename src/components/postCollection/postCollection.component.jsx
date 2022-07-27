import React, {useEffect, useState} from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { postsDataSelection, postsIsFetchingSelection, postsErrorSelection, postsCountSelection} from '../../redux/posts/post.selectors'
// import { connect } from 'react-redux'
import PostItem from '../postItem/postItem.component'
import { createStructuredSelector } from 'reselect'
import {fetchPostsStartAsync, fetchPostsCountAsync} from '../../redux/posts/posts.actions'
import Loading from '../loading/loading.component'

const PostCollection = () => {
  const dispatch = useDispatch()
  const posts = useSelector(postsDataSelection)
  const isLoading = useSelector(postsIsFetchingSelection)
  const postsCount = useSelector(postsCountSelection)
  const postsError = useSelector(postsErrorSelection)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    dispatch(fetchPostsCountAsync())
  }, [])

  useEffect(() => {
    const fetchData = async() =>{
      await dispatch(fetchPostsStartAsync(offset))
    }
    fetchData()
  }, [offset])

  const nextPage = () => {
    ((offset + 5) >= postsCount) ? setOffset(postsCount - 5): setOffset(offset + 5)
  }

  const previousPage = () => {
    setOffset((offset - 5) < 0 ? 0: offset - 5)
  }

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
      <Button onClick={previousPage} disabled={((offset-5) < 0)}>Previous</Button>
      <Button onClick={nextPage} disabled={(offset + 5) >= postsCount}>Next</Button>
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

