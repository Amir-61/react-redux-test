import React, {useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap';

import PostItem from '../postItem/postItem.component'

const PostCollection = ({posts, fetchPostsStartAsync, isLoading}) => {
  useEffect(() => {
    if(isLoading === undefined) {
      fetchPostsStartAsync()
    }
  }, [isLoading, fetchPostsStartAsync])

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
