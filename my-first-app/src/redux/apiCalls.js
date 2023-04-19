import { publicRequest, userRequest } from '../requestMethods';
import { loginFailure, loginStart, loginSuccess } from './userSlice';

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
      const res = await publicRequest.post('/customer/auth/login', user);
      if(res.data.customer){
        dispatch(loginSuccess(res.data.customer));
      }
      dispatch(loginFailure());

    } catch (err) {
      dispatch(loginFailure());
    }
  };