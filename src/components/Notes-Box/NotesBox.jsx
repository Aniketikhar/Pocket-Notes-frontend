import React, { useContext, useEffect, useState } from "react";
import "./NotesBox.css";
import Navbar from "../Navbar/Navbar";
import Chats from "../Chats/Chats";
import MessageBox from "../MessageBox/MessageBox";
import { notesContext } from "../../Context/Context";

const NotesBox = () => {
  const { id } = useContext(notesContext);
  const [notes, setNotes] = useState([]);
  const { valueUpdated } = useContext(notesContext);

  async function getNotes() {
    try {
      console.log(id);
      const response = await fetch(`https://pocket-notes-backend-r2vl.onrender.com/single-note/${id}`);

      const data = await response.json();

      if (response.ok) {
        setNotes(data);
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  }

  useEffect(() => {
    getNotes();
  }, [id, valueUpdated]);

  return (
    <>
      {id ? (
        <div className="d-flex flex-column h-100 ">
          <Navbar name={notes?.name} color={notes?.color} />
          <Chats notes={notes?.notes} />
          <MessageBox notesId={notes?._id} />
        </div>
      ) : (
        <div className="d-flex flex-column justify-content-center">
                <h1 className="text-center">Pocket Notes</h1>
                <p className="text-center">Send and receive messages without keeping your phone online.<br/>
Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
                </div>
      )}
    </>
  );
};

export default NotesBox;
