import { createStore } from "redux";

const states = {
  loginStatus: false,
  flashMessage: { status: false, msg: false, show: false },
};

const rootReducer = (state = states, action) => {
  if (action.type == "SET_LOGIN_STATUS") {
    return { ...state, loginStatus: action.value };
  }
  if (action.type == "SET_FLASH_MESSAGE") {
    return {
      ...state,
      flashMessage: {
        status: action.status,
        title: action.title,
        msg: action.msg,
        show: action.show,
      },
    };
  }

  return state;
};

const store = createStore(rootReducer);

export default store;
