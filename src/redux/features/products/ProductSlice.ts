import { baseApi } from "../../api/baseApi";

export const ProductSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    AddProduct: builder.mutation({
      query: (payload) => ({
        url: "products",
        method: "POST",
        body: payload,
      }),
    }),

    GetProduct: builder.query({
      query: () => ({
        url: "products",
        method: "GET",
      }),
    }),
  }),
});

export const { useAddProductMutation, useGetProductQuery } = ProductSlice;
