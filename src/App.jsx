import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Card from './components/Card';
import News from './components/News';
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import { store } from './redux/configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Card />} />
          <Route path='/news/category/:id' element={<Card />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/news/:id' element={<News />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;