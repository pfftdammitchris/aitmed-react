import React from 'react';
import { storiesOf } from '@storybook/react';
import SignatureCanvas from 'components/finalForm/SignatureCanvas';
// import getCodeDoc from 'utils/getCodeDoc'
import readme from './docs/signatureCanvas.md';
storiesOf('SignatureCanvas (final-form)', module)
    .add('README', function () { return React.createElement("div", null); }, {
    readme: { content: readme },
})
    .add('default', function () { return React.createElement(SignatureCanvas, null); });
//# sourceMappingURL=SignatureCanvas.stories.js.map