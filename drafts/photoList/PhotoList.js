import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import usePhotoList from './usePhotoList'
import PhotoListRow from './Row'

const styles = (theme) => ({
  root: {
    width: '100%',
  },
  subheader: {
    paddingTop: 15,
  },
})

/*
  Renders a list of rows. Each row has a thumbnail, a title, an optional description, and optional action buttons on the right.
*/

/**
 * @param { ReactNode? } header - An optional react node to reader as the header
 * @param { object? } headerProps - An optional props object to pass into header if header is specified
 * @param { function? } headerRenderer - An optional function to to render the header component instead of using the "header" prop
 * @param { object[] } items - An array of objects with the shape { src, title, description, ext }    (if src is invalid and there is no placeholder provided, it will render without an avatar)
 * @param { object[] } rows - An alias of "items". One of items/rows prop must be defined or else the component will throw
 * @param { object? } actions - An optional customizable object where you can pass in any action icons to render. Pass in download: true to automatically render the download feature, and zoom: true to render the zoom in feature. Optionally you can pass in your own like { colorPicker: { Icon: MdExpandLess, wrapperProps: { style: { width: 300 } } }, iconProps: { className: classes.myCustomIcon } }
 * @param { ReactNode? } placeholder - An optional placeholder to show in place if an image is not able to load correctly
 * @param { string? } defaultDownloadName - An optional default file name to use if there is no file name found for the downloadable thumbnail
 */

/*
  Each "row" in rows (or items) should take on the following shape:
    {
      data: string
      src: string
      blob: File | Blob
      title: string
      description: string
      lastModified: number | string
    }
*/

const PhotoList = ({
  classes,
  className,
  header,
  headerProps,
  headerRenderer,
  items = [], // [{ src, title, description, ext }]
  rows = items,
  actions: actionProps, // { download: true, zoom: true, ...{ Icon: MdRightArrow, ...html props }}
  defaultPlaceholder,
  defaultDownloadName = '',
  onZoom,
  onRemove,
  onDownload,
  ...otherProps
}) => {
  const { actions, defaultFileName } = usePhotoList({
    actionProps,
    defaultDownloadName,
    onZoom,
    onRemove,
    onDownload,
  })
  return (
    <List
      classes={{
        root: cx(classes.root, className),
        subheader: classes.subheader,
      }}
      subheader={
        !!header && !headerRenderer ? (
          <Typography variant="h6" {...headerProps}>
            {header}
          </Typography>
        ) : (
          !!header && headerRenderer()
        )
      }
      dense
      {...otherProps}
    >
      {rows.map(({ placeholder, ...props }, index) => (
        <PhotoListRow
          key={`photoListRow_${index}`}
          actions={actions}
          imgPlaceholder={placeholder || defaultPlaceholder}
          defaultFileName={defaultFileName}
          index={index}
          {...props}
        />
      ))}
    </List>
  )
}

PhotoList.propTypes = {
  classes: PropTypes.object.isRequired,
  header: PropTypes.node,
  headerProps: PropTypes.object,
  headerRenderer: PropTypes.func,
  items: PropTypes.array,
  rows: PropTypes.array,
  actions: PropTypes.object,
  defaultPlaceholder: PropTypes.node,
  defaultDownloadName: PropTypes.string,
  onRemove: PropTypes.func,
  onZoom: PropTypes.func,
}

export default withStyles(styles)(PhotoList)
