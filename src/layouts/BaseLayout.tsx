import { AppSidebar } from '@/components/AppSidebar/AppSidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { Outlet } from 'react-router-dom'

const BaseLayout = (): JSX.Element => (
  //   <div>
  //     <nav>
  //       <ul>
  //         <li>
  //           <Link to="/">Home</Link>
  //         </li>
  //         <li>
  //           <Link to="/about">About</Link>
  //         </li>
  //         <li>
  //           <Link to="/pokemons">Pokémons</Link>
  //         </li>
  //       </ul>
  //     </nav>
  //     <hr />
  //     <Outlet />
  //   </div>
  <div>
    <SidebarProvider>
      <AppSidebar />
      <Outlet />
    </SidebarProvider>
  </div>
)

export default BaseLayout
