import React from 'react'
import { ThemeProvider, Button } from 'aitmed-react'
import { useModal } from 'aitmed-react/dist/hooks'
import { useObjectizedCheckboxes } from 'aitmed-react/dist/hooks/finalForm'

const App = () => {
  const modal = useModal()

  const onSubmit = (values) => {
    console.log(values)
  }

  console.log(useObjectizedCheckboxes)

  return (
    <ThemeProvider>
      <div style={{ maxWidth: 800, margin: 'auto' }}>
        <Button onClick={() => modal.open()}>Hewllo</Button>
        {modal.opened && <h2>You opened me!</h2>}
      </div>
    </ThemeProvider>
  )
}

export default App
