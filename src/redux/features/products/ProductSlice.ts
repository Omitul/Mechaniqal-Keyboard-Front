import { baseApi } from "../../api/baseApi";

export const ProductSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    AddProduct: builder.mutation({
      query: (payload) => ({
        url: "products",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["posts"],
    }),

    GetProduct: builder.query({
      query: () => ({
        url: "products",
        method: "GET",
      }),
      providesTags: ["posts"],
    }),

    DeleteProduct: builder.mutation({
      query: (id) => ({
        url: `product/:${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetProductQuery,
  useDeleteProductMutation,
} = ProductSlice;
