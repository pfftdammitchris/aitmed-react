import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHeader from './TableHeader'
import ICD10Searcher from './ICD10Searcher'
import RowRenderer from './RowRenderer'

interface ICD10Props {
  fields: any
  meta: any
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    padding: '15px 0',
    '& hr': {
      height: '0px !important',
      border: '0 !important',
    },
  },
  inputArea: {},
  label: {
    fontSize: '1rem',
    fontWeight: 400,
    marginBottom: 10,
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8rem',
    },
  },
  add: {
    margin: `${theme.spacing()}px 0`,
  },
  addButton: {
    padding: 1,
    fontSize: '0.6rem',
  },
}))

const ICD10: React.FC<ICD10Props> = ({ fields = [], meta }) => {
  const classes = useStyles()
  const [highlightedField, setHighlightedField] = React.useState(0)

  const highlightField = (index: number) => () => setHighlightedField(index)
  const onDelete = (index: number) => () => fields.remove(index)

  React.useEffect(() => {
    if (highlightedField !== fields.length - 1) {
      setHighlightedField(fields.length - 1)
    }
  }, [fields.length])

  return (
    <div className={classes.root}>
      <ICD10Searcher highlightedField={highlightedField} fields={fields} />
      <Table padding="checkbox" size="small">
        <TableHeader />
        <TableBody>
          {fields.map((name: string, index: number) => (
            <RowRenderer
              key={`row_renderer${index}`}
              isHighlighted={highlightedField === index}
              highlightField={highlightField(index)}
              name={name}
              index={index}
              onDelete={onDelete(index)}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default ICD10
