# common utilities

## Generating values

### `genPhoneNumberForDatabase({ phone_number: string, code: CountryCode }): Promise<false | string>`

Takes an object of a `phone_number` and a `code` to generate a specific phone number format that the backend uses.

```jsx
import React from 'react'
import { genPhoneNumberForDatabase } from '@aitmed/react/dist/utils'

const params = {
  phone_number: '6262468491',
  code: 'US',
}

genPhoneNumberForDatabase(params)
  .then((result) => {
    if (result === undefined) {
      //
    } else {
      // type result === 'string'
    }
  })
  .catch((error) => console.error(error))
```

### `validatePhoneNumber({ phone_number: string, code: CountryCode }): Promise<boolean>`

Takes an object of a `phone_number` and a `code` to validate if a combination of the `phone_number` and `code` together is valid.

```jsx
import React from 'react'
import { validatePhoneNumber } from '@aitmed/react/dist/utils'

const params = {
  phone_number: '6262468491',
  code: 'US',
}

validatePhoneNumber(params)
  .then((result) => {
    if (result) {
      //
    } else {
      //
    }
  })
  .catch((error) => console.error(error))
```

### Utilities
