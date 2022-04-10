import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCats } from '../redux/reducers/catsReducer';

const Categories = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCats())
  }, [dispatch])

  const cats = useSelector(state => state.catsReducer.cats)

  return (
    <div className='nav'>
      <Link className='allNews' to={'/'}>Все новости</Link>
      <ul className='list'>
        {cats.map(item => {
          return <Link className='linkCats' key={item._id} to={`/news/category/${item._id}`}>{item.category}</Link>
        })}
      </ul>
      
    </div>
  );
};

export default Categories;