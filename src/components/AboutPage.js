import React, { useState } from "react";
import ConfigurationPage from "./ConfigurationPage";
import ControlPanel from "./common/ControlPanels";

function AboutPage() {
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
      <div>{showLogsState && <ConfigurationPage logId={id} />}</div>
    </>
  );
}

export default AboutPage;
