import React, { useEffect, useState } from "react";
import { getPosts } from "../api/PostApi";
import "./Posts.css";

export const Posts = () => {
  const [data, setData] = useState([]);

  const getPostData = async () => {
    const res = await getPosts();
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <section className="posts-section">
      <ol>
        {data.map((curElem, index) => {
          const { id, body, title } = curElem;

          return (
            <li key={id}>
              <span className="number">{index + 1}</span>

              <div className="card">
                <div className="card-content">
                  <p>Title: {title}</p>
                  <p>Body: {body}</p>
                </div>

                <div className="btn-group">
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
};
