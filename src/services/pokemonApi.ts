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
  }),
})

export const { useGetPokemonsQuery, useGetPokemonQuery } = pokemonApi
