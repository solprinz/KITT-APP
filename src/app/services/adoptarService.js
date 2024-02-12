import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../../firebase/db";

export const adoptarApi = createApi({
  reducerPath: "adoptarApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  tagTypes: ["image"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `gatos.json`,
    }),
    getProduct: builder.query({
      query: (id) => `gatos/${id}.json`,
    }),
    postProfileImage: builder.mutation({
      query: ({ localId, image }) => ({
        url: `profileImage/${localId}.json`,
        method: "PUT",
        body: { image },
      }),

      invalidatesTags: ["image"],
    }),
    getProfileImage: builder.query({
      query: (localId) => `profileImage/${localId}.json`,
      providesTags: ["image"],
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetProductsQuery,
  usePostProfileImageMutation,
  useGetProfileImageQuery,
} = adoptarApi;
