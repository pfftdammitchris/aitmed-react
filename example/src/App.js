import React from 'react'
import AiTmedReact from 'aitmed-react'
import useModal from 'aitmed-react/hooks/useModal'

const App = () => {
  const modal = useModal()
  console.log(modal)
  return (
    <AiTmedReact>
      <div>
        <button>Hello</button>
      </div>
    </AiTmedReact>
  )
}

export default App
