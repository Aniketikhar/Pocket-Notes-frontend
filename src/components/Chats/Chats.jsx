import React from "react";
import "./Chats.css";

const Chats = (props) => {
  return (
    <div className="flex-grow-1 notes overflow-y-scroll overflow-x-hidden">
      {props?.notes?.map((note) => {
        return (
          <>
            <div className="note p-3 shadow rounded" key={note._id}>
              <p>{note.content}</p>
              <div className="text-end">
                <span>{(() => {
                    const date = new Date(note.timestamp);
                    const options = { day: '2-digit', month: 'long', year: 'numeric' };
                    return date.toLocaleDateString('en-GB', options);
                })()}</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    className="bi bi-dot"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg>
                </span>
                <span>{
                  (() => {
                    const date = new Date(note.timestamp);
                    const hours = date.getHours();
                    const minutes = date.getMinutes();
                    
                    // Determine AM or PM
                    const period = hours >= 12 ? 'PM' : 'AM';
                    
                    // Convert hours from 24-hour to 12-hour format
                    const formattedHours = hours % 12 || 12;
                    
                    // Format minutes with leading zero if needed
                    const formattedMinutes = minutes.toString().padStart(2, '0');
                    
                    return `${formattedHours}:${formattedMinutes} ${period}`;
                  })()
                  } </span>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Chats;
