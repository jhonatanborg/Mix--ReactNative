export const addItem = (item) => ({
  type: "ADD_ITEM_SALE",
  payload: item,
});
export const removeItem = (item) => ({
  type: "REMOVE_ITEM_SALE",
  payload: item,
});
export const reseteSale = () => ({
  type: "RESETE",
  payload: [],
});
