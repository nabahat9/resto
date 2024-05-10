import Sider from "./sider/sider";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./menuEdit.css";
import PrincipalCategoryEdit from "./principalCategoryEdit/principalCategoryEdit";
import HeaderEdit from "./headerEdit/headerEdit";
import SubButtonEdit from "./subButtonEdit/subButtonEdit";
import PromotionsEdit from "./promotionsEdit/promotionsEdit";

function MenuEdit() {
  const [urlType, setUrlType] = useState("");
  console.log("here is the url " + urlType);
  const [promotionOrDish, setPromotionOrDish] = useState("Promotions");
  return promotionOrDish === "Promotions" ? (
    // Render this block if promotionOrDish is "Promotions"
    <div className="PromotionEdit">
      <Sider />
      <div className="contentEditPromotion">
        <PromotionsEdit />
        <SubButtonEdit />
      </div>
    </div>
  ) : (
    // Render this block if promotionOrDish is not "Promotions"
    <div className="menuEdit">
      <Sider />
      <div className="contentEditMenu">
        <HeaderEdit
          onCategoryClick={(urlType) => setUrlType(urlType)}
          urlType1="Les entrees"
        />
        <PrincipalCategoryEdit urlType={urlType} />
        <SubButtonEdit />
      </div>
    </div>
  );
}
export default MenuEdit;
