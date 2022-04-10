import React from 'react';
import './components.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const CardInner = ({ elem }) => {
  return (
   <div className='cardAll'>
      <Link className='cardLink' to={`/news/${elem._id}`}><div className='card'>
      <div>
        <div className='bgcard'></div>
        <div className="aboutCard">
          <h3>{elem.title}</h3>
        </div>
      </div>
    </div>
    </Link>
   </div>

  );
};

CardInner.propType = {
  elem: PropTypes.string.isRequired,
}

export default CardInner;