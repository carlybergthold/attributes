import React, { Component } from "react";

class Modal extends Component {


    render() {
      return(
          <div className={this.props.openModal ? 'modal is-active' : 'hidden'}>
            <div className="modal-background"></div>
            <div className="modal-content">{this.props.message}</div>
            <button className="modal-close is-large" aria-label="close" onClick={this.props.closeUserModal}></button>
          </div>
      )
    }
}

export default Modal;