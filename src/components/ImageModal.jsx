import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, Image } from 'react-bootstrap'

const ImageModal = ({ showModal, handleClose, imageUrl }) => {
  return (
        <Modal show={showModal} onHide={handleClose} centered contentClassName="content-size-auto">
        <Modal.Body className="text-center">
            <Image src={imageUrl} rounded/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

ImageModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired
}

export default ImageModal
