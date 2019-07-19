import createStyles from '@material-ui/core/styles/createStyles'
import { Theme } from '@material-ui/core'

export default createStyles((theme: Theme) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
    },
    code: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      '& fieldset': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        marginRight: -1,
      },
    },
    phone: {
      flexGrow: 1,
    },
    phoneInput: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      '& fieldset': {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      },
    },
  }
})
