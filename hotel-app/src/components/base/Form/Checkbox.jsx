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
            <label className="c-checkbox__label" for={name}>{label}</label>
            <input 
                type="checkbox"
                name={name}
                onChange={onChange}
                checked={checked}
                value={value}
            />
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