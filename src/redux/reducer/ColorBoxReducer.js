const initialState = {
  color: "white",
  count: 0,
  isLogIn: false,
  loggedEmail: "",
};

const ColorBoxReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      state.count += action.payload;
      break;
    case "DECREASE":
      state.count -= action.payload;
      break;
    case "INPUT":
      state.color = action.payload;
      break;
    case "LOGIN":
      state.isLogIn = action.payload.isLogIn;
      state.loggedEmail = action.payload.email;
      break;
    case "LOGOUT":
      state.isLogIn = action.payload.isLogIn;
      state.loggedEmail = action.payload.email;
      break;
    default:
      break;
  }
  console.log("state:", state);
  return { ...state };
};

export default ColorBoxReducer;
