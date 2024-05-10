import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./home.css";
import React from "react";
import pic1 from "./pic1.png";
import pic2 from "./pic2.png";
import pic3 from "./pic3.png";
import pic4 from "./pic4.png";
import vector1 from "./vect1.svg";
import vector2 from "./vect2.svg";
import vector3 from "./vect3.svg";

function Home() {
  const handleComplain = () => {};

  const handleWaiter = () => {};
  const handleOrder = () => {};
  const navigate = useNavigate();

  const handleClickStarters = () => {
    navigate("/categorie/Les entrees");
  };

  const handleClickDish = () => {
    navigate("/categorie/Les plats principaux");
  };

  const handleClickDrinks = () => {
    navigate("/categorie/Les boissons");
  };

  const handleClickDessert = () => {
    navigate("/categorie/Dessert");
  };
  return (
    <div className="home">
      <div className="paragraphe">
        <h1 className="categoriesParagraphe">NOS CATÉGORIES </h1>
      </div>
      <div className="cate">
        <div className="Categories">
          <div className="beginning">
            <img className="pic1" src={pic1} onClick={handleClickStarters} />
            <div className="buttonDiv">
              <div className="buttonBorder" onClick={handleClickStarters}>
                <button className="button1">Starters </button>
              </div>
            </div>
          </div>

          <div className="dishh">
            <img className="pic2" src={pic2} onClick={handleClickDish} />
            <div className="buttonDiv">
              <div className="buttonBorder" onClick={handleClickDish}>
                <button className="button2">Les plats principaux </button>
              </div>
            </div>
          </div>

          <div className="drinks">
            <img className="pic3" src={pic3} onClick={handleClickDrinks} />
            <div className="buttonDiv">
              <div className="buttonBorder" onClick={handleClickDrinks}>
                <button className="button3">Les boissons </button>
              </div>
            </div>
          </div>

          <div className="desert">
            <img className="pic4" src={pic4} onClick={handleClickDessert} />
            <div className="buttonDiv">
              <div className="buttonBorder" onClick={handleClickDessert}>
                <button className="button4">Les desserts </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons">
        <div className="part1">
          <div className="complaindiv" onClick={handleComplain}>
            <img src={vector1} />
            <button className="complainButton">Se Plaindre</button>
          </div>
        </div>
        <div className="part2">
          <div className="orderdiv" onClick={handleOrder}>
            <img src={vector2} />
            <button className="orderButton">Mes commandes</button>
          </div>
        </div>
        <div className="part3">
          <div className="waiterdiv" onClick={handleWaiter}>
            <img src={vector3} />
            <button className="waiterButton">Appeller Au Serveur</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
