import "./headerEdit.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function HeaderEdit(props) {
  const [menuItemsEditPHeader, setMenuItemsEditPHeader] = useState([]);
  const [fetchedCompleted, setFetchedCompleted] = useState(false);
  const [indexItem, setIndexItem] = useState(1);
  const [urlType, setUrlType] = useState(menuItemsEditPHeader[1]);

  const handleClickSpecialCategorie = (index) => {
    setIndexItem(index);

    console.log("(((((((((((((((((((((((" + menuItemsEditPHeader[index]);
    console.log(menuItemsEditPHeader[index]);
    setUrlType(menuItemsEditPHeader[index]);
    props.onCategoryClick(menuItemsEditPHeader[index]); // Call the callback function with the urlType
  };

  useEffect(() => {
    const url =
      "https://restaurant-backend-ccq4.onrender.com/categories/" +
      props.urlType1;

    const fetchingData = async () => {
      try {
        const response = await axios.get(url);
        const data = response.data;
        setMenuItemsEditPHeader(data.category);
        setFetchedCompleted(true);
        console.log("I have fetched");
        console.log(menuItemsEditPHeader);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchingData();
  }, []);

  return (
    <div className="headerEdit">
      {menuItemsEditPHeader.map((element, index) => (
        <div
          className={`categoryEditP ${
            index == indexItem ? "categoryEditPChoosen" : ""
          }`}
          key={index}
          onClick={() => {
            handleClickSpecialCategorie(index);
          }}
        >
          {element.name}
        </div>
      ))}
    </div>
  );
}

export default HeaderEdit;
