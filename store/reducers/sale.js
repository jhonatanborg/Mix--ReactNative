export default function sale(state = [], action) {
  switch (action.type) {
    case "ADD_ITEM_SALE":
      return [...state, action.payload.product];
    case "REMOVE_ITEM_SALE":
      return state.filter((item) => item.id !== action.payload.item.id);
    case "RESET":
      return (state = []);
    default:
      return state;
  }
}
