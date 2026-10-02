import React, { useState, useEffect } from "react";
import axios from "axios";

function NewI() {
  const [list, setList] = useState([]);

  const getAllList = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setList(res.data);
    } catch (err) {
      console.log("An error occurred:", err);
    }
  };

  useEffect(() => {
    getAllList();
  }, []);

  return (
    <div className="mt-5">
      <h1>All lists</h1>

      <ul>
        {list.map((ss) => (
          <li key={ss.id}>{ss.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default NewI;

function new2() {
  const [comment, setComment] = useState([]);

  const getAllComment = async () => {
    try {
      const rest = await axios.get(
        "https://jsonplaceholder.typicode.com/comments",
      );
      setComment(rest.data);
    } catch (com) {
      console.log("An error occurred:", com);
    }
  };

  useEffect(() => {
    getAllComment();
  }, []);

  return (
    <>
      <h1>All Comment</h1>
      <ul>
        {comment.map((ss) => (
          <li key={ss.id}>
            {ss.email} {ss.name}
          </li>
        ))}
      </ul>
    </>
  );
}
