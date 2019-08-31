import React from 'react'
import { Button } from 'aitmed-react'

const App = () => {
  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <div style={{ maxWidth: 800, margin: 'auto' }}>
      <Button>Hewllo</Button>
    </div>
  )
}

export default App
