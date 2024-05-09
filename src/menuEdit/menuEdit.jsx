import Sider from "./sider/sider";
import "./menuEdit.css";
import PrincipalCategoryEdit from "./principalCategoryEdit/principalCategoryEdit";

function MenuEdit() {
  return (
    <div className="menuEdit">
      <Sider />
      <PrincipalCategoryEdit />
    </div>
  );
}
export default MenuEdit;
