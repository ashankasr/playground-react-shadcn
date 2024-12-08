import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import PokemonsPage from './pages/pokemons/PokemonsPage'
import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/AboutPage'
import BaseLayout from './layouts/BaseLayout'
import PokemonDetailPage from './pages/pokemons/PokemonDetailPage'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="pokemons" element={<PokemonsPage />} />
            <Route path="pokemons/:name" element={<PokemonDetailPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
