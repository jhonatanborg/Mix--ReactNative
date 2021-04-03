export default function company(state = [], action) {
  switch (action.type) {
    case "ADD_COMPANY":
      return [...state];
    default:
      return state;
  }
}
