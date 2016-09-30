import React from 'react';
import test from 'ava';
import {shallow} from 'enzyme';
import App from './app';

test('it works please', t => {
  const wrapper = shallow(<App/>);
  t.is(wrapper.find('div').text(), 'React simple starter');
});
