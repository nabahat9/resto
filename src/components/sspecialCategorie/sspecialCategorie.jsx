import { useNavigate } from "react-router-dom";
import arrow from "./arrow.svg";
import pizzaPic from "./pizzaPic.svg";
import "./sspecialCategorie.css";
import icon from "./icon.svg";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Additions from "./additions";

function SspecialCategorie({ myData, type }) {
  /////additions ////
  const [selected, setSelected] = useState("Small");
  const [additions, setadditions] = useState([]);
  const [myorder, setMyorder] = useState({
    size: "",
    additions: [],
  });
  console.log(myorder.size);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const [quantity, setQuantity] = useState(0);
  const handlePlus = () => {
    setQuantity((prev) => {
      setQuantity(prev + 1);
    });
  };

  const handleMoin = () => {
    setQuantity((prev) => {
      if (prev > 0) {
        setQuantity(prev - 1);
      } else {
        setQuantity(prev);
      }
    });
  };

  //// fetching data ///////

  return (
    <div className="totalPagee">
      <div className="backgroundImage">
        <div className="headerr">
          <div className="partOne">
            <button className="backButton" onClick={handleClick}>
              <img src={arrow} />
            </button>
            <p className="titleTextoo">{type}</p>
          </div>
        </div>
        <div className="contentPage">
          <div className="imagePart">
            <div className="picDiv">
              <img src={pizzaPic} />
            </div>
            <div className="addDiv">
              <div className="add">
                <button className="buttonQuantity" onClick={handleMoin}>
                  -
                </button>
                <p className="quantityPara">{quantity}</p>
                <button className="buttonQuantity" onClick={handlePlus}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="discriptionPart">
            <div>
              <p className="name">Pizza Margherita</p>
              <p className="discription">
                embodies the quintessence of Italian cuisine, boasting a thin
                crust topped with tangy tomato sauce, creamy mozzarella cheese,
                and fresh basil leaves. This timeless delight is an essential
                Italian classic, capturing the essence of culinary excellence..
              </p>
              <p className="ingredient">ingredient</p>
              <p className="igredinetsItem">
                Olives, Tomato Sauce, Mozzarella Cheese, Fresh Basil
              </p>

              <div className="commandeDiv">
                <div className="commande">
                  <img src={icon} />
                  <p className="commanderr">Ajouter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Additions />
      </div>
    </div>
  );
}
export default SspecialCategorie;
