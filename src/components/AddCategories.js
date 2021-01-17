import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategories = ({setCategories}) => {
    const[inputValue, setInputValue]=useState('');

    const handleInput=(e)=>{
        setInputValue(e.target.value)
    }
    const handleForm=(e)=>{
        e.preventDefault() 
        if(inputValue.trim().length>2){
        setCategories(categories=>[inputValue,...categories]);
        }
    }
    return (
        <form onSubmit={handleForm}>
            <input
                type='text'
                placeholder={inputValue}
                onChange={handleInput}
            />
        </form>
    )
}
AddCategories.propTypes = {
    setCategories:PropTypes.func.isRequired
}