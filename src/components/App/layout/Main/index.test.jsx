import React from 'react';
import { shallow } from 'enzyme';

import Main from './index';

describe('Main', () => {
  test('it renders main section', () => {
    const footerComponent = shallow(<Main />);

    expect(footerComponent.find('main').length).toBe(1);
  });
});
