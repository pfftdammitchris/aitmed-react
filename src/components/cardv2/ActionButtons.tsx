import React from 'react'
import CardActions from '@material-ui/core/CardActions'
import Button from 'components/button'
import { makeStyles } from '@material-ui/styles'

const callAll = (...fns) => (...args) => fns.forEach((fn) => fn && fn(...args))
const commonStyles = { marginRight: 6 }

const _Button = ({ onClick, ...others }) => (
  <Button
    onClick={callAll(onClick)}
    hover={{ secondary: 'white' }}
    secondary
    style={commonStyles}
    {...others}
  />
)

const Close = ({ onClick, onClose, ...others }) => (
  <Button
    onClick={callAll(onClose, onClick)}
    hover={{ primary: 'white' }}
    primary
    style={commonStyles}
    {...others}
  />
)

const Submit = ({ onClick, ...others }) => (
  <Button
    type="submit"
    onClick={callAll(onClick)}
    hover={{ secondary: 'white' }}
    secondary
    style={commonStyles}
    {...others}
  />
)

const useStyles = makeStyles((theme) => ({
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    marginRight: 5,
  },
}))

const Cardv2ActionButtons = ({ children }) => {
  const classes = useStyles()

  return (
    <CardActions className={classes.actions}>
      <>{null}</>
      {children}
    </CardActions>
  )
}

Cardv2ActionButtons.Button = _Button
Cardv2ActionButtons.Close = Close
Cardv2ActionButtons.Submit = Submit

export default Cardv2ActionButtons
