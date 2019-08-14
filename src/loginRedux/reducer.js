/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-use-before-define */
// Constants.js
const SET_LOADING = 'SET_LOADING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';


// Fake API Call
export const callFakeLoginApi = (email, password) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (email === 'admin@admin.com' && password === 'admin') {
      // mocking up API fetch request
      return resolve({
        statusCode: 200,
      });
    } 
      return reject('Invalid Credentials');
    
  }, 2000);
}); 


// Actions
export const login = (email, password) => {
  return async dispatch => {
    dispatch(setLoading(true));
    try {
      const fakeloginResponse = await callFakeLoginApi(email, password);
      if (fakeloginResponse.statusCode === 200) {
        dispatch(setLoginSuccess(true));
      }
    } catch (err) {
      dispatch(setLoginError(err));
    }
  };
};


function setLoading(isLoading) {
  return {
    type: SET_LOADING,
    isLoading
  };
}

function setLoginSuccess(isLoginSuccess) {
  return {
    type: SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
}

function setLoginError(loginError) {
  return {
    type: SET_LOGIN_ERROR,
    loginError
  };
}


// reducer.js
const initialState = {
  isLoginSuccess: false,
  isLoading: false,
  loginError: null
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...initialState,
        isLoading: action.isLoading,
      };
    case SET_LOGIN_SUCCESS:
      return {
        ...initialState,
        isLoginSuccess: action.isLoginSuccess,
      };

    case SET_LOGIN_ERROR:
      return {
        ...initialState,
        loginError: action.loginError,
      };

    default:
      return state;
  }
}