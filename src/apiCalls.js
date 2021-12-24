import axios from 'axios';

export const loginCall = async (userCredentials,dispatch) => {
    dispatch({type:"LOGIN_START"});
    try{
        let res = await axios.post("auth/login",userCredentials);
        dispatch({type:"LOGIN_SUCCESS",payload:res.data});
    }catch(err){
        dispatch({type:"LOGIN_FAILURE",payload:err});
    }
}

export const logoutCall = async (dispatch) => {
    dispatch({ type: "LOGOUT" });
  };