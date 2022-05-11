import React, { Component } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

export default class modalUser extends Component {

    setOpen = () => {
        this.props.toggleStt();
    }

  render() {
    return (
      <div>
                <Modal isOpen={this.props.isOpen} toggle={() => this.setOpen()}>
        <ModalHeader toggle={() => this.setOpen()}>
            Modal title
        </ModalHeader>
        <ModalBody>
            {this.props.fun}
        </ModalBody>
        </Modal>
      </div>
    )
  }
}
