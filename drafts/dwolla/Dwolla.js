/*
  Official dwolla docs:
      https://docsv2.dwolla.com/#introduction
  dwolla-v2-node api documentation:
      https://github.com/Dwolla/dwolla-v2-node
  Instant Account Verification (IAV) flow:
      https://developers.dwolla.com/resources/dwolla-js/instant-account-verification.html
*/
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { error } from 'util/toast'
import api from 'api/client'
import {
  getFundingStatus,
  beginDwollaIavFlow,
  cancelDwollaIavFlow,
} from 'actions/aitmed'
import { env } from 'config/urls'
import Container from 'components/dwolla/Container'

let intervalId

class Dwolla extends React.Component {
  componentDidMount = () => {
    this.mounted = true
  }

  componentWillUnmount = () => {
    this.mounted = false
  }

  /** Starts the IAV flow. Token is generated from this.getToken()
      On success it generates a link to the newly created + verified funding source.
      Use that value to initiate a transfer/store the created resource somewhere.
   * @param { string } token - Token given from backend
   * @param { HTMLElement } container - HTML Element to render the IAV flow into
   * @param { string[] } stylesheets - Array of stylesheets to inject into the container (<link rel="" />, ...)
   */
  start = ({ container, stylesheets = [], onDwollaLoad = noop, ...opts }) => {
    this.props.beginDwollaIavFlow(this.props.user)

    // If bank verify form still loading after 10 seconds,
    // recall this._getToken()
    const renderBankVerifyForm = () => {
      this._getToken()
        .then((token) => {
          clearInterval(intervalId)
          // Setting a timeout to give the library some time to find the div element.
          // TODO: Implement a more robust solution
          setTimeout(() => {
            if (this.mounted === false) return
            const iavElem = document.getElementById('iav')
            if (!iavElem || iavElem.children.length > 0) return
            this._loadDwolla().then(() => {
              if (onDwollaLoad) {
                onDwollaLoad(iavElem)
              }
              window.dwolla.iav.start(
                token,
                {
                  backButton: true,
                  environment: this._getEnv(),
                  stylesheets,
                  container: container || 'iav',
                  ...opts,
                },
                (...args) => {
                  const [_error, response] = args
                  if (_error.code === 'InvalidIavToken') {
                    error(
                      'Sorry, we could not verify your bank account. Please try again later.',
                    )
                  }
                },
              )
            })
          }, 1000)
        })
        .catch((error) => this.setState({ error }))

      // The setInterval will not call this function after 10000ms if this func does not return itself
      return renderBankVerifyForm
    }
    intervalId = setInterval(renderBankVerifyForm(), 10000)
  }

  cancelVerifying = async () => {
    // Remove interval listener when canceling verifying
    await clearInterval(intervalId)
    this.props.cancelDwollaIavFlow(this.props.user)
  }

  render() {
    return this.props.render(this._getHelpers())
  }

  // Returns an object of our state + handlers
  _getHelpers = () => ({
    Container,
    start: this.start,
    cancelVerifying: this.cancelVerifying,
    bank: this.props.bank,
  })

  // Token generated is non-expiring (lasts forever). Used to authenthicate the HTTP req. for dwolla to start the IAV flow
  _getToken = () => {
    return new Promise((resolve, reject) => {
      const { user } = this.props
      if (!user.token) {
        reject(new Error('The token is invalid.'))
      } else {
        if (this.mounted === false) resolve()
        api
          .fetchDwollaToken()
          .then(resolve)
          .catch(reject)
      }
    })
  }

  // Loads the dwolla client into the browser
  _loadDwolla = () => {
    return new Promise((resolve) => {
      if (this.mounted === false) resolve()
      const environment = this._getEnv()
      const s = document.createElement('script')
      s.type = 'text/javascript'
      s.async = true
      s.src = 'https://cdn.dwolla.com/1/dwolla.min.js'
      s.addEventListener('load', () => {
        window.dwolla.configure(environment)
        resolve()
      })
      document.body.appendChild(s)
    })
  }

  _getEnv = () => {
    return env === 'testapi' ? 'sandbox' : 'prod'
  }
}

Dwolla.propTypes = {
  bank: PropTypes.shape({
    mandatory: PropTypes.array.isRequired,
    verified: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    verifying: PropTypes.bool.isRequired,
  }).isRequired,
  getFundingStatus: PropTypes.func.isRequired,
  beginDwollaIavFlow: PropTypes.func.isRequired,
  cancelDwollaIavFlow: PropTypes.func.isRequired,
}

export default connect(
  (state) => {
    const { user } = state.app.user
    let accountType = user.accountType
    if (user.accountType === 'staffing_company') accountType = 'staffing'
    return {
      bank: state.aitmed[accountType] && state.aitmed[accountType].bank,
      user,
    }
  },
  { getFundingStatus, beginDwollaIavFlow, cancelDwollaIavFlow },
)(Dwolla)

function noop() {}
