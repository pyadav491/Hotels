import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Accordion = ({ 
  title, 
  children,
  expanded = true
}) => {
    const [expand, setExpand] = useState(expanded);
    const toggle = () => {
        setExpand(prev => !prev);
      };

    return (
        <div className="c-accordion">
        <button 
            className={`o-button c-accordion__header ${expand ? 'c-accordion__header--active' : ''}`}
            onClick={toggle}
            aria-expanded={expand}
        >
            <span className={`c-accordion__icon ${expand ? 'c-accordion__icon--expand' : ''}`}></span>
            <h4 className="c-accordion__title">{title}</h4>
        </button>
        {expand && (
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