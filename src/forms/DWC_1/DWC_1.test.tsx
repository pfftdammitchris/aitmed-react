import React from 'react'
import { cleanup, render } from '@testing-library/react'
import DWC_1 from './DWC_1'

const renderComponent = (props: any) => {
  return render(<DWC_1 {...props} />)
}

afterEach(cleanup)

describe('DWC_1 Form', () => {
  const onSubmit = (values: any) => {
    console.log(values)
  }
  it('should render a Submit button', () => {
    const { getByText } = renderComponent({ onSubmit })
    expect(getByText('Submit')).not.toBeNull()
  })
})
