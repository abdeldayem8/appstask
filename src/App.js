
import './App.css';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Dashbord from './Components/Dashbord/Dashbord';
import Users from './Components/Users/Users'
import Products from './Components/Products/Products';
import Sign from './Components/SignPage/Sign';
import Layout from './Components/Layout/Layout';
import Notfound from './Components/Notfound/Notfound';
import { AuthProvider } from './Context/authnticationContext';
import ProtectedRoute from './Components/ProtectedRoute/Protect';
function App() {

  const router= createHashRouter([
    {path:"/",element:<Layout />,children:[
      {index:true,element: <ProtectedRoute> <Dashbord/> </ProtectedRoute> },
      {path:'dashbord',element: <ProtectedRoute> <Dashbord/> </ProtectedRoute>},
      {path:'users',element: <ProtectedRoute> <Users/> </ProtectedRoute>},
      {path:'products',element: <ProtectedRoute> <Products/> </ProtectedRoute> },
      {path:'signin',element:<Sign/>},
      {path:'*',element:<Notfound/>},
    ]}
  ]);
  return<>
    <AuthProvider>
   <RouterProvider router={router}/>
   </AuthProvider>
  </>
}

export default App;
