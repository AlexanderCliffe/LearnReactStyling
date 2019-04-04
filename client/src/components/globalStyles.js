import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Icon = ({ icon, className, onClick, size }) => (
  <FontAwesomeIcon
    icon={icon}
    className={className}
    onClick={onClick}
    size={size}
  />
);
