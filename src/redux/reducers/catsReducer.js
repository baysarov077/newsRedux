const initialState = {
  cats: []
}

export const catsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'cats':
      return {
        ...state,
        cats: action.payload
      }
    default:
      return state;
  }
}

export const getCats = () => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:4000/cats/get')
      const cats = await res.json()
      dispatch({ type: 'cats', payload: cats })
    } catch (error) {
      console.log(error);
    }
  }
}
