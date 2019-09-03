import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Field } from 'react-final-form/dist'
import Grid from '@material-ui/core/Grid'
import MuiSelect from '@material-ui/core/Select'
import MuiMenuItem from '@material-ui/core/MenuItem'
import Typography from '../../../components/common/Typography'

const NormalField = React.memo(
  ({ children, label }) => (
    <Grid container spacing={8} justify="flex-start" alignItems="center">
      <Grid item>
        <Typography variant="subtitle2">{label}</Typography>
      </Grid>
      <Grid item>{children}</Grid>
    </Grid>
  ),
  () => true,
)

const MyTypography = withStyles(() => ({
  typography: {
    fontSize: '0.9em',
    color: '#666',
  },
}))(({ classes, children, ...props }) => (
  <Typography className={classes.typography} {...props}>
    {children}
  </Typography>
))

// const renderSelectSex = ({ input, meta, ...restProps }) => (
//   <MuiSelect value={input.value} {...restProps}>
//     <MuiMenuItem value="Male">
//       <MyTypography center>Male</MyTypography>
//     </MuiMenuItem>
//     <MuiMenuItem value="Female">
//       <MyTypography center>Female</MyTypography>
//     </MuiMenuItem>
//   </MuiSelect>
// )

const renderTypography = ({ input, meta, ...restProps }) => (
  <MyTypography center {...restProps}>
    {typeof input.value === 'string'
      ? input.name.includes('dob')
        ? ''
        : input.value || ''
      : ''}
  </MyTypography>
)

const ProviderDrawerSummaryPatientDemographics = () => (
  <Grid container spacing={8} justify="flex-start" alignItems="center">
    <Grid item xs={12}>
      <NormalField label="Date:">
        <Field name="date" render={renderTypography} />
      </NormalField>
    </Grid>
    <Grid item xs={12}>
      <NormalField label="Patient Name:">
        <Field name="patientName" render={renderTypography} />
      </NormalField>
    </Grid>
    <Grid item xs={12} sm={3}>
      <NormalField label="Sex:">
        <Field name="sex" render={renderTypography} />
      </NormalField>
    </Grid>
    <Grid item xs={12} sm={3}>
      <NormalField label="Age:">
        <Field name="age" render={renderTypography} />
      </NormalField>
    </Grid>
    <Grid item xs={12} sm={3}>
      <NormalField label="DOB:">
        <Field name="dob" render={renderTypography} />
      </NormalField>
    </Grid>
  </Grid>
)

export default ProviderDrawerSummaryPatientDemographics
