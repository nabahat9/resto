import vector from "./Vector.svg";
import money from "./moneyIcon.svg";
import arrow from "./arrow.svg";
import shopping from "./shopping.svg";
import rec from "./rec.svg";
import { useNavigate } from "react-router-dom";
import "./specialCategories.css";
import pizza from "./pizza.svg";
import { useState, useEffect } from "react";

function SpecialCategorie(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  /// fetching data ////
  const [menuItems, setMenuItems] = useState([]);
  const [fetchedComplete, setFetchedCompleted] = useState(false);
  const [ourItems, setOurItems] = useState([[]]);
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
    const appearince = () => {
      const ourItems = [];
      let indexBig = 0;
      while (indexBig < menuItems.length) {
        const row = [];
        let index = 0;
        while (index < 5 && indexBig < menuItems.length) {
          row.push(menuItems[indexBig]);
          index++;
          indexBig++;
        }
        ourItems.push(row);
      }
      setOurItems(ourItems);
      console.log("I have done with our items array");
    };

    if (fetchedComplete) {
      appearince();
    }
  }, [fetchedComplete, menuItems]);

  return (
    <div className="totalPageSpecialCategorie">
      <div className="titleDiv">
        <div className="partOne">
          <button className="backButton" onClick={handleClick}>
            <img src={arrow} />
          </button>
          <p className="titleText">{props.type}</p>
        </div>
        <div className="rightSide">
          <div className="searchInput">
            <img src={vector} className="searchImg"></img>
            <input
              className="searchInputt"
              placeholder="Recherche"
              type="text"
            />
          </div>
        </div>
      </div>
      {fetchedComplete ? (
        <div className="allItems">
          {ourItems.map(
            (
              row,
              rowIndex ///// ourItems contain items to display as a two dimensions array
            ) => (
              <div className="Row" key={rowIndex}>
                {row.map(
                  (
                    item,
                    index ///// totalDiscription are the items to display
                  ) => (
                    <div className="totalDiscription" key={index}>
                      <div className="description">
                        <img
                          src={ourItems[rowIndex][index].src_image}
                          className="pic"
                        />
                        <div>
                          <p className="dish">
                            {ourItems[rowIndex][index].collection_name}
                          </p>
                          <p className="price">
                            {ourItems[rowIndex][index].price} DA
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                )}
                {row.length < 5 && //// im tryint to complete the imcomplete rows with empty divs for css perposes
                  [...Array(5 - row.length)].map((_, index) => (
                    <div
                      className="totalDiscriptionEmpty"
                      key={`empty-${index}`}
                    />
                  ))}
              </div>
            )
          )}
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
export default SpecialCategorie;
