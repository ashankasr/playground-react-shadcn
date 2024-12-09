import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Pokemon {
  name: string
  type: string
  level: number
}

export const pokemonApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7254/' }),
  endpoints: (builder) => ({
    getPokemons: builder.query<Pokemon[], void>({
      query: () => 'pokemons',
    }),
    getPokemon: builder.query<Pokemon, string>({
      query: (name: string) => `pokemons/${name}`,
    }),
    createPokemon: builder.mutation<Pokemon, Partial<Pokemon>>({
      query: (newPokemon) => ({
        url: 'pokemons',
        method: 'POST',
        body: newPokemon,
      }),
    }),
    updatePokemon: builder.mutation<
      Pokemon,
      { name: string; data: Partial<Pokemon> }
    >({
      query: ({ name, data }) => ({
        url: `pokemons/${name}`,
        method: 'PUT',
        body: data,
      }),
    }),
    deletePokemon: builder.mutation<{ success: boolean }, string>({
      query: (name) => ({
        url: `pokemons/${name}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetPokemonsQuery,
  useGetPokemonQuery,
  useCreatePokemonMutation,
  useUpdatePokemonMutation,
  useDeletePokemonMutation,
} = pokemonApi
