import { methods } from './../../node_modules/http-parser-js/http-parser.d';

import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { IPost } from '../models/IPost';

export const postApi = createApi({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit: number = 5) => ({
                url: '/posts',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Post']
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts`,
                method: "POST",
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        updatePost : build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: "PUT",
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Post']
        })
    })
})