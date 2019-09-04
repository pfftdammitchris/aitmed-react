import React from 'react';
import { storiesOf } from '@storybook/react';
import Divider from 'components/Divider';
// import getCodeDoc from 'utils/getCodeDoc'
import readme from './docs/divider.md';
storiesOf('Divider', module)
    .add('README', function () { return React.createElement("div", null); }, {
    readme: { content: readme },
})
    .add('default', function () { return React.createElement(Divider, null); })
    .add('margin 35px auto', function () { return React.createElement(Divider, { margin: "35px auto" }); });
//# sourceMappingURL=Divider.stories.js.map