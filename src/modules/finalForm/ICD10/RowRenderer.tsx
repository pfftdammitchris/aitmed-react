import React from 'react'
import { Field } from 'react-final-form'
import cx from 'classnames'
import { makeStyles } from '@material-ui/styles'
import MaterialUIInput from '@material-ui/core/Input'
import TableRow from '@material-ui/core/TableRow'
import { IoIosCloseCircle } from 'react-icons/io'
import TableCell from './TableCell'

interface RowRendererProps {
  name: string
  index: number
  onDelete: (args: any) => void
  highlightField: (args: any) => void
  isHighlighted: boolean
}

const useStyles = makeStyles((theme: any) => ({
  field: {
    '&:hover': {
      '& $closeIcon': {
        visibility: 'visible',
      },
    },
    [theme.breakpoints.down('xs')]: {
      height: 38,
    },
  },
  input: {
    marginRight: 4,
    padding: '10px !important',
    border: `1px solid ${theme.palette.borders.cool}`,
    marginBottom: 1,
    fontSize: '0.8rem',
    '&:hover': {
      border: `1px solid ${theme.palette.thirdary.dark}`,
      background: '#fff',
      color: '#666',
      '& $highlightedCell': {
        border: 'none !important',
      },
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7rem',
      padding: 3,
    },
  },
  selectedField: {
    borderBottom: '0 !important',
    '& input': {
      border: `1px solid ${theme.palette.secondary.main}`,
      color: '#333',
      '&:hover': {
        border: `1px solid ${theme.palette.thirdary.dark}`,
      },
    },
  },
  closeIcon: {
    transform: 'scale(1.6)',
    visibility: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.15s ease-out',
    '&:hover': {
      color: theme.palette.thirdary.dark,
      transform: 'scale(1.7)',
    },
  },
  highlightedCell: {},
}))

const ICD10RowRenderer: React.FC<RowRendererProps> = ({
  name,
  onDelete,
  highlightField,
  isHighlighted,
}) => {
  const classes = useStyles()
  const cells = ['code', 'description', 'comment']
  return (
    <TableRow
      selected={isHighlighted}
      onClick={highlightField}
      classes={{
        root: classes.field,
        selected: classes.selectedField,
      }}
    >
      {cells.map((cellName, index) => (
        <TableCell key={`${cellName}${index}`}>
          <Field
            name={`${name}.${cellName}`}
            render={({ input, meta, ...rest }) => (
              <MaterialUIInput
                id={input.name}
                classes={{
                  input: cx(classes.input, {
                    [classes.highlightedCell]: isHighlighted,
                  }),
                }}
                {...input}
                {...rest}
                autoFocus={cellName === 'code' && isHighlighted}
                disableUnderline
              />
            )}
          />
        </TableCell>
      ))}

      <TableCell>
        <IoIosCloseCircle
          onClick={onDelete}
          title="Delete this row"
          className={classes.closeIcon}
        />
      </TableCell>
    </TableRow>
  )
}

const EnhancedICD10RowRenderer = React.memo(
  ICD10RowRenderer,
  (props, nextProps) => {
    if (
      props.name !== nextProps.name ||
      props.index !== nextProps.index ||
      props.isHighlighted !== nextProps.isHighlighted
    ) {
      return false
    }
    return true
  },
)

export default EnhancedICD10RowRenderer
