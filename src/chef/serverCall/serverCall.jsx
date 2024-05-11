import { useEffect } from "react";
import "./serverCall.css";
import { useState } from "react";

function ServerCall(props) {
  const [tablesCalling, setTableCalling] = useState([1, 4, 10, 5, 7]);
  let numberOfCommandes = 4;
  const handleClickTable = (itemToDelete) => {
    const updatedItems = [...tablesCalling];
    const indexToDelete = updatedItems.indexOf(itemToDelete);
    if (indexToDelete !== -1) {
      updatedItems.splice(indexToDelete, 1);
      // Update state with the new array
      setTableCalling(updatedItems);
    }
  };

  return (
    tablesCalling.length > 0 && (
      <div className="footPart">
        <div className="serverCallDiv">
          <div className="epliseServerCall">
            <img
              src="src/chef/chefAssets/notification.png"
              alt="notification"
            />
          </div>
          <div className="greyDivCallServer">
            {tablesCalling.map((item, index) => (
              <div
                className="tableCallServer"
                key={index}
                onClick={() => handleClickTable(item)}
              >
                <div className="tableNumCallServer">{item}</div>
                <img src="src/chef/chefAssets/tablePic.png" alt="table" />
              </div>
            ))}
          </div>
        </div>
        {numberOfCommandes > 0 && (
          <div className="commandesNotification">
            {numberOfCommandes > 4
              ? "+ 4 Commandes"
              : `${numberOfCommandes} Commandes`}
          </div>
        )}
      </div>
    )
  );
}

export default ServerCall;
