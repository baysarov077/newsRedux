const initialState = {
  news: [],
  loading: true
}

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'allNews':
      return {
        ...state,
        news: action.payload,
        loading: false
      }
    case 'pending':
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

export const loadNews = () => {
  return async (dispatch) => {
    dispatch({ type: 'pending' })
    try {
      const res = await fetch('http://localhost:4000/news')
      const news = await res.json()
      dispatch({ type: 'allNews', payload: news })
    } catch (e) {
      console.log(e);
    }
  }
}