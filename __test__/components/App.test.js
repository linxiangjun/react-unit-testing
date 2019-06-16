import React from 'react'
import App from '../../src/components/App'
import { shallow, render, mount } from 'enzyme'

describe('test suite: App component', () => {
  it('case: expect App render a div with className: test-container', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('.test-container').length).toEqual(1);
  })
})
