export const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  education: "",
  quantity: 0,
  feedback: "",
  term: false,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { ...state, [action.payload.name]: action.payload.value };
    case "TOGGLE":
      return { ...state, term: !state.term };
    case "INCREASE":
      return { ...state, quantity: state.quantity + 1 };
    case "DECREASE":
      return { ...state, quantity: state.quantity - 1 };
    default:
      return state;
  }
};
