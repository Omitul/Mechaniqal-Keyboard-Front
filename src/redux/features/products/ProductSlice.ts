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
      query: (id: string) => ({
        url: `product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["posts"],
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetProductQuery,
  useDeleteProductMutation,
} = ProductSlice;
