import React from 'react'
// import { makeStyles } from '@material-ui/styles'
// @ts-ignore
import Carousel, { Modal, ModalGateway } from 'react-images'
import LightboxFooterCaption from './LightboxFooterCaption'
import LightboxFooterCount from './LightboxFooterCount'
import { Close, Fullscreen, withEnhancement } from './actions'
import useLightbox from './useLightbox'
import { SrcProps } from './types'

type ModalStyleFn = (
  styleObj: ModalStyleFnObj,
  state: ModalStyleFnState,
) => React.CSSProperties
type ModalStyleFnObj = { [key: string]: any }
type ModalStyleFnState = { [key: string]: any }

interface LightboxProps {
  src: SrcProps
  opened: boolean
  onClose: () => void
  modalStyles?: {
    blanket?: ModalStyleFn
    dialog?: ModalStyleFn
    positioner?: ModalStyleFn
  }
  actionsConfig?: {
    close?: { [key: string]: any }
    fullscreen?: { [key: string]: any }
  }
}

// const useStyles = makeStyles({
//   root: {
//     //
//   },
// })

function Lightbox({
  src,
  opened,
  onClose,
  modalStyles,
  actionsConfig = {},
}: LightboxProps) {
  // const classes = useStyles()
  const { images } = useLightbox({ src })

  return (
    <ModalGateway>
      {opened ? (
        <Modal onClose={onClose} styles={modalStyles}>
          <Carousel
            views={images}
            components={{
              FooterCaption: LightboxFooterCaption,
              FooterCount: LightboxFooterCount,
              HeaderClose: withEnhancement(Close, {
                label: 'Close',
                ...actionsConfig.close,
              }),
              HeaderFullscreen: withEnhancement(Fullscreen, {
                label: 'Fullscreen',
                ...actionsConfig.fullscreen,
              }),
            }}
          />
        </Modal>
      ) : null}
    </ModalGateway>
  )
}

export default Lightbox
