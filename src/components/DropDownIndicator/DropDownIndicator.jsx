import { MdOutlineArrowDropDown } from "react-icons/md";
import { components } from 'react-select';

const DropDownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <MdOutlineArrowDropDown size={22} color='#242a37' />
    </components.DropdownIndicator>
  );
};

export default DropDownIndicator;
