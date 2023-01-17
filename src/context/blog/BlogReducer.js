const BlogReducer = (state, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        posts: action.payload,
      };

    case "SIGN_IN_USER":
      return {
        ...state,
        user: action.payload,
      };

    case "LOG_OUT":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default BlogReducer;
