import { GET_CURRENT_USER, LOGIN_USER, SIGN_OUT_USER } from "./user.types";

const initialState = {
  auth: false,
  currentUser: null,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CURRENT_USER: {
      return {
        ...state,
        auth: true,
        currentUser: { ...payload },
      };
    }
    case SIGN_OUT_USER: {
      return {
        ...state,
        auth: false,
        currentUser: null,
      };
    }
    default: {
      return state;
    }
  }
};
