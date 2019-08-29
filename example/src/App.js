import React from 'react'
import AiTmedReact, { PR2, Button } from 'aitmed-react'

const App = () => {
  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <AiTmedReact>
      <div style={{ maxWidth: 800, margin: 'auto' }}>
        <PR2 onSubmit={onSubmit} states={['CA']} />
      </div>
    </AiTmedReact>
  )
}

export default App
