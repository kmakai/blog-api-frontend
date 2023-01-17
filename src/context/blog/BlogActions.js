import axios from "axios";

// get post from api
export const getPosts = async () => {
  const response = await axios.get(`http://localhost:5000/api/posts`);

  console.log(response.data);
  return response.data;
};

// login

export const login = async (formData) => {
  const response = await axios.post(
    "http://localhost:5000/api/users/login",
    formData
  );

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

export const logOut = () => {
  localStorage.removeItem("user");
};
