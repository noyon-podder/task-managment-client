import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>
    }
  ])
  return (
    <div className="max-w-6xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
