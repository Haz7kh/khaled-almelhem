const themeReducer = (state, action) => {
  // for background colors
  if (action.type === "bg-1") {
    return { ...state, background: "bg-1" };
  }
  if (action.type === "bg-2") {
    return { ...state, background: "bg-2" };
  }
};

export default themeReducer;
