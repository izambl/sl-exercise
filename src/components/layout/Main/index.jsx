import React from 'react';

import './index.scss';

import PeopleComponent from '../../app/People';
import ControlComponent from '../../app/Control';

function Main() {
  return (
    <main className="container">
      <PeopleComponent />
      <ControlComponent />
    </main>
  );
}

export default Main;
