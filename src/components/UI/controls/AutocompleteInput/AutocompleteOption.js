import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

const autocompleteOption = (props)=>{

  const { children, isFocused, isSelected, onFocus } = this.props;
return (
	   <MenuItem
        onFocus={onFocus}
        selected={isFocused}
        onClick={this.handleClick}
        component="div"
        style={{
          fontWeight: isSelected ? 500 : 400,
        }}
      >
        {children}
      </MenuItem>
	)
}


export default autocompleteOption;