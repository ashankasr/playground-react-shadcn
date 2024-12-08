import { Outlet, Link } from 'react-router-dom'

const BaseLayout = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/pokemons">Pokémons</Link>
        </li>
      </ul>
    </nav>
    <hr />
    <Outlet />
  </div>
)

export default BaseLayout
