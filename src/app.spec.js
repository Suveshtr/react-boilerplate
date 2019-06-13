import React from 'react'
import { render } from '@testing-library/react'
//add some extra matchers that are specific to testing DOM
//moved to tstSetup.js
//import 'jest-dom/extend-expect'
//run some code after each test that'll clean up the virtual DOM to make sure that we don't 
//have any state hanging around from one test to the next
//moved to tstSetup.js
//import '@testing-library/react/cleanup-after-each' 
import App from './App'

describe('App', () => {
  it('Renders without error', () => {
    render(<App/>)
  })
})