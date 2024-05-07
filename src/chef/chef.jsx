import ServerCall from "./serverCall/serverCall";
import Tables from "./tables/tables";

function Chef() {
  return (
    <div className="chefContent">
      <Tables />
      <ServerCall />
    </div>
  );
}
export default Chef;
