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

    default:
      return state;
  }
};
export default reducer;
