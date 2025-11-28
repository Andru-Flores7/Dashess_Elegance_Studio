import React from "react";
import "../../assets/css/ui/Button.css";

const Button = ({ service, onClick, ...props }) => {
  return (
    <>
      <button className="comic-button" onClick={onClick} {...props}>
        {service}
      </button>
    </>
  );
};

export default Button;
