import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import { configureStore } from '@reduxjs/toolkit'
import { pokemonApi } from './services/pokemonApi.ts'
import { ApiProvider } from '@reduxjs/toolkit/query/react'

// // Create the Redux store
// const store = configureStore({
//   reducer: {
//     [api.reducerPath]: api.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(api.middleware),
// })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApiProvider api={pokemonApi}>
      <App />
    </ApiProvider>
  </StrictMode>
)
