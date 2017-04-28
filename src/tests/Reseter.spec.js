import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass,
  Simulate
} from 'react-dom/test-utils';
import {expect} from 'chai';
import configureMockStore from 'redux-mock-store';

import Reseter from "../components/CounterContainer/Reseter/Reseter";

describe('Creater', () => {
  const mockStore = configureMockStore();
  let store;

  beforeEach(function() {
    store = mockStore({});
  });

  it('renders without crashing', () => {
    const component = renderIntoDocument(
      <Reseter store={store}/>
    );
    const btn = findRenderedDOMComponentWithClass(component, 'action--reset');
    Simulate.click(btn);
    expect(btn.className).to.equal('action action--reset');
  });
});