import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'

import Button from '@material-ui/core/Button'

import Cropper from 'react-easy-crop'
import { MdClose } from 'react-icons/md'
import Avatar from '@material-ui/core/Avatar'

const styles = (theme) => ({
  root: {
    margin: 'auto',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
    '> button': {
      position: 'absolute',
      right: theme.spacing.unit,
      top: theme.spacing.unit,
      color: theme.palette.grey[500],
    },
  },
  content: {
    position: 'relative',
    width: '500px',
    height: '500px',
    margin: 0,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    backgroundColor: '#666',
  },
  actions: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit,
  },
  cropperReset: {
    color: theme.palette.thirdary.main,
  },
  cropperSave: {
    color: theme.palette.secondary.main,
  },
})

const CropperDialog = ({
  classes,
  image,
  label,
  open,
  onClose,
  onSave,
  cropWidth = 64,
  cropHeight = 64,
}) => {
  const [crop, setCrop] = React.useState({ x: 0, y: 0 })
  const [zoom, setZoom] = React.useState(1)
  const [rotation, setRotation] = React.useState(0)
  const [croppedAreaPixels, setCroppedAreaPixels] = React.useState(null)

  const onCropChange = (crop) => {
    setCrop(crop)
  }

  const onZoomChange = (zoom) => {
    setZoom(zoom)
  }

  const onReset = () => {
    setCrop({ x: 0, y: 0 })
    setZoom(1)
  }

  const onRotate = () => {
    setRotation((prevRotate) => prevRotate + 10)
  }

  const onComplete = (area, areaPixels) => {
    setCroppedAreaPixels(areaPixels)
  }

  const getCroppedImg = (img, pixelCrop) => {
    const canvas = document.createElement('canvas')
    canvas.width = cropWidth
    canvas.height = cropHeight
    const ctx = canvas.getContext('2d')

    const newImage = new Image()
    newImage.src = img
    ctx.drawImage(
      newImage,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      cropWidth,
      cropHeight,
    )

    // As Base64 string
    return canvas.toDataURL('image/jpeg')

    // As a blob
    // return new Promise((resolve, reject) => {
    //   canvas.toBlob(blob => {
    //     blob.name = fileName;
    //     resolve(blob);
    //   }, 'image/jpeg');
    // });
  }

  const preperSave = () => {
    const img = getCroppedImg(image, croppedAreaPixels)
    onSave(img)
  }

  return (
    <Dialog open={open} onClose={onClose}>
      {label ? (
        <MuiDialogTitle disableTypography className={classes.title}>
          <Typography variant="h6">{label}</Typography>
          {onClose ? (
            <IconButton
              aria-label="Close"
              className={classes.closeButton}
              onClick={onClose}
            >
              <MdClose />
            </IconButton>
          ) : null}
        </MuiDialogTitle>
      ) : null}
      <MuiDialogContent className={classes.content}>
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={1}
          rotation={rotation}
          cropShape="round"
          showFrid={false}
          onCropChange={onCropChange}
          onCropComplete={onComplete}
          onZoomChange={onZoomChange}
        />
      </MuiDialogContent>
      <MuiDialogActions className={classes.actions}>
        <Button
          color="secondary"
          size="small"
          cariant="outlined"
          onClick={onRotate}
        >
          Rotate
        </Button>
        <Button
          color="secondary"
          size="small"
          cariant="outlined"
          onClick={onReset}
        >
          Reset
        </Button>
        <Button
          color="primary"
          size="small"
          cariant="outlined"
          onClick={preperSave}
        >
          Save
        </Button>
      </MuiDialogActions>
    </Dialog>
  )
}

CropperDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  label: PropTypes.string,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  cropWidth: PropTypes.number,
  cropHeight: PropTypes.number,
}

export default withStyles(styles)(CropperDialog)
