import React, { useState } from "react";
import { postData } from "../api/PostApi";

export const Form = ({ data, setData }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setAddData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addPostdata = async () => {
    const res = await postData(addData);
    console.log("res:", res);
    if (res.status === 201) {
      setData([...data, res.data]);
      setAddData({
        title: "",
        body: "",
      });
    } else {
      console.error("Error adding post:", res.status);
    }
  };

  //! Form Submit Handler
  const handleFormSubmit = (e) => {
    e.preventDefault(); // rendering of page will be stopped
    addPostdata();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          autoComplete="off"
          id="title"
          name="title"
          placeholder="Enter title"
          value={addData.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <input
          type="text"
          autoComplete="off"
          id="body"
          name="body"
          placeholder="Add Post"
          value={addData.body}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button type="submit">Add Post</button>
      </div>
    </form>
  );
};
