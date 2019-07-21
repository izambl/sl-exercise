import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

/* eslint-disable camelcase */
function Person({ display_name, email_address, title }) {
  return (
    <article className="person">
      <div className="name">{display_name}</div>
      <div className="email">{email_address}</div>
      <div className="title">{title}</div>
    </article>
  );
}
/* eslint-enable camelcase */

Person.propTypes = {
  display_name: PropTypes.string.isRequired,
  email_address: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Person;
