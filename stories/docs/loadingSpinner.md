| Prop              | Type                | Default | Description                                                                         |
| ----------------- | ------------------- | ------- | ----------------------------------------------------------------------------------- |
| children          | React.ReactNode     |         |                                                                                     |
| wrapperClassName  | string              |         | `className` passed to the wrapper                                                   |
| className         | string              |         | `className` passed to the loading spinner component                                 |
| childrenClassName | string              |         | `className` passed to the content component                                         |
| wrapperStyle      | React.CSSProperties |         | A CSS styles object passed to  the wrapper                                          |
| childrenStyle     | React.CSSProperties |         | A CSS styles object passed to content component                                     |
| fullscreen        | boolean             | `false` | Takes up the entire screen while the loading spinner will be placed into the center |
| dim               | boolean             | `false` | Dims the background                                                                 |
| white             | boolean             | `false` | Makes the background white                                                          |
| renderContent     | React.ReactNode     |         | Custom renderer function to override the default content component                  |

