import { useEffect } from "react";
import "./table.css";
import { useState } from "react";

function Table(props) {
  let ordersArrayTable = props.tableOrders || [];
  console.log(props.tableOrders); // Set to empty array if null or undefined
  ///////////////// converting an array to a 2 dimensions array ////////////////////
  const [ordersArrayTableMatrix, setOrdersArrayTableMatrix] = useState([]);

  useEffect(() => {
    const convertToTwoDimensionalArray = (items, itemsPerRow) => {
      const result = [];
      for (let i = 0; i < items.length; i += itemsPerRow) {
        result.push(items.slice(i, i + itemsPerRow));
      }
      console.log("i have converted the array to matrix");
      return result;
    };
    setOrdersArrayTableMatrix(
      convertToTwoDimensionalArray(ordersArrayTable, 4)
    );
    console.log("the value is now on the prdersArrayMatrix");
    console.log(ordersArrayTableMatrix);
  }, []); // Include ordersArrayTable in the dependency array

  const handleValidation = () => {
    // Add validation logic here
  };

  return (
    <div className="totalPageTable">
      {ordersArrayTableMatrix.map((row, rowIndex) => (
        <div className="tableItem" key={rowIndex}>
          <div className="stickItem">
            <div className="stickItemLeft"></div>
            <div className="stickItemRight"></div>
          </div>
          <div className="noteStickContent">
            <div className="noteStickContentInside">
              {rowIndex === 0 ? (
                <h1 className="tableNumberTitle">Table {props.tableNumber}</h1>
              ) : (
                <div className="emptyDiv"></div>
              )}
              {row.map((meal, mealIndex) => (
                <div className="mealContent" key={`${rowIndex}-${mealIndex}`}>
                  <img
                    src={meal.mealPic}
                    className="mealPicture"
                    alt={meal.mealName}
                  />
                  <div className="mealDescreptionTable">{meal.mealName}</div>
                  <div className="additionsMealDiv">+</div>
                  <div className="quantityMealDiv">{meal.mealQuantity}</div>
                </div>
              ))}
              {[...Array(Math.max(0, 4 - row.length))].map((_, emptyIndex) => (
                <div
                  className="mealContent"
                  key={`empty-${rowIndex}-${emptyIndex}`}
                >
                  <div className="emptyMeal"></div>
                </div>
              ))}

              {rowIndex === 0 ? (
                <div className="validationTableDiv" onClick={handleValidation}>
                  <p>Valider</p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Table;
