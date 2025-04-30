import PropTypes from "prop-types";
import React from "react";

const Checkbox = ({
    onChange,
    name,
    label,
    checked,
    value
}) => {
    return (
        <div className="c-checkbox">
            <label className="c-checkbox__label" htmlFor={name}>
                <input 
                    type="checkbox"
                    name={name}
                    onChange={onChange}
                    checked={checked}
                    value={value}
                />
                <span className="c-checkbox__icon" />
                <span className="c-checkbox__text">{label}</span>
            </label>
        </div>
    )
}

Checkbox.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool
    ]),
};

export default Checkbox;