import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

//Pages
import Nosotros from './pages/Nosotros'
import Noticias from './pages/Noticias'
import ItemList from "./components/ItemList/ItemList";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout/>}>
        <Route index element={<ItemListContainer/>}/>
        <Route path={"nosotros"} element={<Nosotros/>}/>
        <Route path={"noticias"} element={<Noticias/>}/>
        <Route path={"category"} element={''}/>
        <Route path={"category/:categoryId"} element={<ItemList/>}/>

        <Route path={"item/:itemId"} element={<ItemDetailContainer/>}/>
        <Route path="*" element={(
          <h1>404</h1>
        )}/>
      </Route>
    </Routes>
  );
}

export default App;
