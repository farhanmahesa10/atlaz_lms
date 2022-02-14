import { createStore } from "redux";

const states = {
  loginStatus: false,
};

const rootReducer = (state = states, action) => {
  if (action.type == "SET_LOGIN_STATUS") {
    return { ...state, loginStatus: action.value };
  }

  return state;
};

const store = createStore(rootReducer);

export default store;
