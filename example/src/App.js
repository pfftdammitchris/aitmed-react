import React from 'react'
import { ThemeProvider, Button, Typography, LoadingSpinner } from 'aitmed-react'
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
        {modal.opened && (
          <Typography variant="h2" primary center>
            You opened me!
          </Typography>
        )}
        {!modal.opened && <LoadingSpinner>Waiting...</LoadingSpinner>}
      </div>
    </ThemeProvider>
  )
}

export default App
