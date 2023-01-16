import { createContext, useReducer } from "react";
import BlogReducer from "./BlogReducer";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const initialState = {
    user: {},
    posts: [],
    post: {},
    comments: [],
  };

  const [state, dispatch] = useReducer(BlogReducer, initialState);

  return (
    <BlogContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
