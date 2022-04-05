import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory  = ({ setCategories }) => {

    const [inputValue, SetInputValue] = useState('');

    const handleInputChange = (e) =>{
        SetInputValue(e.target.value);
    }

    const hundleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats]);
            SetInputValue('');
        }
    }

    return(
      <form onSubmit={hundleSubmit}>
        <input
            typeof='text'
            value={inputValue}
            onChange={handleInputChange}
        />
      </form>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};