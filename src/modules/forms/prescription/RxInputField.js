import React, { useState } from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Downshift from 'downshift'
import { connect } from 'react-redux'
import Typography from 'components/common/Typography'
import { request } from 'util/requests'
import urls from 'config/urls'

const styles = (theme) => ({
  field: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  input: {
    margin: 'auto',
    display: 'block',
    padding: 12,
    border: '1px solid #fff',
    color: theme.palette.text.light,
    fontSize: '0.8rem',
    maxWidth: '93%',
    marginBottom: -6,
    '&:hover': {
      background: theme.palette.background.coolShade,
      border: `1px solid ${theme.palette.borders.cool}`,
      color: '#fff',
    },
  },
  searchBtn: {
    marginTop: -6,
    padding: '3px 8px !important',
    border: `1px solid ${theme.palette.borders.cloudiest} !important`,
    background: `${theme.palette.background.dark} !important`,
    color: '#fff',
    fontSize: '0.55rem !important',
    position: 'relative',
  },
  menuOptions: {
    position: 'relative',
    listStyle: 'none',
    color: '#fff',
    padding: 0,
    fontSize: '0.7rem',
    width: '100%',
    overflow: 'hidden',
    maxWidth: 250,
    display: 'block',
    margin: `${theme.spacing.unit}px auto`,
    background: theme.palette.background.secondary,
    '& > li': {
      transition: 'all 0.2s ease-out',
      cursor: 'pointer',
      '&:hover': {
        paddingLeft: 8,
        background: '#000',
      },
    },
  },
})

export const callSearchApi = (keyword, token) => {
  return new Promise((resolve, reject) => {
    request({
      method: 'get',
      url: urls.provider.rxSearch(keyword),
      headers: {
        Authorization: `JWT ${token}`,
      },
    })
      .then((response) => ({
        result: response.data.result.data,
        pagination: response.data.result.pagination,
      }))
      .catch(reject)
  })
}

export const formatResults = (options) =>
  options.map(({ drug_name, strength }) => ({
    value: `${drug_name} ${strength}`,
  }))

const ProviderPrescriptionRxInputField = ({ classes, token, index }) => {
  const [drugs, setDrugs] = useState([])
  const [{ fetching, success, error }, setFetching] = useState({
    fetching: false,
    success: null,
    error: null,
  })
  const [opened, setOpened] = useState(false)

  const onSelect = () => {
    setOpened(false)
  }

  const onOuterClick = () => {
    setOpened(false)
  }

  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      setFetching({ fetching: true })
      const { value } = e.target
      callSearchApi(value, token)
        .then(({ result, pagination }) => {
          setFetching({ fetching: false, success: true, error: null })
          return setDrugs(result)
        })
        .catch((err) => {
          console.error(err)
          setFetching({ fetching: false, success: false, error: err })
        })
      setOpened(true)
    }
  }

  return (
    <Downshift
      id={`bottle-name${index}`}
      itemToString={(item) => (item ? item.value : '')}
      onSelect={onSelect}
      isOpen={opened}
      onOuterClick={onOuterClick}
    >
      {({ getInputProps, getItemProps, getMenuProps, isOpen, inputValue }) => (
        <div className={classes.field}>
          <input
            {...getInputProps({
              className: classes.input,
              onKeyPress,
              onClick: () => setOpened(true),
              id: `rx-input${index}`,
            })}
          />
          <ul
            {...getMenuProps({
              className: classes.menuOptions,
            })}
          >
            {isOpen
              ? formatResults(drugs)
                  .filter((drug) => !inputValue !== drug.value)
                  .map((drug, i) => (
                    <li
                      {...getItemProps({
                        item: drug,
                        key: drug.value,
                        index: i,
                      })}
                    >
                      {drug.value}
                    </li>
                  ))
              : null}
          </ul>
          <Typography
            style={{
              width: '100%',
              textAlign: 'center',
              margin: 0,
              opacity: 0.5,
              visibility: inputValue ? 'hidden' : 'visible',
            }}
            variant="caption"
          >
            (Press enter to search)
          </Typography>
        </div>
      )}
    </Downshift>
  )
}

ProviderPrescriptionRxInputField.propTypes = {
  classes: PropTypes.object.isRequired,
  token: PropTypes.string,
  index: PropTypes.number.isRequired,
}

export default withStyles(styles)(
  connect((state) => ({
    token: state.app.user.user.token,
    ...state.aitmed.provider.rx,
  }))(React.memo(ProviderPrescriptionRxInputField)),
)
