import axios from "axios";
import {
  REGISTER_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./register.types";

export const registerUser = (creds) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    // console.log(creds)
    let res = await axios.post(
      "https://healthy-duck-jewelry.cyclic.app/auth/register",
      creds
    );
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    return res.data;
  } catch (error) {
    dispatch({ type: REGISTER_ERROR, payload: error.message });
  }
};
