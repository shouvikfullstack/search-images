import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ImageCard from './ImageCard'
import ImageModal from './ImageModal'
import PropTypes from 'prop-types'

const ImageList = ({ images }) => {
  const [showModal, setShowModal] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

  const handleClose = () => setShowModal(false)
  const handleShow = (imageUrl) => {
    setImageUrl(imageUrl)
    setShowModal(true)
  }

  return (
    <Container fluid>
      <Row>
          {images.map((image, index) => <Col sm={4} key={`${image.id}_${index}`}>
              <ImageCard image={image} handleShow={handleShow}/>
          </Col>)}
      </Row>
      <ImageModal showModal={showModal} handleClose={handleClose} imageUrl={imageUrl}/>
    </Container>
  )
}

ImageList.propTypes = {
  images: PropTypes.array.isRequired
}

export default ImageList
