const initialState = {
  comments: []
}

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'getComments':
      return {
        ...state,
        comments: action.payload
      }
    case 'comment':
      return {
        ...state,
        comments: [
          ...state.comments,
          action.payload
        ]
      }
    case 'remove':
      return {
        ...state,
        comments: state.comments.filter(item => action.payload !== item.id)
      }
    default:
      return state;
  }
}

export const getComments = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:4000/comments/${id}`)
      const com = await res.json()

      dispatch({ type: 'getComments', payload: com })
    } catch (error) {
      dispatch({ type: 'error', payload: error })

    }
  }
}

export const addComment = (value, id) => {
  return async (dispatch, getState) => {
    const state = getState()
    try {
      const res = await fetch(`http://localhost:4000/comments/${id}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${state.application.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: value,
        })
      })
      const data = await res.json()
      console.log(data);
      dispatch({ type: 'comment', payload: data })
    } catch (error) {
      console.log(error);
    }
  }
}

export const delCom = (id) => {
  return async (dispatch) => {
    try {
      await fetch(`http://localhost:4000/comments/${id}`, {
        method: 'DELETE'
      })
      dispatch({ type: 'remove', payload: id })
    } catch (error) {
      console.log(error);
    }
  }
}