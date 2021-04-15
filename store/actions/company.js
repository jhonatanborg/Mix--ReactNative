export const addCompany = (companies) => ({
  type: "ADD_COMPANIES",
  payload: companies,
});
export const filterCommpanies = (companies) => ({
  type: "SET_CATEGORIE_FILTER",
  payload: companies,
});
