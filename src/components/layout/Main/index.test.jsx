import React from 'react';
import { shallow } from 'enzyme';

import PeopleComponent from '../../app/People';
import ControlComponent from '../../app/Control';

import Main from './index';

describe('Main', () => {
  test('it renders main section', () => {
    const footerComponent = shallow(<Main />);

    expect(footerComponent.find('main').length).toBe(1);
    expect(footerComponent.find(PeopleComponent).length).toBe(1);
    expect(footerComponent.find(ControlComponent).length).toBe(1);
  });
});
