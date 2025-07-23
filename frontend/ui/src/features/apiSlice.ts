
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export type Topic = {
  _id: string;
  title: string;
  type: string;
};

type Content = {
  sections: Array<{
    heading: string;
    content: string | string[];
    subsections?: Array<{
      subheading: string;
      content: string | string[];
      code?: string;
    }>;
  }>;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/topics' }),
  endpoints: (builder) => ({
    getTopics: builder.query<Topic[], void>({
      query: () => '',
    }),
    getContent: builder.query<Content, string>({
      query: (title) => `/data/${title}`,
    }),
    

  }),
});


export const { useGetTopicsQuery, useLazyGetContentQuery } = apiSlice;