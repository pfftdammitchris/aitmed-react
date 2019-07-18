import React from 'react'
// import useTemplating from './useTemplating'
import { TemplatingProps } from './types'

const Templating: React.FC<TemplatingProps> = ({ generateForm }) => {
  // const templating = useTemplating()
  console.log(generateForm)

  return <h3>Templating module</h3>
}

export default Templating
