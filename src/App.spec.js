import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/react/dont-cleanup-after-each'
import App from './components/App'

describe('App', () => {
  it('Renders without error', () => {
    render(<App />)
  })
})
