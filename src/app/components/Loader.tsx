import React from "react";
import "../page.module.css";
const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <img src="/loading.gif" alt="Loading..." className="loader-image" />
    </div>
  );
};
export default Loader;
