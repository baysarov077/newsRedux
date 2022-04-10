import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardInner from './CardInner';
import Categories from './Categories';
import { Link } from 'react-router-dom';
import { loadNews } from '../redux/reducers/newsReducer';

const Card = () => {
  const { id } = useParams()
  const news = useSelector(state => state.newsReducer.news)
  const reg = useSelector(state => state.application.signIn)

  const filteredNews = news.filter((item => {
    if (!id) return true
    return item.category === id
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadNews())
  }, [dispatch])

  const loading = useSelector(state => state.newsReducer.loading)

  if (loading) {
    return <div>...</div>
  }
  return (
    <div className='container'>
      <div>
      {reg ? <div style={{backgroundColor: 'red', width: '100px', height: '100px'}}>sвыаыфваыаы</div> : null}
      </div>
      <div className='menu'>
        <Categories />
        <div className='buttons'>
        <button className='signin'><Link className='link' to={'/signin'}>Войти</Link></button>
        <button className='signup'><Link className='link' to={'/signup'}>Регистрация</Link></button>
        </div>
      </div>
      <hr />
      <h1>Новости на сегодня</h1>
      <div className='cardsBlock'>
        {filteredNews.map(item => {
          return <CardInner key={item._id} elem={item} />
        })}
      </div>
    </div>

  );
};

export default Card;