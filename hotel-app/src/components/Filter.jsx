import React from "react";
import Input from "./base/Form/Input";
import Accordion from "./base/Accordion";
import Checkbox from "./base/Form/Checkbox";
import PropTypes from 'prop-types';

const Filter = ({onChange}) => {
    return(
        <div className="c-filter u-hide-table">
            <div className="c-filter__title">
                <h3>Filter Results</h3>
            </div>
            <div className="c-filter-section">
                <Accordion
                    title="Hotel Name"
                    expanded={true}
                >
                    <div className="c-filter-section__search">
                        <Input 
                            placeholder="Enter Hotel Name"
                            value="Oaks"
                            onChange={onChange}
                        />
                        <button className="o-button c-filter-section__button">Go</button>
                    </div>
                </Accordion>
            </div>
            <div className="c-filter-section">
                <Accordion
                    title="Quality Rating"
                    expanded={true}
                >
                    <div className="c-filter-section__search">
                        <Checkbox/>   
                    </div>
                </Accordion>
            </div>
        </div>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default Filter;