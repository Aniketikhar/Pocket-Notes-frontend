import React from "react";
import "./Chats.css";

const Chats = () => {
  return (
    <div className="flex-grow-1 notes overflow-y-scroll overflow-x-hidden">
      <div className="note p-3 shadow rounded">
        <p>
          Lorem ipsupsa nt numquam. ut quae sint molestiae illo, nam praesentium
          dolore, a quod laudantium ex voluptates repellat. Odit magni
          aspernatur soluta tenetur omnis beatae veniam suscipit quam, vel
          accusantium culpa quibusdam at esse necessitatibus quidem tempora,
          porro ut eligendi neque quis. Hic asperiores molestiae ipsa, tempora
          tempore vel in quaerat, recusandae quibusdam repudiandae enim nihil
          dignissimos. Facilis repellendus nobis perferendis velit perspiciatis.
        </p>
        <div className="text-end">
          <span>9 Mar 2023</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              class="bi bi-dot"
              viewBox="0 0 16 16"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
            </svg>
          </span>
          <span>10.00 PM </span>
        </div>
      </div>
    </div>
  );
};

export default Chats;
