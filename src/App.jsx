// App.js

import React from "react";
import NavBar from "./navBar/NavBar";
import Home from "./components/home/home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import SspecialCategorie from "./components/sspecialCategorie/sspecialCategorie";
import Categories from "./components/header/categories";
import { useEffect } from "react";
import { useState } from "react";
import SpecialCategorie from "./components/specialCategories/specialCtegorieOne";
import Apropos from "./aboutUs/Apropos.jsx";
import Chef from "./chef/chef.jsx";
import MenuEdit from "./menuEdit/menuEdit.jsx";

function App() {
  const [myData, setMyData] = useState([]);
  const url =
    "https://familishop.onrender.com/products/?fbclid=IwAR0pWz-if8zvmrDWG37xqrWMxBmZ1eJiGDArDSsY1-4XjS4Z52hzFSkf_t4";

  useEffect(() => {
    const fetching = async () => {
      const fetched = await fetch(url);
      const data = await fetched.json();
      console.log("ihave changed");
      setMyData(data);
    };
    fetching();
  }, [url]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home bg="transparent" />} />
        <Route
          path="/categorie/Les entrees"
          element={<Categories type="Les entrées" urlType="Les entrees" />}
        />
        <Route
          path="/categorie/Les plats principaux"
          element={
            <Categories
              type="Les plats principaux"
              urlType="Les plats principaux"
            />
          }
        />
        <Route
          path="/categorie/Les boissons"
          element={<Categories type="Les boissons" urlType="Les boissons" />}
        />
        <Route
          path="/categorie/Dessert"
          element={<Categories type="Dessert" urlType="Dessert" />}
        />
        <Route
          path="/specialCategorie"
          element={<SpecialCategorie type="Les pizzas" />}
        />
        <Route
          path="/sspecialCategorie"
          element={
            <>
              <SspecialCategorie myData={myData[0]} type="Les pizzas" />
            </>
          }
        />
        <Route path="/aboutUs" element={<Apropos />} />
        <Route path="/chef" element={<Chef />} />
        <Route path="/menuEdit" element={<MenuEdit />} />
      </Route>
    )
  );
  return (
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/" element={<Home bg="transparent" />} />
    //       <Route
    //         path="/categorie"
    //         element={<Categories type="les plas principaux" />}
    //       />
    //       <Route
    //         path="/specialCategorie"
    //         element={<SpecialCategorie type="Les pizzas" />}
    //       />
    //       <Route
    //         path="/sspecialCategorie"
    //         element={
    //           <>
    //             <SspecialCategorie myData={myData[0]} type="Les pizzas" />
    //           </>
    //         }
    //       />
    //       <Route path="/aboutUs" element={<Apropos/>}/>
    //     </Routes>
    //   </div>
    // </Router>
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
