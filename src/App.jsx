import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import { TaskContextProvider } from './store/TaskContext'
import {Toaster} from 'react-hot-toast'
import Dashboard from './components/Dashboard'
import Habit from './pages/Habit'
function App() {
  
  const router=createBrowserRouter([{
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<>Login</>
  },
  {
    path:'/signup',
    element:<>Signup</>
  },
  {
    path:'/habit/:id',
    element:<Habit/>
  },{
    path:'/dashboard',
    element:<Dashboard  />
  },
  {
    path:'*',
    element:<>Not Found</>
  }
])

  return (
    <TaskContextProvider>
      <Toaster/>
      <RouterProvider router={router} />
    </TaskContextProvider>
  )
}

export default App
