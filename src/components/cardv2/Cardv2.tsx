// UNDER CONSTRUCTION
import React from 'react'
import cx from 'classnames'
import { makeStyles } from '@material-ui/styles'
import Card from '@material-ui/core/Card'
import Divider from '@material-ui/core/Divider'
import CardContent from '@material-ui/core/CardContent'
import Typography from 'components/typography'
import Input from './Input'
import ActionButtons from './ActionButtons'
import { Cardv2Props } from './types'

const useStyles = makeStyles((theme: any) => ({
  root: {
    outline: 'none',
    transition: 'all 0.3s ease-out',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: 'auto',
    maxWidth: 450,
    height: 'auto',
    borderRadius: 25,
    padding: 12,
    border: `1px solid ${theme.palette.borders.cool}`,
    boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.05)',
    [theme.breakpoints.down('xs')]: {
      margin: 'auto',
      '& h6': {
        fontSize: '1.2em',
      },
    },
  },
  content: {
    width: '100%',
    flexBasis: '100%',
  },
  header: {
    marginBottom: theme.spacing.unit * 2,
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px auto !important`,
    border: `1px solid ${theme.palette.thirdary.main}`,
  },
  primary: {
    background: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    '& h1, h2, h3, h4, h5, h6, p, span': {
      color: '#fff',
    },
  },
  secondary: {
    background: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
    '& h1, h2, h3, h4, h5, h6, p, span': {
      color: '#fff',
    },
  },
  thirdary: {
    background: theme.palette.thirdary.main,
    border: `1px solid ${theme.palette.thirdary.main}`,
    '& h1, h2, h3, h4, h5, h6, p, span': {
      color: '#fff',
    },
  },
  fullWidth: {
    width: '100% !important',
    maxWidth: '100%',
  },
  square: {
    borderRadius: '0 !important',
  },
  center: {
    margin: 'auto',
  },
}))

const Cardv2: React.FC<Cardv2Props> = ({
  className,
  classNames = {},
  header,
  style,
  cardContentClassName,
  children,
  render,
  primary,
  secondary,
  thirdary,
  fullWidth,
  maxWidth,
  center,
  cardProps,
  cardContentProps,
  square,
}) => {
  const classes = useStyles()

  const CardDivider = ({ className, margin, width, style = {}, ...rest }) => (
    <Divider
      style={{ ...style, margin: margin || 'auto', width }}
      className={cx(classes.divider, className, classNames.divider)}
      {...rest}
    />
  )

  const Header = ({ className, ...others }) => (
    <Typography
      className={cx(className, classes.header, classNames.header)}
      variant="h6"
      center
      secondary
      {...others}
    />
  )

  const renderProps = {
    CardDivider,
    Header,
    Input,
    Actions: ActionButtons,
  }

  return (
    <Card
      raised
      className={cx(classes.root, className, classNames.card, {
        [classes.primary]: !!primary,
        [classes.secondary]: !!secondary,
        [classes.thirdary]: !!thirdary,
        [classes.fullWidth]: !!fullWidth,
        [classes.square]: !!square,
        [classes.center]: !!center,
      })}
      style={{ maxWidth, ...style }}
      {...cardProps}
    >
      {header}
      <CardContent
        id="card-content"
        classes={{
          root: cx(classes.content, cardContentClassName, classNames.content),
        }}
        {...cardContentProps}
      >
        {render && render(renderProps)}
        {children && children}
      </CardContent>
    </Card>
  )
}

export default Cardv2
