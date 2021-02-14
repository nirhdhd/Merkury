const initialState = {
  isSidebarOpen: true,
};

const reducer = (state = initialState, action) => {
  if (action.type == "TOGGLE-SIDEBAR") {
    return {
      isSidebarOpen: !state.isSidebarOpen,
    };
  }

  return state;
};

export default reducer;
