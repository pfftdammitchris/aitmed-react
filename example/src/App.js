import React from 'react'
import AiTmedReact from 'aitmed-react'
import useModal from 'aitmed-react/dist/hooks/useModal'

const App = () => {
  const modal = useModal()
  console.log(modal)
  return (
    <AiTmedReact>
      <div>
        <Button>Hello</Button>
      </div>
    </AiTmedReact>
  )
}

export default App
