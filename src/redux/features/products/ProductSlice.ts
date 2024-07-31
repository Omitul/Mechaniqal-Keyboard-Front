import { Product } from "../../../types";
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

    UpdateProduct: builder.mutation({
      query: (data: { id: string; payload: Product }) => ({
        url: `product/${data.id}`,
        method: "PUT",
        body: data.payload,
      }),
      invalidatesTags: ["posts"],
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetProductQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = ProductSlice;
