import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GroupList from "./components/GroupList/GroupList";
import NewGroup from "./components/NewGroup/NewGroup";
import Navbar from "./components/Navbar/Navbar";
import Chats from "./components/Chats/Chats";
import MessageBox from "./components/MessageBox/MessageBox";
import NotesBox from "./components/Notes-Box/NotesBox";

function App() {
  return (
    <>
      <div className="row main m-0">
        <div className="left col-12 col-md-3 p-0  position-relative">
          <h2 className="text-center m-5">Pocket Notes</h2>
          <GroupList />
          <NewGroup />
        </div>
        <div className="right col-12 col-md-9 p-0  d-none d-md-block">
          <NotesBox />
        </div>
      </div>
    </>
  );
}

export default App;
