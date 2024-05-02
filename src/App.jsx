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
          path="/categorie"
          element={<Categories type="les plas principaux" />}
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
