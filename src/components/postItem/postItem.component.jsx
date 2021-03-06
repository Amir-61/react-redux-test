import React from 'react'
import {Card} from 'react-bootstrap';
import './postItem.styles.scss'

const PostItem = ({id, title, body}) => (
<div className='post-item'>
  <Card border="primary">
    <Card.Header>
      {id}
    </Card.Header>
    <Card.Body>
      <Card.Title>
        {title}
      </Card.Title>
      <Card.Text>
        {body}
      </Card.Text>
    </Card.Body>
  </Card>
</div>)

export default PostItem
