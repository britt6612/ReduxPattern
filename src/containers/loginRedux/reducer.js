// constants.js
const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

// actions.js
/*
export const login = (email, password) =>
  dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    callFakeLoginApi(email, password, error => {
      dispatch(setLoginPending(false));
      if (!error) {
        dispatch(setLoginSuccess(true));
      } else {
        dispatch(setLoginError(error));
      }
    });
  };
*/

export const callFakeLoginApi = async (email, password) =>
  setTimeout(() => {
    if (email === 'admin@admin.com' && password === 'admin') {
      // mocking up API fetch request
      return {
        statusCode: 200,
        username: 'admin@admin.com',
        userId: '13193kdwfmwf03'
      };
    } else if (email.length === 0 || password.length === 0) {
      // form validation can be done on form component level.
      return new Error('Cannot be blank');
    } else {
      return new Error('Invalid credentials');
    }
  }, 2000);

export const login = async (email, password) => {
  return async dispatch => {
    // should be single dispatch
    dispatch(setLoginPending(true));
    try {
      const fakeloginResponse = await callFakeLoginApi('mystuff');
      if (fakeloginResponse.statusCode === 200) {
        dispatch(setLoginSuccess(true));
        // import userActions from '../user/actions
        // dispatch(userActions.newUser(fakeloginResponse));
      }
    } catch (err) {
      // deal with the error
      dispatch(setLoginError(err));
    }
  };
};

function setLoginPending(isLoginPending) {
  return {
    type: SET_LOGIN_PENDING,
    isLoginPending
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

/* 
function callFakeLoginApi(email, password, callback) {
  setTimeout(() => {
    if (email === 'admin@admin.com' && password === 'admin') {
      return callback(null);
    } else if (email.length === 0 || password.length === 0) {
      return callback(new Error('Cannot be blank'));
    } else {
      return callback(new Error('Invalid credentials'));
    }
  }, 2000);
}
*/

// reducer.js
const initialState = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return {
        ...initialState,
        isLoginPending: action.isLoginPending
      };

    case SET_LOGIN_SUCCESS:
      return {
        ...initialState,
        isLoginSuccess: action.isLoginSuccess
      };

    case SET_LOGIN_ERROR:
      return {
        ...initialState,
        loginError: action.loginError
      };

    default:
      return state;
  }
}
