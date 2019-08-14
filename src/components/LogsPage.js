import React from "react";

function LogsPage(props) {
  return (
    // <> is same as <React.Fragment>
    <>
      <p>Display the logs for {props.logId}</p>
    </>
  );
}

export default LogsPage;
