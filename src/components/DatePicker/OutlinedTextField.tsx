// We could have used the original re-usable OutlinedTextField we have in src/components,
//    But the sizes were not aligning for some reason. We needed to isolate this text field
//    So that we can style it individually without affecting other text fields
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Context as AlignedOutlinedTextFieldsContext } from '../AlignOutlinedTextFields'
import OriginalOutlinedTextField from '../OutlinedTextField'

const useStyles = makeStyles((theme: any) => ({
  root: ({ size }: any) => {
    switch (size) {
      case 'small':
        return {
          '& input': {
            padding: '8px 10px',
            fontSize: '0.9rem',
          },
        }
      case 'large':
        return {
          '& input': {
            padding: '24px 16px',
            fontSize: '0.9rem',
            [theme.breakpoints.down('xs')]: {
              padding: '18px 16px',
            },
          },
        }
      // 'medium'
      default:
        return {
          '& input': {
            padding: '18px 16px',
            fontSize: '0.9rem',
            [theme.breakpoints.down('xs')]: {
              padding: '8px 10px',
            },
          },
        }
    }
  },
}))

function OutlinedTextField(props: any) {
  const ctx = React.useContext<any>(AlignedOutlinedTextFieldsContext)
  const classes = useStyles({ size: ctx ? ctx.size : undefined })

  return (
    <OriginalOutlinedTextField
      classes={{
        root: classes.root,
      }}
      {...props}
    />
  )
}

export default OutlinedTextField
