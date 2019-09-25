import React from 'react'
import { muiTheme } from 'storybook-addon-material-ui'
import { storiesOf } from '@storybook/react'
import Typography from '../components/Typography'
import FileUpload from '../components/FileUpload'
import readme from './docs/FileUpload/readme.md'
import textMd from './docs/FileUpload/text.md'
import onChangeMd from './docs/FileUpload/onChange.md'
import theme from '../config/theme'

function onChange(fileList, e) {
  console.log(fileList)
  console.log(e)
}

function Wrapper(props: any) {
  return <div style={{ maxWidth: 500 }} {...props} />
}

storiesOf('FileUpload', module)
  .addDecorator(muiTheme(theme))
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  .add(
    'default',
    () => (
      <Wrapper>
        <FileUpload onChange={onChange} />
      </Wrapper>
    ),
    {
      readme: {
        content: `
<!-- STORY -->

<br />

\`\`\`jsx
function onChange(fileList, e) {
  console.log(fileList)
  console.log(e)
}

<FileUpload onChange={onChange} />
\`\`\`
`,
      },
    },
  )
  .add(
    'props.text',
    () => (
      <Wrapper>
        <FileUpload text="The Great Wall of Europe" onChange={onChange} />
      </Wrapper>
    ),
    { readme: { content: textMd } },
  )
  .add(
    'props.onChange',
    () => {
      return React.createElement(() => {
        const [srcs, setSrcs] = React.useState<string[]>([])

        function customOnChange(fileList: FileList) {
          console.log(fileList)
          Array.from(fileList).forEach((file: Blob) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = function() {
              // @ts-ignore
              setSrcs((prev) => [...prev, reader.result])
            }
            reader.onerror = function(error) {
              console.log('Error: ', error)
            }
          })
        }

        return (
          <Wrapper>
            <FileUpload onChange={customOnChange}>
              {!srcs.length && (
                <div
                  style={{ width: '100%', height: '100%', textAlign: 'center' }}
                >
                  <Typography variant="h6" padding={12} primary>
                    Select Images to See Thumbnails
                  </Typography>
                  <img
                    src="https://jsmanifest.s3-us-west-1.amazonaws.com/posts/14-beneficial-tips-to-write-cleaner-code-in-react/thumbnail.jpg"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              )}

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                {srcs.map((src, index) => (
                  <img
                    key={`img_${index}`}
                    src={src}
                    style={{
                      borderRadius: 6,
                      width: 150,
                      height: 150,
                      objectFit: 'cover',
                      margin: 4,
                    }}
                  />
                ))}
              </div>
            </FileUpload>
          </Wrapper>
        )
      })
    },
    { readme: { content: onChangeMd } },
  )
