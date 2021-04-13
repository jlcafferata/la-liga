import React from "react";

const AppLayout = ({ children }) => {
  return (
    <div id="app-container" className="h-100">
      <div className="container-fluid">{children}</div>
    </div>
  );
};

export default AppLayout;
