import React from "react";

export default function Modal(props) {
  return (
    <div className={props.showModal ? 'modal is-active' : 'hidden'}>
      <div className="modal-background"></div>
      <div className="modal-content">{props.message}</div>
      <div>{props.children}</div>
      <button className="modal-close is-large" aria-label="close" onClick={props.toggleModal}></button>
    </div>
  );
}