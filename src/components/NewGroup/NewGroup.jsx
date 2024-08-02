import React, { useCallback, useContext, useState } from "react";
import "./NewGroup.css";
import { notesContext } from "../../Context/Context";

const NewGroup = () => {

  const [color, setColor] = useState("");
  const [groupName , setGroupName] = useState("");
  const { setValueUpdated } = useContext(notesContext);

  async function handleSubmit(){
      console.log(color , groupName);
      if (!color || !groupName) {
        alert('Please fill in all fields');
        return;
      }
  
      const newGroup = {
        name: groupName,
        color: color,
      };
  
      try {
        const response = await fetch('http://localhost:8000/create-notes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newGroup)
        });
  
        if (response.ok) {
          console.log('Group created successfully:', await response.json());
          // Optionally, reset form fields after successful submission
          setGroupName('');
          setColor('');
          setValueUpdated((value) => value + 1)
          // Close the modal after submission
          const modal = document.getElementById('exampleModal');
          const bootstrapModal = bootstrap.Modal.getInstance(modal);
          bootstrapModal.hide();
        } else {
          console.error('Failed to create group:', response.statusText);
        }
      } catch (error) {
        console.error('Error creating group:', error);
      }
      
  }


  return (
    <>
      <div className="new">
        <button type="button" className=" create " data-bs-toggle="modal" data-bs-target="#exampleModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
        </button>

        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              
              <div className="modal-body">
                <h3 className="mb-4">Create New Group</h3>
                <div className="mb-4">
                  <label htmlFor="groupName">Group Name</label>
                  <input type="text" value={groupName} required onChange={(e) => setGroupName(e.target.value) } id="groupName" className="ms-4 rounded-5 py-2 px-4" placeholder="Enter group name" />
                </div>
                <div className="d-flex">
                  <label htmlFor="color" className="mt-2">Choose Colour</label>
                  <div className="ms-4">
                    <input type="radio" onChange={(e) => setColor(e.target.value)} className="btn-check" name="color" id="color-violet" value="#b38bfa"  autoComplete="off" />
                    <label className="btn p-3 rounded-circle m-1" style={{background: "#b38bfa"}} htmlFor="color-violet"></label>

                    <input type="radio" onChange={(e) => setColor(e.target.value)} className="btn-check" name="color" id="color-pink" value="#ff79f2" autoComplete="off" />
                    <label className="btn p-3 rounded-circle m-1" style={{background: "#ff79f2"}} htmlFor="color-pink"></label>

                    <input type="radio" onChange={(e) => setColor(e.target.value)} className="btn-check" name="color" id="color-aqua" value="#43e6fc" autoComplete="off" />
                    <label className="btn p-3 rounded-circle m-1" style={{background: "#43e6fc"}}  htmlFor="color-aqua"></label>

                    <input type="radio" onChange={(e) => setColor(e.target.value)} className="btn-check" name="color" id="color-brown" value="#f19576" autoComplete="off" />
                    <label className="btn p-3 rounded-circle m-1" style={{background: "#f19576"}} htmlFor="color-brown"></label>

                    <input type="radio" onChange={(e) => setColor(e.target.value)} className="btn-check" name="color" id="color-blue" value="#0047ff" autoComplete="off" />
                    <label className="btn p-3 rounded-circle m-1" style={{background: "#0047ff"}} htmlFor="color-blue"></label>

                    <input type="radio" onChange={(e) => setColor(e.target.value)} className="btn-check" name="color" id="color-green" value="#6691ff" autoComplete="off" />
                    <label className="btn p-3 rounded-circle m-1" style={{background: "#6691ff" , }} htmlFor="color-green"></label>
                  </div>
                  
                </div>

              </div>
              <div className="modal-footer border-0">
                
                <button type="button" onClick={handleSubmit} className="btn py-1 px-4 text-white" style={{backgroundColor: "#001e87"}}>
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewGroup;
