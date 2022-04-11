import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addComment } from '../redux/reducers/commentsReducer';

const CreateComments = () => {

  const { id } = useParams()

  const dispatch = useDispatch()

  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = () => {
    dispatch(addComment(value, id))
    setValue('')
  }

  const token = useSelector(state => state.application.token)

  return (
    <div className='flex-block'>
      <div className='typeCom'>
        <input
          className='typeCom__input'
          placeholder='Введите текст'
          value={value}
          onChange={handleChange}
          type="text" />
      </div>
      <div>
        <button
          className='sendBtn'
          disabled={token ? false : true}
          onClick={handleSubmit}>Отправить</button>
      </div>
    </div>
  );
};

export default CreateComments;