import "./additions.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import arrow_left from "./arrow_left.svg";
import arrow_right from "./arrow_right.svg";
import add from "./add.svg";
import moin from "./moin.svg";

function Additions(props) {
  const [isVisibleAdittions, setIsVisibleAdditions] = useState(false);

  const handleClickAddditions = () => {
    setIsVisibleAdditions(!isVisibleAdittions);
    console.log(isVisibleAdittions);
  };
  const [menuItems, setMenuItems] = useState([]);
  const [fetchedComplete, setFetchedCompleted] = useState(false);
  const [appearingItems, setAppearingItems] = useState([]);
  const [initialComplete, setInitialComplete] = useState(false);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const url =
      "https://familishop.onrender.com/products/?fbclid=IwAR0pWz-if8zvmrDWG37xqrWMxBmZ1eJiGDArDSsY1-4XjS4Z52hzFSkf_t4";
    const fetchingData = async () => {
      try {
        const fetched = await fetch(url);
        const data = await fetched.json();
        setMenuItems(data);
        console.log("Data fetched successfully");
        setFetchedCompleted(true);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchingData();
  }, []);
  useEffect(() => {
    const initialAppearance = () => {
      const tempAppearingItems = [];
      for (let i = 0; i < 5; i++) {
        if (i >= 0 && i < menuItems.length) {
          tempAppearingItems.push(i);
        }
      }
      setAppearingItems(tempAppearingItems);
      setInitialComplete(true);
    };
    initialAppearance();
  }, [fetchedComplete]);

  const handleRightMouse = () => {
    console.log("maybe i will be clicked");
    if (appearingItems[4] < menuItems[menuItems.length - 1]) {
      setAppearingItems((prev) => prev.map((item) => item + 1));
      console.log("right mouse clicked");
      console.log(appearingItems[4]);
    }
  };

  const handleLeftMouse = () => {
    console.log("maybe i will be clicked");
    if (appearingItems[0] > menuItems[0])
      setAppearingItems((prev) => prev.map((item) => item - 1));
    console.log("left mouse clicked");
    console.log(appearingItems[4]);
  };

  return (
    <div className="additions">
      {isVisibleAdittions ? ( /////////// if its visible
        <motion.div className="visibleAdditions">
          <motion.div
            onClick={handleClickAddditions}
            className="LesAdditions"
            initial={{ y: "100%" }}
            animate={{ y: "-264px" }}
          >
            <p className="lesAdditions">Les additions</p>
          </motion.div>
          <motion.div
            className="additionsListo"
            style={{
              justifyContent: fetchedComplete ? "space-between" : "center",
            }}
          >
            {fetchedComplete ? (
              <div>
                <div className="sscrolingItemss">
                  <div className="leftArrow" onClick={handleLeftMouse}>
                    <img src={arrow_left} alt="left" />
                  </div>

                  <div className="rightArrow" onClick={handleRightMouse}>
                    <img src={arrow_right} alt="right" />
                  </div>
                </div>
                <motion.div className={"additionItems"}>
                  {initialComplete &&
                    appearingItems.map((item, index) => {
                      if (item < 0 || !menuItems[item]) {
                        return null;
                      } else {
                        return (
                          <motion.div key={item} className="itemm">
                            <div className="paragraphDive">
                              <p className="additionName">
                                {menuItems[item].collection_name}
                              </p>
                              <p className="additionPrice">
                                {menuItems[item].price} DA
                              </p>
                            </div>
                            <div className="imageDive">
                              <img
                                src={menuItems[item].src_image}
                                className="itemImgg"
                                alt="item"
                              />
                            </div>
                            <div className="quantityDiv">
                              <img src={moin} className="moinadditionButton" />
                              <p className="quantityPara">{quantity}</p>
                              <img src={add} className="addadditionButton" />
                            </div>
                          </motion.div>
                        );
                      }
                    })}
                </motion.div>
              </div>
            ) : (
              <div className="loadingDivv">
                <div class="lds-default">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            )}
          </motion.div>{" "}
          ///////// here we are closing
        </motion.div>
      ) : (
        <motion.div
          onClick={handleClickAddditions}
          className="LesAdditions"
          initial={{ y: "100%" }}
          animate={{ y: "0" }}
        >
          <p className="lesAdditions">Les additions</p>
        </motion.div>
      )}
    </div>
  );
}
export default Additions;
