export default function company(state = [], action) {
  switch (action.type) {
    case "ADD_COMPANIES":
      return (state.company = action.payload);
    default:
      return state;
  }
}
