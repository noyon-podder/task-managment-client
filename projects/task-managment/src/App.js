import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddTask from './components/AddTask';
import CompletedTask from './components/CompletedTask';
import InitialTask from './components/InitialTask';
import Login from './components/Login';
import MyTask from './components/MyTask';
import PrivateRoute from './components/PrivateRoute';
import Signup from './components/Signup';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <InitialTask/>
        },
        {
          path: '/my-task',
          element: <PrivateRoute><MyTask/></PrivateRoute>
        },
        {
          path: 'completed-task',
          element: <PrivateRoute><CompletedTask/></PrivateRoute>,
          loader: () => fetch('http://localhost:5000/completedTask')
        },
        {
          path: 'add-task',
          element: <PrivateRoute><AddTask/></PrivateRoute>
        },
        {
          path: '/signup',
          element: <Signup/>
        },
        {
          path: '/login',
          element: <Login/>
        }
      ]
    }
  ])
  return (
    <div className="max-w-6xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
