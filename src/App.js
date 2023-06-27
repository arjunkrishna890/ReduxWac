
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Product from './component/product';
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route,Routes,Router} from 'react-router-dom';
import Dashboard from './component/dashboard';
import Cart from './component/cart';
import Rootlayout from './component/Rootlayout';
import NavbarPanel from './component/NavbarPanel';
import { Provider } from 'react-redux';
import store from './component/store/store';
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Rootlayout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Route>
  ))
  return (
    <div className="App">
            <Provider store={store}>
              <RouterProvider router={router}/>
            </Provider>
    
    </div>
  );
}

export default App;
