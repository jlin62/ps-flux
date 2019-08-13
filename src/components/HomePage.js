import React, { useState } from "react";
import ControlPanel from "./common/ControlPanels";
import LogsPage from "./LogsPage";

function HomePage() {
  const [id, setId] = useState({});
  const [showLogsState, setShowLogsState] = useState({
    showLogsState: false
  });

  function handleClick(event) {
    // debugger;
    // event.preventDefault();
    const newId = { ...id, [event.currentTarget.name]: event.currentTarget.id };
    // setId(event.currentTarget.id);
    setId(newId);
    setShowLogsState(!showLogsState);
    console.log(id);
    console.log(showLogsState);
  }
  return (
    <>
      <div>
        <ControlPanel onClick={handleClick} />
      </div>
      <div>{!showLogsState && <LogsPage logId={id} />}</div>
    </>
  );
}

export default HomePage;
