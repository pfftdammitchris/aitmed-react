import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import cx from 'classnames'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

const styles = (theme) => ({
  root: {},
  wrapper: {
    display: 'flex',
    '& > div': {
      marginRight: 5,
      [theme.breakpoints.down('xs')]: {
        marginRight: 3,
      },
    },
  },
  icon: {
    transition: 'all 0.1s',
    border: '1px solid #333',
    width: 35,
    height: 35,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '&:hover': {
      border: `1px solid ${theme.palette.secondary.main}`,
      '& svg': {
        color: theme.palette.secondary.main,
      },
    },
    [theme.breakpoints.down('xs')]: {
      width: 18,
      height: 18,
    },
    '& svg': {
      transition: 'all 0.1s',
      transform: 'scale(1.2)',
      [theme.breakpoints.down('xs')]: {
        transform: 'scale(0.75)',
      },
    },
  },
})

const isDownload = (id) => id === 'photo-list-download'
const isZoom = (id) => id === 'photo-list-zoom'
const isRemove = (id) => id === 'photo-list-remove'

const PhotoListRowAction = ({
  classes,
  actions,
  src,
  data,
  ext = '', // TODO: this should not be here
  blob, // TODO: this should not be here
  defaultFileName, // TODO: this should not be here
  fileName,
  index,
}) => {
  return (
    <ListItemSecondaryAction className={classes.root}>
      <div className={classes.wrapper}>
        {actions.map(
          (
            {
              Icon,
              wrapperProps = {},
              iconProps = {},
              onClick,
              // fileName,
              _ext = '',
              id,
            },
            i,
          ) => {
            const extension = _ext || ext
            const metadata = {
              fileName: fileName || defaultFileName + extension,
              ext: extension,
              data,
            }
            let wrappedOnClick
            const isPdf = ext.includes('pdf')
            if (isDownload(id)) {
              wrappedOnClick = () => onClick(src, metadata)
            } else if (isZoom(id)) {
              wrappedOnClick = () => onClick(isPdf ? blob : src, metadata)
            } else if (isRemove(id)) {
              wrappedOnClick = () => onClick(index)
            }
            return (
              <div
                key={`photoListRowAction_${i}`}
                {...wrapperProps}
                className={cx(classes.icon, wrapperProps.className)}
                onClick={wrappedOnClick}
              >
                <Icon {...iconProps} />
              </div>
            )
          },
        )}
      </div>
    </ListItemSecondaryAction>
  )
}

export default withStyles(styles)(PhotoListRowAction)
