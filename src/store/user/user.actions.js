import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signOutUser,
} from "../../firebase/firebase";
import { toast } from "react-toastify";
import { createAction } from "../utils";
import { GET_CURRENT_USER, SIGN_OUT_USER } from "./user.types";

export const signup =
  (displayName, email, password, confirmPassword) => async (dispatch) => {
    if (password !== confirmPassword) {
      toast.error("passwords don't match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      user.displayName = displayName;
      const promise = createUserDocumentFromAuth(user, {
        courses: [{ id: null, progress: null, review: null }],
      });
      toast.promise(promise, {
        pending: "Please wait...",
        success: "User added successfully",
      });
      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
    } catch (err) {
      switch (err.code) {
        case "auth/email-already-in-use": {
          toast.error("User Already Registered");
          break;
        }
        default: {
          toast.error("Error creating user");
        }
      }
    }
  };

export const getCurrentUser = (user) => (dispatch) => {
  try {
    dispatch(createAction(GET_CURRENT_USER, user));
  } catch (error) {
    toast.error("Error signing In");
  }
};

export const signOut = () => async (dispatch) => {
  try {
    await signOutUser();
    dispatch(createAction(SIGN_OUT_USER));
  } catch (error) {
    console.log(error);
  }
};
