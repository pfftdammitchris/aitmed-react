import React from 'react'
import { muiTheme } from 'storybook-addon-material-ui'
import { storiesOf } from '@storybook/react'
import { MdVpnLock } from 'react-icons/md'
import { FaFilePdf, FaHaykal } from 'react-icons/fa'
import PhotoList from '../modules/PhotoList'
import readme from './docs/PhotoList/readme.md'
import theme from '../config/theme'

function Wrapper(props: any) {
  return <div style={{ maxWidth: 600, margin: 'auto' }} {...props} />
}

const images = [
  {
    src:
      'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/the-power-of-higher-order-functions-in-javascript/thumbnail.jpg',
    ext: '.pdf',
    title: 'The dog was unleased on friday',
    description: 'This is the description for the leased dog ',
  },
  {
    src:
      'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/build-your-app-with-just-react-hooks/thumbnail.jpg',
    title: 'This is the title. Nothing new',
  },
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/6-ways-to-help-keep-you-going-when-working-on-javascript-projects/thumbnail.jpg',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/8-miraculous-ways-to-bolster-your-react-apps/thumbnail.jpg',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/keeping-ui-completely-synchronized-when-uploading-files-in-react/thumbnail.jpg',
]

function onClick(args, e) {
  console.log(args)
  console.log(e)
}

const actions = [
  { name: 'edit', onClick },
  {
    name: 'cancel',
    title: 'what',
    onClick,
  },
  {
    component: function(props) {
      return <MdVpnLock />
    },
  },
]

storiesOf('PhotoList', module)
  .addDecorator(muiTheme(theme))
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  .add('default', () => (
    <Wrapper>
      <PhotoList items={images} />
    </Wrapper>
  ))
  .add('props.actions', () => (
    <Wrapper>
      <PhotoList items={images} actions={actions} />
    </Wrapper>
  ))
  .add('props.icons', () => (
    <Wrapper>
      <PhotoList
        actions={actions}
        items={images}
        icons={{
          pdf: {
            // round: true,
            component: FaFilePdf,
          },
          edit: FaHaykal,
        }}
      />
    </Wrapper>
  ))
