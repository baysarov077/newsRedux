import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../redux/reducers/signupReducer';

const Signin = () => {

  const dispatch = useDispatch()

  const signIn = useSelector(state => state.application.signIn)
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
    dispatch(auth(login, password))
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
            disabled={signIn}
          >
            Войти
          </button>
        </div>
        <Link className='linktosign' to={'/signup'}>Зарегестрироваться</Link>
      </div>
    </div>
  );
};

export default Signin;