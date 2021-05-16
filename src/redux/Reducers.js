const INITIAL_STATE = {
  loading: false,
  lessons: []
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case 'LOAD':
      return {
        ...state,
        loading: !state.loading
      }

    case 'CREATE':
      return {
        ...state,
        lessons: [...state.lessons, {
          'title': action.payload,
          '_id': Math.floor(Math.random() * 100000),
          'parts': []
        }]
      }

    case 'PART':
      return {
        ...state,
        lessons: action.payload
      }


    default:
      return state;
  }
};
export default reducer;
