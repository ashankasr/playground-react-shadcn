import { useParams } from 'react-router-dom'
import { useGetPokemonQuery } from '../../services/pokemonApi'

const PokemonDetailPage = (): JSX.Element => {
  const { name } = useParams()
  const { data: pokemon, isLoading, error } = useGetPokemonQuery(name || '')

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: Unable to fetch Pokemon details.</div>

  return (
    <>
      {pokemon !== undefined ? (
        <div>
          <h1>{pokemon.name}</h1>
          <p>Level: {pokemon?.level}</p>
          <p>Type: {pokemon?.type}</p>
        </div>
      ) : (
        <div>No Pokemon details available.</div>
      )}
    </>
  )
}

export default PokemonDetailPage
