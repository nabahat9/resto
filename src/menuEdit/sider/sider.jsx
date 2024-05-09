import { useState } from "react";
import "./sider.css";

function Sider() {
  const [principalCategoriesVisible, setPrincipalCategoriesVisible] =
    useState(false);
  const [visibleItems, setVisibleItems] = useState("les entrées");
  const [visibleItemsPrincipal, setVisibleItemsPrincipal] = useState(
    "Les plats principaux"
  );
  const handlePrincipalCategories = () => {
    setPrincipalCategoriesVisible(!principalCategoriesVisible);
    setVisibleItemsPrincipal("Les plats principaux");
  };
  const principalCategories = [
    "Les entrées",
    "Les plats principaux",
    "Les boissons",
    "Desserts",
  ];

  const handleClickPromotions = () => {
    setVisibleItemsPrincipal("Promotions");
    console.log("promotions");
    setVisibleItems("");
  };
  const handlePrincipalCategoriesItem = (item) => {
    setVisibleItemsPrincipal("Les plats principaux");
    setVisibleItems(item);
    console.log(item);
  };
  return (
    <div className="sider">
      <div className="editText">
        <p>ÉDITER LE MENU </p>
      </div>
      <div className="editionItemList">
        <div className="principalCategoriesEdit">
          <div
            onClick={handlePrincipalCategories}
            className={`principalCategoriesSelf ${
              visibleItemsPrincipal == "Les plats principaux"
                ? "chosenPrincipal"
                : ""
            }`}
          >
            <p>Les plats Principale</p>
            {principalCategoriesVisible ? (
              <img src="C:\Users\nabah\restaurant_Project\src\menuEdit\menuEditAssets\_.png" />
            ) : null}
          </div>
          {principalCategoriesVisible
            ? principalCategories.map((element, index) => (
                <div
                  key={index}
                  className={`principalCategoriesItem ${
                    visibleItems == element ? "chosen" : ""
                  }`}
                  onClick={() => handlePrincipalCategoriesItem(element)}
                >
                  {element}
                </div>
              ))
            : null}
        </div>

        <div
          className={`promotionsEdit ${
            visibleItemsPrincipal == "Promotions" ? "chosenPrincipal" : ""
          }`}
          onClick={handleClickPromotions}
        >
          <p>Les promotions</p>
        </div>
      </div>
    </div>
  );
}
export default Sider;
