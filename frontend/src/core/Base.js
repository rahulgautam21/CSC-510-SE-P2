import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "Welcome to Walpaper Store  ",
  className = "bg-blue text-white",
  children,
}) => (
  <div>
    <Menu />
    <div className="container-fluid">
      <div className="jumbotron bg-blue text-white text-center">
        <h2 className="display-5">
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            fill="red"
            class="bi bi-images"
            viewBox="0 0 16 16"
          >
            <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
          </svg>
        </h2>
      </div>
      <div className={className}>{children}</div>
    </div>
    <footer className="footer bg-dark mt-auto fixed-bottom">
      <div className="container-fluid bg-blue text-white text-left py-3">
        <h6>CSC-510: Software Engineering Project</h6>
        <h6>
          All rights reserved{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="red"
            class="bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
        </h6>
      </div>
    </footer>
  </div>
);

export default Base;
