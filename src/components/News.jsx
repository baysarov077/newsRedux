import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getComments } from '../redux/reducers/commentsReducer';
import { loadNews } from '../redux/reducers/newsReducer';
import CreateComments from './CreateComments';


const News = () => {

  const { id } = useParams()

  const news = useSelector(state => state.newsReducer.news)
  const loading = useSelector(state => state.newsReducer.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadNews())
  }, [dispatch])



  const oneNews = news.find(item => item._id === id)

  useEffect(() => {

    dispatch(getComments(id))

  }, [dispatch, id])

  const coms = useSelector(state => state.commentsReducer.comments)

  if (loading) {
    return <div>...</div>
  }
  return (
    <>
      <div className='container'>
      <Link className='linkToMain' to={'/'}>Главная</Link>
        <div id='newsPage'>
        <h1>{oneNews.title}</h1>
        <p className='oneNewsText'>{oneNews.text}</p>
        <div className='commentBlock'>
          <h2>Комментарии:</h2>
          {coms.map(i => {
            return (
              <div key={i._id}>
                <h4>{i.user}</h4>
                <p>{i.text}</p>
                <hr />
              </div>
            )
          })}
        </div>
        <CreateComments />
        </div>
      </div>
    </>
  )


};

export default News;