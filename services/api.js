import axios from "axios";
const instance = axios.create({
  baseURL: "https://server.mixentregas.com.br/",
});
const test = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
export default {
  callAPIPosts: () =>
    test({
      method: "GET",
      url: "/posts",
    }),
  getDataCompany: () =>
    instance({
      method: "GET",
      url: "/company-show/tarumas.acainoquintal.com.br,-11.8610343,-55.5109372",
    }),
  getComplements: (product_id) =>
    instance({
      method: "GET",
      url: `/product/${product_id}`,
    }),
  postData: () =>
    instance({
      method: "POST",
      url: "/api",
      data: {
        item1: "data1",
        item2: "item2",
      },
      headers: {
        "content-type": "application/json", // override instance defaults
      },
    }),
};
