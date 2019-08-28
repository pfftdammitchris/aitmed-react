import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'
import RFA from '../RFA'

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

describe('RFA', () => {
  it('every field value should be available from onSubmit if filled', () => {
    const onSubmitMock = jest.fn()
    const { getByText } = render(<RFA onSubmit={onSubmitMock} />)
    const submitBtn = getByText('Submit')
    console.log(submitBtn)

    fireEvent.click(getByText('Submit'))
  })
})
