import "./header.css";
import vector from "./Vector.svg";
import arrow from "./arrow.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import arrow_left from "./arrow_left.svg";
import arrow_right from "./arrow_right.svg";

function Categories(props) {
  const [menuItems, setMenuItems] = useState([]);
  const [fetchedComplete, setFetchedCompleted] = useState(false);
  const [appearingItems, setAppearingItems] = useState([]);
  const [biggerItem, setBiggerItem] = useState(0);
  const [initialComplete, setInitialComplete] = useState(false);
  const [offset, setOffset] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const url =
      "https://familishop.onrender.com/products/?fbclid=IwAR0pWz-if8zvmrDWG37xqrWMxBmZ1eJiGDArDSsY1-4XjS4Z52hzFSkf_t4";
    const fetchingData = async () => {
      try {
        const fetched = await fetch(url);
        const data = await fetched.json();
        setMenuItems(data);
        setFetchedCompleted(true);
        console.log("i have fetched");
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchingData();
  }, []);

  useEffect(() => {
    const initialAppearance = () => {
      const initialBiggerItem = Math.floor(menuItems.length / 2);
      setBiggerItem(initialBiggerItem);
      const tempAppearingItems = [];
      for (let i = initialBiggerItem - 2; i <= initialBiggerItem + 2; i++) {
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
    if (biggerItem !== menuItems.length - 1) {
      setBiggerItem((prev) =>
        prev === menuItems.length - 1 ? prev : prev + 1
      );
      setAppearingItems((prev) => prev.map((item) => item + 1));
      console.log(menuItems.length);
    }
  };

  const handleLeftMouse = () => {
    if (biggerItem > 0) {
      setBiggerItem((prev) => (prev === 0 ? 0 : prev - 1));
      setAppearingItems((prev) => prev.map((item) => item - 1));
      console.log(menuItems.length);
    }
  };

  /*const handleClickingDiv = (item) => {
    if (item !== biggerItem) {
      setBiggerItem(item);
    }
  };*/

  return (
    <div className="totalPage">
      <div className="titleDiv">
        <div className="partOne">
          <button className="backButton" onClick={() => navigate("/")}>
            <img src={arrow} alt="back" />
          </button>
          <p className="titleText">{props.type}</p>
        </div>
        <div className="rightSide">
          <div className="searchInput">
            <img src={vector} className="searchImg" alt="search" />
            <input
              className="searchInputt"
              placeholder="Recherche"
              type="text"
            />
          </div>
        </div>
      </div>
      {fetchedComplete ? (
        <div className="Itemss">
          <div className="sscrolingItemss">
            <div className="lleftArrow" onClick={handleLeftMouse}>
              <img src={arrow_left} alt="left" />
            </div>

            <div className="rrightArrow" onClick={handleRightMouse}>
              <img src={arrow_right} alt="right" />
            </div>
          </div>

          <div className="itemys">
            <motion.div className={"Items"}>
              {appearingItems.map((item, index) => {
                if (item < 0 || !menuItems[item]) {
                  return (
                    <div className="itemEmpty" key={`empty-${index}`}>
                      <div />
                    </div>
                  );
                } else {
                  const isMiddleItem =
                    index === Math.floor(appearingItems.length / 2);
                  return (
                    <motion.div
                      key={item}
                      className={`item ${isMiddleItem ? "middleItem" : ""}`}
                      initial={{ scale: 1, x: 0 }}
                      animate={{ scale: isMiddleItem ? 1.2 : 1, x: offset }}
                    >
                      <img
                        src={menuItems[item].src_image}
                        className="itemImg"
                        alt="item"
                      />
                      <div
                        className="paragraphSpace"
                        //onClick={handleClickingDiv(item)}
                      >
                        <p className="itemParagraph">
                          {menuItems[item].collection_name}
                        </p>
                      </div>
                    </motion.div>
                  );
                }
              })}
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="loadingDiv">
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
    </div>
  );
}

export default Categories;
