import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../redux/reducers/signupReducer';
import { Link } from 'react-router-dom';

const Signup = () => {

  const dispatch = useDispatch()

  const signUp = useSelector(state => state.application.signUp)
  const error = useSelector(state => state.application.error)

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeLogin = (e) => {
    setLogin(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = () => {
    dispatch(createUser(login, password))
    setLogin('')
    setPassword('')
  }

  return (
    <div className='container'>
      <Link to={'/'}>Главная</Link>
      <p className='error'>{error}</p>
      <div className="inputBlock">
        <div>
          <input
            className='input'
            placeholder='login'
            value={login}
            onChange={handleChangeLogin}
            type="text"
          />
        </div>
        <div>
          <input
            className='input'
            placeholder='password'
            value={password}
            onChange={handleChangePassword}
            type="password"
          />
        </div>
        <div className='btnBlock'>
          <button
            className='submitBtn'
            onClick={handleSubmit}
            disabled={signUp}
          >
            Зарегистрироваться
          </button>
        </div>
        <Link className='linktosign' to={'/signin'}>Войти</Link>
      </div>
    </div>
  );
};

export default Signup;