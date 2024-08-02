import React, { useContext, useState } from 'react';
import './MessageBox.css'
import { notesContext } from '../../Context/Context';

const MessageBox = (props) => {
  const id = props.notesId;
  const [input, setInput] = useState("");
  const { setValueUpdated } = useContext(notesContext)

  function handleChange(e){
    setInput(e.target.value);
  }

  async function sendNotes(){

    if (!input) {
      alert("Please insert note");
      return;
    }

    const note = {
      content: input,
      
    };

    try {
      const response = await fetch(`http://localhost:8000/insert-note/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
      });

      if (response.ok) {
        console.log('note created successfully:', await response.json());
        
        setInput('');
        setValueUpdated((value) => value + 1 )
      
      } else {
        console.error('Failed to create note:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating note:', error);
    }

  }
  
  return (
    <div className='messagebox d-flex p-3'>
      <textarea name="notes" value={input} onChange={handleChange} id="message" placeholder='Enter your text here...' rows={4}></textarea>
      <button className='add ' onClick={sendNotes}>
       <svg height="28" className='' viewBox="0 0 48 48" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M4.02 42l41.98-18-41.98-18-.02 14 30 4-30 4z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>
      </button>
    </div>
  )
}

export default MessageBox
