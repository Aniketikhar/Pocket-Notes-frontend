import { createContext, useState } from "react";

// Create the context
export const notesContext = createContext(null);

export default function NotesContextState({ children }) {
    const [id , setId] = useState('');
    const [valueUpdated, setValueUpdated] = useState(1);
    if(valueUpdated){
        console.log("value is updated" , valueUpdated)
    }

  return <notesContext.Provider value={{valueUpdated , setValueUpdated ,  id , setId}}>{children}</notesContext.Provider>;
}


