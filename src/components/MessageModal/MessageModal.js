import React from 'react'
import './MessageModal.css'

const MessageModal = () => {
  return (
    <div className="MessageModal-card-wrapper">
      <div className="MessageModal-card-wrapper-left">
        <p>Are you sure you want to delete ?</p>
      </div>
      <div className="MessageModal-card-wrapper-right">
        <button>yes</button>
        <button>no</button>
      </div>
    </div>
  )
}

export default MessageModal