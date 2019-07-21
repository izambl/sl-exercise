import React from 'react';
import { shallow } from 'enzyme';

import Footer from './index';

describe('Footer', () => {
  test('it renders footer', () => {
    const footerComponent = shallow(<Footer />);

    expect(footerComponent.find('footer').length).toBe(1);
  });
});
