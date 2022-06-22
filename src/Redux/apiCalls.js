import  {onLogin , LoginSuccess, LoginError} from "./UserReducer"
import {publicReq} from '../axiosRequest'

export const login = async(dispatch,user ) =>{

    dispatch(onLogin());

    try{
        const res = await publicReq.post("auth/login",user);

        dispatch( LoginSuccess(res.data))
    }
    catch(err){

        dispatch(LoginError())
    }
}