let startState = {
  data: {},
  loading: false
};

export default function homeReducer(state = startState, action) {
  switch (action.type) {
    case "DETAIL_REQUEST":
      return Object.assign({}, state, {
        loading: true,
        data: {}
      });
      break;
    case "DETAIL_SUCCESS":
      return Object.assign({}, state, {
        loading: false,
        data: action.payload
      });
      break;
    case "DETAIL_FAIL":
      return Object.assign({}, state, {
        loading: false,
        data: action.payload
      });
      break;
    default:
      return startState;
      break;
  }
}
