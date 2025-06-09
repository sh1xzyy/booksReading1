import { components } from 'react-select';

const DropDownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg width={13} height={13}>
         <use href='/icons/icons.svg#icon-arrow-down'></use>
      </svg>
    </components.DropdownIndicator>
  );
};

export default DropDownIndicator;
