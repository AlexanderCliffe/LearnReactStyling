import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import styled from "styled-components";

export const Icon = ({ icon, className, onClick, size }) => (
  <FontAwesomeIcon
    icon={icon}
    className={className}
    onClick={onClick}
    size={size}
  />
);
