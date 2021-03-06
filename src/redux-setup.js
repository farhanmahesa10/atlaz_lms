import { createStore } from "redux";

const states = {
  auth: {
    isLogin: false,
    userInfo: {},
  },

  loginStatus: false,
  flashMessage: {
    status: false,
    msg: false,
    show: false,
    isRedirecterToast: false,
  },
  modalData: {
    data: {},
  },
};

const rootReducer = (state = states, action) => {
  if (action.type === "SET_LOGIN_STATUS") {
    return { ...state, loginStatus: action.value };
  }
  if (action.type === "SET_FLASH_MESSAGE") {
    return {
      ...state,
      flashMessage: {
        status: action.status,
        title: action.title,
        msg: action.msg,
        show: action.show,
        isRedirecterToast: action.isRedirecterToast
          ? action.isRedirecterToast
          : false,
      },
    };
  }
  if (action.type === "SET_LOGIN_STATUS") {
    return { ...state, loginStatus: action.value };
  }
  if (action.type === "CLEAR_AUTH_LOCAL") {
    let baseUrl = process.env.REACT_APP_BASE_URL;
    localStorage.removeItem(baseUrl + "/register/fullName");
    localStorage.removeItem(baseUrl + "/register/email");
    localStorage.removeItem(baseUrl + "/register/phoneNumber");
    localStorage.removeItem(baseUrl + "/register/resend-timer");
  }
  if (action.type === "SET_AUTH") {
    return { ...state, auth: action.value };
  }

  if (action.type === "MODAL_ACTION") {
    return { ...state, modalData: action.value };
  }

  return state;
};

const store = createStore(rootReducer);

export default store;
