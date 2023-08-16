import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserApi = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/Users",
    }),
    addUser: builder.mutation({
      query: (newUser) => ({
        url: "/users",
        method: "POST",
        body: newUser,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method:"DELETE",
      }),
    }),
    // updateUser: builder.mutation({
    //   query: (id, ...User) => ({
    //     url: `users/${id}`,
    //     method: "patch",
    //     body: User,
    //   }),
    // }),
  }),
});

export const {
  useLazyGetAllUsersQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  //   useUpdateUserMutation,
  //   useLAzyGetUserByIdQuery,
} = UserApi;
