import React from 'react'
import cx from 'classnames'
import { makeStyles } from '@material-ui/styles'
import MuiCard from '@material-ui/core/Card'
import Divider from '@material-ui/core/Divider'
import CardContent from '@material-ui/core/CardContent'
import Typography from '../Typography'
import { CardProps, CardDividerProps } from './types'

const useStyles = makeStyles((theme: any) => ({
  root: {
    outline: 'none',
    height: 'auto',
    borderRadius: 20,
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
  header: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem !important',
    },
  },
  divider: {
    border: `1px solid ${theme.palette.thirdary.main}`,
    margin: `${theme.spacing()}px auto ${theme.spacing(2)}px`,
  },
  square: {
    borderRadius: 0,
  },
  center: {
    margin: 'auto',
  },
}))

function Card({
  className,
  classNames = {},
  render,
  contentProps,
  square,
  ...rest
}: CardProps) {
  const classes = useStyles()

  const CardDivider: React.FC<CardDividerProps> = ({
    classes: dividerClasses,
    className: dividerClassName,
    ...rest
  }) => (
    <Divider
      classes={{
        root: cx(classes.divider, dividerClassName, classNames.divider),
        ...dividerClasses,
      }}
      {...rest}
    />
  )

  const CardHeader: React.FC<{ className?: string }> = ({
    className,
    ...others
  }) => (
    <Typography
      className={cx(className, classes.header, classNames.header)}
      variant="h6"
      center
      secondary
      {...others}
    />
  )

  return (
    <MuiCard
      className={cx(classes.root, className, classNames.card, {
        [classes.square]: !!square,
      })}
      {...rest}
    >
      <CardContent
        classes={{
          root: classNames.content,
        }}
        {...contentProps}
      >
        {render &&
          render({
            CardDivider,
            CardHeader,
          })}
      </CardContent>
    </MuiCard>
  )
}

export default Card
