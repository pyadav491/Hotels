import React, { useState } from "react";
import Input from "./base/Form/Input";
import Accordion from "./base/Accordion";
import Checkbox from "./base/Form/Checkbox";
import PropTypes from 'prop-types';

const Filter = ({onFilterChange, filters}) => {
    const ratingList = [5,4,3,2];
    const [allSelected, setAllSelected] = useState(true);
    const [selectedRatings, setSelectedRatings] = useState([]);
    const [filterName, setFilterName] = useState(filters.name);
    const ratingDiamonds = (rating) => {
        let diamonds = [];
        for(let i=1; i<=rating; i++) {
            diamonds.push(<span key={i} className="o-diamond"></span>)
        }
        return diamonds;
    };

    const handleRatingChange = (rating, checked) => {
        const newRatings = checked 
          ? [...selectedRatings, rating]
          : selectedRatings.filter(r => r !== rating);
        
        setSelectedRatings(newRatings);
        setAllSelected(false);  
        onFilterChange('ratings', newRatings); 
      };

    const handleSelectAll = (checked) => {
        setAllSelected(checked);
        setSelectedRatings([]);
        onFilterChange('ratings', checked ? ratingList : []);
    }

    const handleFilterName = (e) => {
        setFilterName(e.target.value);
    }

    const handleButtonClick = () => {
        onFilterChange('name', filterName);
    }

    return(
        <div className="c-filter">
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
                            value={filterName}
                            onChange={handleFilterName}
                            //onChange={(e) => onFilterChange('name', e.target.value)}
                            name="name"
                        />
                        <button 
                            className="o-button c-filter-section__button"
                            onClick={handleButtonClick}
                        >
                            Go
                        </button>
                    </div>
                </Accordion>
            </div>
            <div className="c-filter-section">
                <Accordion
                    title="Quality Rating"
                    expanded={true}
                >
                     <Checkbox
                        label="All Ratings"
                        onChange={(e) => handleSelectAll(e.target.checked)}
                        checked={allSelected}
                    />
                     {ratingList.map((rating) => (
                        <Checkbox
                            key={rating}
                            label={ratingDiamonds(rating)}
                            onChange={(e) => handleRatingChange(rating, e.target.checked)}
                            checked={!allSelected && selectedRatings.includes(rating)}
                            className="rating-option"
                        />
                        ))}
                </Accordion>
            </div>
        </div>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    filters: PropTypes.object.isRequired
};

export default Filter;