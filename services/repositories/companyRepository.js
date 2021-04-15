import instance from "../config/config";
export default {
  getCompanies: () =>
    instance({
      method: "GET",
      url: "/company",
    }).catch((error) => console.log(error)),
  getCompany: (id) =>
    instance({
      method: "GET",
      url: `/company-show-one/${id}`,
    }),
  getCategories: () =>
    instance({
      method: "GET",
      url: `/company-category/?onycategories=true`,
    }),
};
