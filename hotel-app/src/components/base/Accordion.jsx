import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Accordion = ({ 
  title, 
  children,
  expanded = true
}) => {
    const [collapse, setCollapse] = useState(expanded);
    const toggle = () => {
        setCollapse(prev => !prev);
      };

    return (
        <div className="c-accordion">
        <button 
            className={`o-button c-accordion__header ${collapse ? 'active' : ''}`}
            onClick={toggle}
            aria-expanded={collapse}
        >
            <span className={`c-accordion__icon ${collapse ? 'c-accordion__expanded' : ''}`}></span>
            <h4 className="c-accordion__title">{title}</h4>
        </button>
        {collapse && (
            <div className="c-accordion__content">
                {children}
            </div>
        )}
        </div>
    );
};

Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    expanded: PropTypes.bool
};

export default Accordion; 