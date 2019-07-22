import React from 'react';
import { shallow, mount } from 'enzyme';

import { People } from './index';

jest.mock('../Person', () => (() => <div className="mock-person" />));

const defaultProps = {
  people: [],
  loading: false,
  lastError: null,
  loadPeople: jest.fn(),
};

describe('People', () => {
  test('it defaultPropsrenders', () => {
    const peopleComponent = shallow(<People {...defaultProps} />);

    expect(peopleComponent.find('section.people').length).toBe(1);
  });

  test('it calls loadPeople when people is empty', () => {
    defaultProps.loadPeople.mockReset();

    expect(defaultProps.loadPeople).not.toHaveBeenCalled();
    mount(<People {...defaultProps} />);
    expect(defaultProps.loadPeople).toHaveBeenCalled();
  });

  test('it does not call loadPeople when people is set', () => {
    defaultProps.loadPeople.mockReset();
    const props = { ...defaultProps, people: [{ id: 1 }, { id: 2 }] };

    expect(defaultProps.loadPeople).not.toHaveBeenCalled();

    mount(<People {...props} />);

    expect(defaultProps.loadPeople).not.toHaveBeenCalled();
  });

  test('it render a person component per person', () => {
    const props = { ...defaultProps, people: [{ id: 1 }, { id: 2 }] };
    const component = mount(<People {...props} />);

    expect(component.find('.mock-person').length).toBe(2);

    component.setProps({ people: [{ id: 1 }, { id: 2 }, { id: 3 }] });
    expect(component.find('.mock-person').length).toBe(3);
  });
});
