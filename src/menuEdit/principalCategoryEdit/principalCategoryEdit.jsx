import "./principalCategoryEdit.css";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";
import HeaderEdit from "../headerEdit/headerEdit.jsx";

function PrincipalCategoryEdit(props) {
  const [menuItemsEditP, setMenuItemsEditP] = useState([]);
  const [fetchedCompleteEdit, setFetchedCompletedEdit] = useState(false);
  const [menuItemsFinal, setMenuItemsFinal] = useState([]);
  useEffect(() => {
    const url =
      "https://restaurant-backend-ccq4.onrender.com/meals/" + props.urlType;

    const fetchingData = async () => {
      try {
        const response = await axios.get(url);
        const data = response.data;
        setMenuItemsEditP(data.meals);
        setFetchedCompletedEdit(true);
        console.log("i have fetched meals");
        console.log(menuItemsEditP.category[0].name);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchingData();
  }, []);

  useEffect(() => {
    const transformingArray = () => {
      if (fetchedCompleteEdit) {
        setMenuItemsFinal([{}, ...menuItemsEditP]);
        console.log(menuItemsFinal);
      }
    };

    transformingArray();
  }, []);

  return (
    <div className="principalCategoryEdit">
      <div className="itemsEditPrincipal">
        {menuItemsFinal.map((element, index) =>
          index == 0 ? (
            <div className="addItemsDivEdit" key={index}>
              <h1 className="plusParagraphEdit">+</h1>
              <p className="addDishParagraphEdit">Ajouter nouveau plat</p>
            </div>
          ) : (
            <div className="editElementsDisplay" key={index}>
              <div className="deleteEelementEdit">
                <RiDeleteBin6Line style={{ color: "#FF0001" }} />
              </div>
              <div className="editElementsDisplayContent">
                <img src={element.image} className="editElementsImg" />
                <p className="editElementsTitle">{element.name}</p>
                <p className="editElementsprice">{element.price} DA</p>

                <div className="editElementsDisplayButton">Edit</div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
export default PrincipalCategoryEdit;
