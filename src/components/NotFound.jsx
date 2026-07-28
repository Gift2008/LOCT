import React from "react";
import { Button } from "react-bootstrap";
import "../styles/notfound.css";
import useTitles from "./Hooks/useTitles";
function NotFound() {
  useTitles("Page Not Found !");

  return (
    <div>
      <div className="whole">
        <h1>Page Not Found</h1>
        <p>
          You have likely entered the wrong url. Kindly return to the previous
          page.
        </p>
        <a href="/">
          <Button>Go To Home page</Button>
        </a>
      </div>
    </div>
  );
}

export default NotFound;
