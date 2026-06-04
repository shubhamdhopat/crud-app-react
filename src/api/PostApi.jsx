import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//! Get All Posts
export const getPosts = () => {
  return api.get("/posts");
};

//! Delete Post
export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};

//post request
export const postData = (post) => {
  return api.post("/posts", post);
};

//put request
export const updateData = (id, post) => {
  return api.put(`/posts/${id}`, post);
};
