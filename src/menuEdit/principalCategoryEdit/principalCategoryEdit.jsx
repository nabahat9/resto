import "./principalCategoryEdit.css";

function PrincipalCategoryEdit() {
  return (
    <div className="principalCategoryEdit">
      <div className="headerEdit"></div>
      <div className="itemsEditPrincipal">
        <div className="addItemsDivEdit"></div>
        <div className="editElementsDisplay">
          <img src="https://i.im.ge/2024/05/01/ZyfKOT.image-removebg-preview.png" />
          <p className="editElementsDisplayTitle">Pizza Regina</p>
          <p className="editElementsDisplayPrice">500 DA</p>
          <div className="editElementsDisplayButton">Edit</div>
        </div>
      </div>
      <div className="buttonsEditPrincipal">
        <div className="annulerButtonEdit">Annuler les modifications</div>
        <div className="sauvegarderButtonEdit">Sauvegarder</div>
      </div>
    </div>
  );
}
export default PrincipalCategoryEdit;
