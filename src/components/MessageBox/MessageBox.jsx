import React from 'react';
import './MessageBox.css'

const MessageBox = () => {
  return (
    <div className='messagebox d-flex p-3'>
      <textarea name="" id="message" placeholder='Enter your text here...' rows={4}></textarea>
      <button className='add'>
       <svg height="28" className='' viewBox="0 0 48 48" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M4.02 42l41.98-18-41.98-18-.02 14 30 4-30 4z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>
      </button>
    </div>
  )
}

export default MessageBox
