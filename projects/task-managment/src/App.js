import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddTask from './components/AddTask';
import CompletedTask from './components/CompletedTask';
import InitialTask from './components/InitialTask';
import MyTask from './components/MyTask';
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
          element: <MyTask/>
        },
        {
          path: 'completed-task',
          element: <CompletedTask/>,
          loader: () => fetch('http://localhost:5000/completedTask')
        },
        {
          path: 'add-task',
          element: <AddTask/>
        },
        {
          path: '/signup',
          element: <Signup/>
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
