import React from 'react';
import { mount } from 'enzyme';
import Home from '..';
import toJson from 'enzyme-to-json';
describe('index.tsx', () => {
  it('render', () => {
    const wrapper = mount(<Home />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
