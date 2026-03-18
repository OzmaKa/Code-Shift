import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { About } from './components/About'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "*",
    element: <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 - Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)