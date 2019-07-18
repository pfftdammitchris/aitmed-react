import React from 'react'
import { render } from 'test-utils'
import PatientContact from '../PatientContact'

const renderComponent = (props = {}) =>
  render(
    <PatientContact
      first_name="chris"
      middle_name="n."
      last_name="tran"
      email="pfft@gmail.com"
      primary_phone_number="123456"
      appointment={{ id: '123' }}
      videoCallStateFromLocalStorage={
        props.videoCallStateFromLocalStorage || {}
      }
    />,
  )

describe('<PatientContact />', () => {
  it("should render if the provider's patient has disconnected unexpectedly", () => {
    const { container } = renderComponent({
      videoCallStateFromLocalStorage: {
        notComplete: true,
        date: '2019-01-01',
        appointmentId: '123',
      },
    })
    expect(container.firstChild).toBeInTheDocument()
  })
})

//   it('should NOT render if the appt. id from local storage is not the same as the id from the apptmt. object', () => {
//     const { container } = renderComponent({
//       videoCallStateFromLocalStorage: {
//         notComplete: true,
//         date: '2019-01-01',
//         appointmentId: '456',
//       },
//     })
//     expect(container.firstChild).not.toBeInTheDocument()
//   })

//   it('should NOT render if props.notComplete is false', () => {
//     const { container } = renderComponent({
//       videoCallStateFromLocalStorage: {
//         notComplete: false,
//         date: '2019-01-01',
//         appointmentId: '123',
//       },
//     })
//     expect(container.firstChild).not.toBeInTheDocument()
//   })

//   it("should render the patient's first, middle and last name", () => {
//     const { queryByText } = renderComponent({
//       videoCallStateFromLocalStorage: {
//         notComplete: true,
//         date: '2019-01-01',
//         appointmentId: '123',
//       },
//     })
//     expect(queryByText(/chris/i)).not.toBe(null)
//     expect(queryByText(/n. /i)).not.toBe(null)
//     expect(queryByText(/tran/i)).not.toBe(null)
//   })

//   it("should render the patient's email", () => {
//     const { queryByText } = renderComponent({
//       videoCallStateFromLocalStorage: {
//         notComplete: true,
//         date: '2019-01-01',
//         appointmentId: '123',
//       },
//     })
//     expect(queryByText(/pfft@gmail.com/i)).not.toBe(null)
//   })

//   it("should render the patient's primary phone number", () => {
//     const { queryByText } = renderComponent({
//       videoCallStateFromLocalStorage: {
//         notComplete: true,
//         date: '2019-01-01',
//         appointmentId: '123',
//       },
//     })
//     expect(queryByText(/123456/i)).not.toBe(null)
//   })
// })
