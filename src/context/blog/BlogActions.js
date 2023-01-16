import axios from "axios";

// get post from api
export const getPosts = async () => {
  const response = await axios.get(`http://localhost:5000/api/posts`);

  console.log(response.data);
  return response.data;
};
