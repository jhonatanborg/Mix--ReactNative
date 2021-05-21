export default function sale(state = [], action) {
  console.log(action);
  switch (action.type) {
    case "ADD_ITEM_SALE":
      const newSale = [...state, action.payload.sale];
      console.log("new sale", newSale);
      return newSale;
    case "REMOVE_ITEM_SALE":
      return state.filter((item, index) => index !== action.payload.index);
    case "RESET":
      return (state = []);
    default:
      return state;
  }
}
