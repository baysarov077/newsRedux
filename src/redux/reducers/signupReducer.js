const initialState = {
  signUp: false,
  signIn: false,
  error: null,
  token: localStorage.getItem('token'),
  id: localStorage.getItem('id')
}

export const application = (state = initialState, action) => {
  switch (action.type) {
    case 'application/signup/pending':
      return {
        ...state,
        signUp: true,
        error: null
      }
    case 'application/signup/fulfilled':
      return {
        ...state,
        signUp: false,
      }
    case 'application/signup/rejected':
      return {
        ...state,
        signUp: false,
        error: action.payload
      }
    case 'application/signin/pending':
      return {
        ...state,
        signIn: true,
        error: null
      }
    case 'application/signin/fulfilled':
      return {
        ...state,
        signIn: false,
        token: action.payload.token
      }
    case 'application/signin/rejected':
      return {
        ...state,
        signIn: false,
        error: action.payload
      }

    case 'logout':
      return {
        ...state,
        token: null,
        id: null
      }
    default:
      return state;
  }
}

export const createUser = (login, password) => {
  return async dispatch => {
    dispatch({ type: 'application/signup/pending' })
    const res = await fetch('http://localhost:4000/users', {
      method: 'POST',
      body: JSON.stringify({ login, password }),
      headers: {
        'Content-type': 'application/json'
      }
    })
    const json = await res.json()
    if (json.error) {
      dispatch({ type: 'application/signup/rejected', payload: 'Логин занят' })
    } else {
      dispatch({ type: 'application/signup/fulfilled', payload: json })
    }
  }
}

export const auth = (login, password) => {
  return async dispatch => {
    dispatch({ type: 'application/signin/pending' })
    const res = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({ login, password }),
      headers: {
        'Content-type': 'application/json'
      }
    })
    const json = await res.json()
    if (json.error) {
      dispatch({ type: 'application/signin/rejected', payload: 'Не верный логин или пароль' })
    } else {
      dispatch({ type: 'application/signin/fulfilled', payload: json })
      localStorage.setItem('token', json.token)
      localStorage.setItem('id', json.id)
    }
  }
}