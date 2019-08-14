import React, { useState } from "react";
import ControlPanel from "./common/ControlPanels";
import LogsPage from "./LogsPage";

function HomePage() {
  const [id, setId] = useState("");
  const [showLogsState, setShowLogsState] = useState(false);

  function handleClick(event) {
    // debugger;
    if (event.currentTarget.id === id) {
      setShowLogsState(!showLogsState);
    } else {
      setShowLogsState(true);
    }

    setId(event.currentTarget.id);

    // console.log(id);
    // console.log(showLogsState);
  }
  return (
    <>
      <div>
        <ControlPanel onClick={handleClick} />
      </div>
      <div>{showLogsState && <LogsPage logId={id} />}</div>
    </>
  );
}

export default HomePage;
