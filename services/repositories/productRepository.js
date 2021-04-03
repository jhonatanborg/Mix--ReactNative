import instance from "../config/config";

export default {
  getComplements: (product_id) =>
    instance({
      method: "GET",
      url: `/product/${product_id}`,
    }),
};
