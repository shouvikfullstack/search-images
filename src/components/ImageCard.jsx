import React from 'react'
import { Card } from 'react-bootstrap'
import { getImageUrl } from '../utils/imageUtil'
import PropTypes from 'prop-types'

const ImageCard = ({ image, handleShow }) => {
  const imageUrl = getImageUrl(image)
  return (
    <Card style={{ width: '18rem' }} onClick={() => handleShow(imageUrl)} >
      <Card.Img variant="top" src={imageUrl} style={{ height: '400px', width: '400px' }}/>
    </Card>
  )
}

ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
  handleShow: PropTypes.func.isRequired
}

export default ImageCard
