import styled from "styled-components";
import { Icon } from "../globalStyles";

import {
  FormGroup,
  Label,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Button
} from "reactstrap";

export const DatePickerContainer = styled.div`
  position: relative;
  padding-bottom: 2rem;
  padding-top: 0.5rem;
  border-radius: 5px;
`;

export const DatePickerFormGroup = styled(FormGroup)`
  display: flex;
  position: relative;
  width: 100%;
  border: 2px solid #06c;
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
`;

export const DatePickerLabel = styled(Label)`
  margin: 0;
  padding: 0 2rem;
  font-weight: 600;
  font-size: 0.7rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #06c;
  border-right: 2px solid #06c;
  background: rgba(0, 102, 204, 0.05);
  flex-grow: 5;
`;

export const DatePickerButton = styled(Button)`
  position: relative;
  margin: 0;
  padding: 0 2rem;
  font-weight: 600;
  font-size: 0.7rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #06c;
  border-left: 2px solid #06c;
  background: rgba(0, 102, 204, 0.05);
  width: 25%;
  text-align: center;
  align-items: center;
`;

export const DatePickerInput = styled(Input)`
  position: relative;
  padding: 1rem 2rem;
  font-weight: 500;
  font-size: 1rem;
  color: #333;
  box-shadow: none;
  border: none;
  text-align: center;
  letter-spacing: 1px;
  background: transparent !important;
  align-items: center;
  width: 75%;
  ::placeholder {
    color: #999;
    font-size: 0.9rem;
  }
`;

export const DatePickerDropdown = styled(Dropdown)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const DatePickerDropdownToggle = styled(DropdownToggle)`
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;
  opacity: 0;
  filter: alpha(opacity=0);
`;

export const DatePickerDropdownMenu = styled(DropdownMenu)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: none;
  padding: 0;
  margin: 0;
  transform: none !important;
`;

export const DateIcon = styled(Icon)``;
