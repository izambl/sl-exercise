import React from 'react';
import { shallow } from 'enzyme';

import Header from './index';

describe('Header', () => {
  test('it renders header', () => {
    const footerComponent = shallow(<Header />);

    expect(footerComponent.find('header#header').length).toBe(1);
  });
});
