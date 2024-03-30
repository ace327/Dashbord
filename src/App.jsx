import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Support from './pages/Support/Support'
import TransactionPage from './pages/Transaction/TransactionPage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transaction",
    element: <TransactionPage />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      
      <div>

      <RouterProvider router={router} />

    
        
      </div>

        
    </>
  )
}

export default App
