import { RouterProvider } from 'react-router-dom/dist';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './Component/Route';

function App() {
  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
