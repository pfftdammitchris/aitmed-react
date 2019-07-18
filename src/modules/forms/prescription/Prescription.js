import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import PropTypes from 'prop-types'
import Divider from '@material-ui/core/Divider'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from 'components/common/Typography'
import SignatureCanvas from 'components/common/SignatureCanvas'
import Header from 'components/PortalPage/Provider/FormsHeader'
import { renderBottles, RxField } from '.'

const styles = (theme) => ({
  divider: {
    border: '3px solid black',
    margin: `${theme.spacing.unit * 3}px 0`,
  },
  clearBtn: {},
  closeBtn: {},
  addNew: {
    position: 'relative',
    width: '100%',
    minHeight: 25,
    margin: `${theme.spacing.unit}px auto !important`,
    '& $addBottleIcon': {
      transition: 'all 0.2s ease-out',
      fontSize: '2.5em',
      width: 25,
      height: 25,
      cursor: 'pointer',
      borderRadius: '50%',
      border: '1px solid #fff',
      color: '#fff !important',
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        background: 'none !important',
        border: `1px solid ${theme.palette.secondary.main}`,
        color: `${theme.palette.secondary.main} !important`,
      },
    },
    '& span': {
      position: 'relative',
      right: 5,
      fontWeight: 700,
      color: theme.palette.secondary.main,
    },
  },
  addBottleIcon: {},
  signatureCanvas: {
    width: '90%',
    maxHeight: 90,
    [theme.breakpoints.up('xs')]: {
      maxHeight: 60,
    },
  },
})

const Prescription = ({
  classes,
  signatureRef,
  signatureInputRef,
  validateSignature,
  header,
}) => (
  <>
    <Header supportEmail="prescription@aitmed.com" {...header} />
    <Divider className={classes.divider} />
    <Field name="rx" component={RxField} subscription={{}} />
    <Divider className={classes.divider} style={{ marginBottom: 0 }} />
    <FieldArray
      component={renderBottles}
      name="bottles"
      addNewClassName={classes.addNew}
      addIconClassName={classes.addBottleIcon}
      subscription={{}}
    />
    <Field
      classNames={{ canvasContainer: classes.signatureCanvas }}
      component={SignatureCanvas}
      name="signature"
      signatureRef={signatureRef}
      signatureInputRef={signatureInputRef}
      validate={validateSignature}
      signatureCaption={
        <Typography variant="caption">
          This prescription is to be void after 14 days of the prescribed date
        </Typography>
      }
      hideClear
    />
  </>
)

Prescription.propTypes = {
  classes: PropTypes.object.isRequired,
  signatureRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  signatureInputRef: PropTypes.object,
  validateSignature: PropTypes.func.isRequired,
  header: PropTypes.object.isRequired,
}

export default React.memo(withStyles(styles)(Prescription))
