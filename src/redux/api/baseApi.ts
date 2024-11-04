import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
export const baseApi = createApi({

  reducerPath: "baseApi",
  tagTypes: ['user', 'bike', 'rental'],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bike-rental-reservation-system-backend-teal.vercel.app/api",
    // baseUrl: "http://localhost:5000/api",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
