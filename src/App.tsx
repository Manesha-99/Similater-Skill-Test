import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import MainLayout from './layout/MainLayout'

const App = () => {
  const router = createBrowserRouter(
      createRoutesFromElements(
          <Route path="/" element={<MainLayout />}>
              
          </Route>
      )
  )

  return <RouterProvider router={router} />
}

export default App
