import React from "react";
import { useLocation } from "react-router-dom";

const XSSHelper = (props) => {
  const search = useLocation().search;
  const code = new URLSearchParams(search).get("code");
  React.useEffect(() => {
    console.log(code);
  });
  return <h2>XSS Helper Active</h2>;
};

export default XSSHelper;
