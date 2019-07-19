import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { Document, Page } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from 'components/common/Typography'
import { isBlob, isFile } from 'util/extractions'
import { info as infoToast } from 'util/toast'
import IconButton from '@material-ui/core/IconButton'
import {
  MdFileDownload,
  MdAdd,
  MdRemove,
  MdChevronLeft,
  MdChevronRight,
} from 'react-icons/md'

const a4Size = 210 / 297 // width/height

const styles = (theme) => ({
  root: {
    width: '100%',
  },
  header: {
    marginBottom: theme.spacing.unit,
  },
  downloadButton: {
    marginLeft: theme.spacing.unit,
  },
  document: {},
  page: {},
  paper: {
    width: '100%',
    height: '50vh',
    backgroundColor: '#666',
  },
  pageControl: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing.unit,
  },
})

const PDFViewer = ({
  classes,
  file,
  fileName = 'file.pdf',
  initialScale = 10,
  iconsTopRight, // allow the caller to pass in additional icons
}) => {
  const [pageNumber, setPageNumber] = React.useState(1)
  const [numPages, setNumPages] = React.useState(1)
  const [scale, setScale] = React.useState(initialScale)

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages || 1)
  }

  const onPageChange = (sign) => () => {
    setPageNumber((prePageNumber) => {
      const nextPageNumber = prePageNumber + sign
      return nextPageNumber < 1 || nextPageNumber > numPages
        ? prePageNumber
        : nextPageNumber
    })
  }

  const onScaleChange = (sign) => () => {
    setScale((preScale) => {
      const nextScale = preScale + 1 * sign
      return nextScale < 1 || nextScale > 20 ? preScale : nextScale
    })
  }

  const onDownload = () => {
    const iOS =
      !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)
    if (iOS) {
      infoToast('Create a pdf of the document page before sharing.')
    }
    const dlink = document.createElement('a')
    dlink.download = fileName
    dlink.href =
      isBlob(file) || isFile(file) ? window.URL.createObjectURL(file) : file
    document.body.appendChild(dlink)
    dlink.click()
    document.body.removeChild(dlink)
  }

  return (
    <div className={classes.root}>
      <div>
        <Typography>{fileName}</Typography>
      </div>
      <Grid className={classes.header} container justify="space-between">
        <Grid item>
          <Grid container spacing={8} alignItems="center">
            <Grid item>
              <IconButton color="secondary" onClick={onDownload}>
                <MdFileDownload size={20} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={8} alignItems="center">
            {typeof iconsTopRight === 'function' && iconsTopRight({ scale })}
            <Grid item>
              <IconButton
                title="Zoom in"
                color="secondary"
                onClick={onScaleChange(1)}
                disabled={scale >= 20}
              >
                <MdAdd size={20} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                title="Zoom out"
                color="secondary"
                onClick={onScaleChange(-1)}
                disabled={scale <= 1}
              >
                <MdRemove size={20} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Paper className={classes.paper} style={{ overflow: 'auto' }}>
        <Document
          className={classes.document}
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            className={classes.page}
            pageNumber={pageNumber}
            scale={scale / 10}
          />
        </Document>
      </Paper>
      <div className={classes.pageControl}>
        <IconButton
          color="secondary"
          onClick={onPageChange(-1)}
          disabled={pageNumber <= 1}
        >
          <MdChevronLeft size={20} />
        </IconButton>
        <Typography>
          Page {pageNumber} of {numPages}
        </Typography>
        <IconButton
          color="secondary"
          onClick={onPageChange(1)}
          disabled={pageNumber >= numPages}
        >
          <MdChevronRight size={20} />
        </IconButton>
      </div>
    </div>
  )
}

PDFViewer.propTypes = {
  classes: PropTypes.object.isRequired,
  file: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
  ]).isRequired,
  fileName: PropTypes.string,
}

export default React.memo(withStyles(styles)(PDFViewer))
