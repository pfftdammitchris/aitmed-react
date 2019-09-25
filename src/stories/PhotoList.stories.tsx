import React from 'react'
import { muiTheme } from 'storybook-addon-material-ui'
import { storiesOf } from '@storybook/react'
import { MdVpnLock } from 'react-icons/md'
import PhotoList from '../modules/PhotoList'
import Typography from '../components/Typography'
import readme from './docs/PhotoList/readme.md'
import theme from '../config/theme'
import { commonIcons } from '../utils'

function Wrapper(props: any) {
  return <div style={{ maxWidth: 500, margin: 'auto' }} {...props} />
}

const images = [
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/the-power-of-higher-order-functions-in-javascript/thumbnail.jpg',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/build-your-app-with-just-react-hooks/thumbnail.jpg',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/6-ways-to-help-keep-you-going-when-working-on-javascript-projects/thumbnail.jpg',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/8-miraculous-ways-to-bolster-your-react-apps/thumbnail.jpg',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/keeping-ui-completely-synchronized-when-uploading-files-in-react/thumbnail.jpg',
]

storiesOf('PhotoList', module)
  .addDecorator(muiTheme(theme))
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  .add('default', () => {
    const actions = [
      { name: 'edit' },
      { name: 'cancel' },
      {
        name: 'mortalKombat',
        component: function(props) {
          console.log(props)
          return <MdVpnLock />
        },
      },
    ]
    return (
      <PhotoList header="PhotoList Header" items={images} actions={actions} />
    )
  })
