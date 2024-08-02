import React, { useContext, useEffect, useState } from "react";
import "./GroupList.css";
import { notesContext } from "../../Context/Context";

const GroupList = () => {
  const [groupList, setGroupList] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { setId , valueUpdated } = useContext(notesContext);


  async function getGroupList() {
    try {
      const response = await fetch("http://localhost:8000/allnotes");
      const data = await response.json();

      if (data.length > 0) {
        setGroupList(data);
        setIsLoading(false);
        console.log(groupList);
      }
    } catch (error) {
      console.error("Error fetching group list:", error);
    }
  }

  function handleClick(id){
    
    setId(id);
    
  }

  useEffect(() => {
    getGroupList();
  },[valueUpdated]);

  return (
    <ul className="list ">
      {isLoading == true ? (
        <h1>loading...</h1>
      ) : (
        <>
          {groupList?.map((group) => {
            return (
              <li onClick={() => handleClick(group._id)} className="d-flex align-items-center my-3 " key={group._id}>
                <div className="profile d-flex justify-content-center align-items-center " style={{background: group.color}}>
                  <h4 className="text-white m-0">
                    {(() => {
                      const words = group?.name.split(" ");
                      const initials = words
                        .slice(0, 2)
                        .map((word) => word.charAt(0).toUpperCase())
                        .join("");
                      return initials;
                    })()}
                  </h4>
                </div>
                <div className="name ms-3">
                  <h5>{group.name}</h5>
                </div>
              </li>
            );
          })}
        </>
      )}
    </ul>
  );
};

export default GroupList;
