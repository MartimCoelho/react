import React from "react";
import "../page.module.css";
const Footer: React.FC<{ name: string; projectName: string }> = ({ name, projectName }) => {
  return (
    <footer className="footer">
      <p>
        {projectName} - Copyright © {new Date().getFullYear()} by {name}.
      </p>
    </footer>
  );
};
export default Footer;
