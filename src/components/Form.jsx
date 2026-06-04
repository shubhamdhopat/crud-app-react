import React, { useState, useEffect } from "react";
import { postData, updateData as updateDataApi } from "../api/PostApi";

export const Form = ({ data, setData, updateData, setUpdateData }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "", // initial state for form inputs
  });

  let isEmpty = Object.keys(updateData).length === 0; // checks if updateData is empty or not

  //get the updated data and add into field
  useEffect(() => {
    updateData &&
      setAddData({
        title: updateData.title || "",
        body: updateData.body || "",
      });
  }, [updateData]);

  const handleInputChange = (e) => {
    //This function euns when there is a change in input field and it updates the state of addData with the new value entered by user
    const { name, value } = e.target;

    setAddData((prevData) => ({
      ...prevData, //preserves old values
      [name]: value,
    }));
  };

  const addPostdata = async () => {
    const res = await postData(addData);
    console.log("res:", res);
    if (res.status === 201) {
      //201 status code indicates that the post was successfully created
      setData([...data, res.data]); //copies existing data and adds new post to the end of the array
      setAddData({
        title: "",
        body: "", //resets form inputs to empty strings after successful submission
      });
    } else {
      console.error("Error adding post:", res.status);
    }
  };

  //update post data
  const updatePostdata = async () => {
    // Handle update post logic here
    const res = await updateDataApi(updateData.id, addData);
    if (res.status === 200) {
      // 200 status code indicates that the post was successfully updated
      setData(
        data.map((curPost) =>
          curPost.id === updateData.id ? res.data : curPost,
        ),
      );
      setAddData({
        title: "",
        body: "",
      });
      setUpdateData({});
    } else {
      console.error("Error updating post:", res.status);
    }
  };

  //! Form Submit Handler
  const handleFormSubmit = (e) => {
    e.preventDefault(); // rendering of page will be stopped
    const action = e.nativeEvent.submitter.value; //value of button that was clicked to submit the form
    if (action === "Add Post") {
      addPostdata();
    } else if (action === "Edit Post") {
      // Handle edit post logic here
      updatePostdata();
    }
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
        <button type="submit" value={isEmpty ? "Add Post" : "Edit Post"}>
          {isEmpty ? "Add Post" : "Edit Post"}
        </button>
      </div>
    </form>
  );
};
