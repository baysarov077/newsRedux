import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addComment } from '../redux/reducers/commentsReducer';

const CreateComments = () => {

  const {id} = useParams()
  
  const dispatch = useDispatch()

  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = () => {
    dispatch(addComment(value, id))
    setValue('')
  }

  return (
    <div>
      <div className='typeCom'>
        <input 
          placeholder='Введите текст'
          value={value}
          onChange={handleChange}
          type="text" />
      </div>
      <div>
        <button onClick={handleSubmit}>Отправить</button>
      </div>
    </div>
  );
};

export default CreateComments;