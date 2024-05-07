import { useEffect } from "react";
import "./serverCall.css";
import { useState } from "react";

function ServerCall(props) {
  let tablesCalling = [1, 4, 10, 5, 7];
  let numberOfCommandes = 4;
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
              <div className="tableCallServer" key={index}>
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
