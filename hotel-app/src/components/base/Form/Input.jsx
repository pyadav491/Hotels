import PropTypes from "prop-types";
import React from "react";

const Input = ({
    placeholder,
    name,
    onChange,
    value
}) => {
    return (
        <div className="c-input__container">
            <label className="c-input__label" for={name}/>
            <input 
                type="text"
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className="c-input"
            />
        </div>
    )
}

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

export default Input