import {createContext,useReducer,useEffect} from "react";
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
    // user:{
    //     "_id": "61a2717624886cc6be83d479",
    //     "username": "anurag",
    //     "email": "anurag@abc.com",
    //     "password": "$2b$10$lzbNfeZ5/k2goA55M4U1nO.W9BOWV8.BYYEl8uAegYg6tkSwAvi1O",
    //     "profilePicture": "",
    //     "coverPicture": "",
    //     "followers": [],
    //     "following": [],
    //     "isAdmin": false,
    //     "createdAt": "2021-11-27T17:57:10.836Z",
    //     "updatedAt": "2021-11-27T18:09:10.999Z",
    //     "__v": 0
    // },
    user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching:false,
    error:false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE);

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user))
      },[state.user])

    return (
        <AuthContext.Provider value={{user:state.user,isFetching:state.isFetching,error:state.error,dispatch}}>
        {children}
        </AuthContext.Provider>
    )
}