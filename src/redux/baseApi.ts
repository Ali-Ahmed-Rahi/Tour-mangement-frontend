import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";
// import config from "@/config";


export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery(),
  // baseQuery: fetchBaseQuery({
  //   baseUrl:config.baseUrl,
  //   credentials:"include"
  // }),
  tagTypes:["USER","TOUR"],
  endpoints: () => ({}),
});