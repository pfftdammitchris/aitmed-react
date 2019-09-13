import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Fade from '@material-ui/core/Fade'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import PhotoListRowActions from './Actions'

const styles = (theme) => ({
  root: {
    transition: 'all 0.2s',
    padding: '3px 12px',
  },
  avatar: {
    [theme.breakpoints.down('xs')]: {
      width: 25,
      height: 25,
    },
  },
  title: {
    fontWeight: 300,
    fontSize: '1.1rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.65rem',
    },
  },
  description: {
    fontWeight: 400,
    fontSize: '0.8rem',
    color: '#666',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.6rem',
    },
  },
})

/**
 * @param { string? } src - An optional data URI to render as the thumbnail of a row
 * @param { ReactNode? } title - An optional react node to render as the title of a row
 * @param { ReactNode? } description - An optional react node to render as the description of a row
 * @param { ReactNode? } placeholder - An optional placeholder to use if src is not a renderable image (ex: for pdf files)
 * @param { boolean? } usePlaceholder = An optional boolean, pass in true to force render the placeholder
 * @param { function? } renderTitle - Optional function to customize the rendering of title. It will be passed the "title" from its row from  from rows/items as a parameter
 * @param { function? } renderDescription - Optional function to customize the rendering of description. It will be passed the "description" from its row from rows/items as a parameter
 * @param { object[]? } actions? - An optional array of objects of an action with the shape of [{ Icon: MdArrowBack, ...etc }]
 * @param { object? } primaryTypographyProps - Optional props to pass to the title component
 * @param { object? } secondaryTypographyProps - Optional props to pass to the description component
 */

const PhotoListRow = ({
  classes,
  className,
  avatarClassName,
  data,
  src,
  blob,
  title,
  description,
  // lastModified,
  ext, // TODO: this should not be here
  index,
  defaultFileName, // TODO: this should be renamed to something more generic
  imgPlaceholder = '',
  usePlaceholder,
  renderTitle,
  renderDescription,
  actions,
  primaryTypographyProps = {}, // TODO: this should be renamed to something more generic
  secondaryTypographyProps = {}, // TODO: this should be renamed to something more generic
}) => {
  return (
    <Fade timeout={500} in>
      <ListItem
        className={cx(classes.root, className)}
        alignItems="center"
        divider
      >
        {src && (
          <ListItemAvatar className={cx(classes.avatar, avatarClassName)}>
            {blob &&
            (blob.type === 'application/pdf' ||
              blob.type === 'application/json') ? (
              <Avatar alt={title} src={imgPlaceholder} />
            ) : (
              <Avatar alt={title} src={usePlaceholder ? imgPlaceholder : src} />
            )}
          </ListItemAvatar>
        )}
        <ListItemText
          primary={renderTitle ? renderTitle(title) : title}
          secondary={
            renderDescription ? renderDescription(description) : description
          }
          primaryTypographyProps={{
            ...primaryTypographyProps,
            className: cx(classes.title, primaryTypographyProps.className),
          }}
          secondaryTypographyProps={{
            ...secondaryTypographyProps,
            className: cx(
              classes.description,
              secondaryTypographyProps.className,
            ),
          }}
        />
        {actions && (
          <PhotoListRowActions
            ext={blob.type}
            src={src}
            data={data}
            blob={blob}
            defaultFileName={defaultFileName}
            fileName={title}
            actions={actions}
            index={index}
          />
        )}
      </ListItem>
    </Fade>
  )
}

PhotoListRow.propTypes = {
  className: PropTypes.string,
  avatarClassName: PropTypes.string,
  src: PropTypes.string.isRequired,
  data: PropTypes.any,
  title: PropTypes.node,
  description: PropTypes.node,
  ext: PropTypes.string,
  index: PropTypes.number.isRequired,
  renderTitle: PropTypes.func,
  renderDescription: PropTypes.func,
  actions: PropTypes.array,
  imgPlaceholder: PropTypes.node,
  usePlaceholder: PropTypes.bool,
  primaryTypographyProps: PropTypes.object,
  secondaryTypographyProps: PropTypes.object,
  defaultFileName: PropTypes.string,
}

export default React.memo(withStyles(styles)(PhotoListRow))
