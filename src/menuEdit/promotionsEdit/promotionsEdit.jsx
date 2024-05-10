import "./promotionsEdit.css";
import { useState } from "react";
import { useEffect } from "react";

function PromotionsEdit() {
  const [basicPromotionValue, setBasicPromotionValue] = useState(0);
  const [silverPromotionValue, setSilverPromotionValue] = useState(0);
  const [goldenPromotionValue, setGoldenPromotionValue] = useState(0);
  const [platinuimPromotionValue, setPlatinuimPromotionValue] = useState(0);
  const [diamondPromotionValue, setDiamondPromotionValue] = useState(0);

  const handleClickMoinBasic = () => {
    if (basicPromotionValue > 0) {
      setBasicPromotionValue((prev) => prev - 1);
    }
  };
  const handleClickMoinSilver = () => {
    if (silverPromotionValue > 0) {
      setSilverPromotionValue((prev) => prev - 1);
    }
  };
  const handleClickMoinGolden = () => {
    if (goldenPromotionValue > 0) {
      setGoldenPromotionValue((prev) => prev - 1);
    }
  };
  const handleClickMoinPlatinuim = () => {
    if (platinuimPromotionValue > 0) {
      setPlatinuimPromotionValue((prev) => prev - 1);
    }
  };
  const handleClickMoinDiamond = () => {
    if (diamondPromotionValue > 0) {
      setDiamondPromotionValue((prev) => prev - 1);
    }
  };
  //////////// add functions
  const handleClickAddBasic = () => {
    if (basicPromotionValue < 100) {
      setBasicPromotionValue((prev) => prev + 1);
    }
  };
  const handleClickAddSilver = () => {
    if (silverPromotionValue < 100) {
      setSilverPromotionValue((prev) => prev + 1);
    }
  };
  const handleClickAddGolden = () => {
    if (goldenPromotionValue < 100) {
      setGoldenPromotionValue((prev) => prev + 1);
    }
  };
  const handleClickAddPlatinuim = () => {
    if (platinuimPromotionValue < 100) {
      setPlatinuimPromotionValue((prev) => prev + 1);
    }
  };
  const handleClickAddDiamond = () => {
    if (diamondPromotionValue < 100) {
      setDiamondPromotionValue((prev) => prev + 1);
    }
  };
  return (
    <div className="promotionsEditing">
      <p className="promotionsEditingFirstParagraph">
        Précisez le pourcentage de réduction que vous ajoutez à chaque niveau,
        ce qui réduira le prix total pour le client fidèle
      </p>
      <div className="promotionsListEdit">
        <div className="promotionItemEditBasic">
          <div className="promotionItemEditBasicContent">
            <img
              src="src\menuEdit\menuEditAssets\bxs_offer.png"
              className="imagePromotionItemEdit"
            />
            <div className="addMoinPromotionItemEdit">
              <div
                className="addMoinPromotionItemPara"
                onClick={handleClickMoinBasic}
              >
                -
              </div>
              <p className="promotionValueParagraph">{basicPromotionValue}%</p>
              <div
                className="addMoinPromotionItemPara"
                onClick={handleClickAddBasic}
              >
                +
              </div>
            </div>
          </div>
          <div className="promotionItemEditSub">Niveau Basic</div>
        </div>
        <div className="promotionItemEditSilver">
          <div className="promotionItemEditSilverContent">
            <img
              src="src\menuEdit\menuEditAssets\bxs_offer.png"
              className="imagePromotionItemEdit"
            />
            <div className="addMoinPromotionItemEdit">
              <div
                className="addMoinPromotionItemPara"
                onClick={handleClickMoinSilver}
              >
                -
              </div>
              <p className="promotionValueParagraph">{silverPromotionValue}%</p>
              <div
                className="addMoinPromotionItemPara"
                onClick={handleClickAddSilver}
              >
                +
              </div>
            </div>
          </div>
          <div className="promotionItemEditSub">Niveau Silver</div>
        </div>
        <div className="promotionItemEditGolden">
          <div className="promotionItemEditGoldenContent">
            <img
              src="src\menuEdit\menuEditAssets\bxs_offer.png"
              className="imagePromotionItemEdit"
            />
            <div className="addMoinPromotionItemEdit">
              <div
                className="addMoinPromotionItemPara"
                onClick={handleClickMoinGolden}
              >
                -
              </div>
              <p className="promotionValueParagraph">{goldenPromotionValue}%</p>
              <div
                className="addMoinPromotionItemPara"
                onClick={handleClickAddGolden}
              >
                +
              </div>
            </div>
          </div>
          <div className="promotionItemEditSub">Niveau Golden</div>
        </div>
        <div className="promotionItemEditPlatinuim">
          <div className="promotionItemEditPlatinuimContent">
            <img
              src="src\menuEdit\menuEditAssets\bxs_offer.png"
              className="imagePromotionItemEdit"
            />
            <div className="addMoinPromotionItemEdit">
              <div
                className="addMoinPromotionItemPara"
                onClick={handleClickMoinPlatinuim}
              >
                -
              </div>
              <p className="promotionValueParagraph">
                {platinuimPromotionValue}%
              </p>
              <div
                className="addMoinPromotionItemPara"
                onClick={handleClickAddPlatinuim}
              >
                +
              </div>
            </div>
          </div>
          <div className="promotionItemEditSub">Niveau Platinuim</div>
        </div>
        <div className="promotionItemEditDiamond">
          <div className="promotionItemEditDiamondContent">
            <img
              src="src\menuEdit\menuEditAssets\bxs_offer.png"
              className="imagePromotionItemEdit"
            />
            <div className="addMoinPromotionItemEdit">
              <div
                className="addMoinPromotionItemPara"
                onClick={handleClickMoinDiamond}
              >
                -
              </div>
              <p className="promotionValueParagraph">
                {diamondPromotionValue}%
              </p>
              <div
                className="addMoinPromotionItemPara"
                onClick={handleClickAddDiamond}
              >
                +
              </div>
            </div>
          </div>
          <div className="promotionItemEditSub">Niveau Diamond</div>
        </div>
      </div>
    </div>
  );
}
export default PromotionsEdit;
