import React from 'react'
import { storiesOf } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'
import Button from '../components/Button'
import Lightbox from '../components/Lightbox'
import theme from '../config/theme'
import readme from './docs/Lightbox/readme.md'
import srcStringMd from './docs/Lightbox/srcString.md'
import srcArrayOfStringsMd from './docs/Lightbox/srcArrayOfStrings.md'
import srcObjectMd from './docs/Lightbox/srcObject.md'
import srcArrayOfObjectsMd from './docs/Lightbox/srcArrayOfObjects.md'

const images = [
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/the-power-of-higher-order-functions-in-javascript/thumbnail.jpg',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/build-your-app-with-just-react-hooks/thumbnail.jpg',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/6-ways-to-help-keep-you-going-when-working-on-javascript-projects/thumbnail.jpg',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/8-miraculous-ways-to-bolster-your-react-apps/thumbnail.jpg',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/keeping-ui-completely-synchronized-when-uploading-files-in-react/thumbnail.jpg',
]

function Wrapper({ opened, open, onClose, src, ...rest }) {
  return (
    <div>
      <Button
        onClick={open}
        type="submit"
        hover={{ primary: 'white' }}
        primary
        small
      >
        Open Lightbox
      </Button>
      <Lightbox src={src} opened={opened} onClose={onClose} {...rest} />
    </div>
  )
}

function MockComponent({ src }: any) {
  const [opened, setOpened] = React.useState(false)
  const open = () => setOpened(true)
  const onClose = () => setOpened(false)
  return <Wrapper src={src} opened={opened} open={open} onClose={onClose} />
}

storiesOf('Lightbox', module)
  .addDecorator(muiTheme(theme))
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  .add('props.src (string)', () => <MockComponent src={images[0]} />, {
    readme: { content: srcStringMd },
  })
  .add('props.src (array of strings)', () => <MockComponent src={images} />, {
    readme: { content: srcArrayOfStringsMd },
  })
  .add(
    'props.src (object)',
    () => (
      <MockComponent
        src={{
          src:
            'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/6-ways-to-help-keep-you-going-when-working-on-javascript-projects/thumbnail.jpg',
          caption: 'This is one hell of a caption',
        }}
      />
    ),
    { readme: { content: srcObjectMd } },
  )
  .add(
    'props.src (array of objects)',
    () => {
      const src = [
        {
          src:
            'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/keeping-ui-completely-synchronized-when-uploading-files-in-react/thumbnail.jpg',
          caption: 'I would love to go to Georgia',
        },
        {
          src:
            'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/6-ways-to-help-keep-you-going-when-working-on-javascript-projects/thumbnail.jpg',
          caption: 'Lucky Charms',
        },
        {
          src:
            'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/the-power-of-higher-order-functions-in-javascript/thumbnail.jpg',
          caption: 'You found me',
        },
      ]
      return <MockComponent src={src} />
    },
    { readme: { content: srcArrayOfObjectsMd } },
  )
