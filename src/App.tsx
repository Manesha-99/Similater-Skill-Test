import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import MainLayout from './layout/MainLayout'
import Homepage from './page/HomePage'
import NotFoundPage from './page/PageNotFound'

const App = () => {
  const router = createBrowserRouter(
      createRoutesFromElements(
          <Route path="/" element={<MainLayout />}>
              <Route index element={<Homepage />} />
              <Route path="*" element={<NotFoundPage />} />
          </Route>
      )
  )

  return <RouterProvider router={router} />
}

export default App
