import React from 'react'
import cx from 'classnames'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'
import List from '@material-ui/core/List'
import PhotoListProvider from './Provider'
import PhotoListItems from './Items'
import Typography from '../../components/Typography'
import * as types from './types'

interface PhotoListProps {
  items: string[]
  header?: React.ReactNode
  headerProps?: any
  headerRenderer?: (args: any) => React.ReactNode
  items?: types.PhotoListRowItem[]
  actions?: any
  placeholder?: React.ReactNode
  defaultDownloadName?: string
  onRemove?: () => void
  onZoom?: () => void
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    border: '1px solid red',
    width: '100%',
  },
  subheader: {
    paddingTop: 15,
  },
}))

/*
  Renders a list of rows. Each row has a thumbnail, a title, an optional description, and optional action buttons on the right.
*/

function PhotoList({
  classes: classesProp = {},
  className,
  header,
  headerProps,
  headerRenderer,
  items, // [{ src, title, description, ext }]
  actions, // { download: true, zoom: true, ...{ Icon: MdRightArrow, ...html props }}
  placeholder,
  defaultDownloadName = '',
  onZoom,
  onRemove,
  onDownload,
  ...otherProps
}: PhotoListProps) {
  const classes = useStyles()

  return (
    <PhotoListProvider
      items={items}
      actions={actions}
      defaultDownloadName={defaultDownloadName}
      placeholder={placeholder}
    >
      <List
        classes={{
          ...classesProp,
          root: cx(classes.root, classesProp.root, className),
          subheader: cx(classes.subheader, classesProp.subheader),
        }}
        subheader={
          <Typography
            style={{ border: '1px solid teal' }}
            variant="h6"
            {...headerProps}
          >
            {header}
          </Typography>
        }
        dense
        {...otherProps}
      >
        <PhotoListItems />
      </List>
    </PhotoListProvider>
  )
}

export default PhotoList
