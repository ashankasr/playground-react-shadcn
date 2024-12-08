import { Link } from 'react-router-dom'
import { useGetPokemonsQuery } from '../../services/pokemonApi'

const PokemonsPage = () => {
  const { data, error, isLoading } = useGetPokemonsQuery()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error fetching pokemons</div>

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {data?.map((pokemon, index) => (
          <li key={index}>
            <Link to={`/pokemons/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PokemonsPage
