import { log } from "react-native-reanimated";
import { createStore } from "redux";
const INITIAL_STATE = {
  categorieActive: false,
  companies: [],
  categorie: [],
  sale: [],
};

function reducer(state = INITIAL_STATE, action) {
  if (action.type === "SET_CATEGORIE_FILTER") {
    return { ...state, categorieActive: action.categorie };
  }
  if (action.type === "SET_COMPANIES") {
    return { ...state, companies: action.companies };
  }
  if (action.type === "SET_SALE") {
    INITIAL_STATE.sale.push(action.product);
    return { ...state };
  }

  console.log(state);

  return state;
}
const store = createStore(reducer);

export default store;
