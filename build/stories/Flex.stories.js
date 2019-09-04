import React from 'react';
import { storiesOf } from '@storybook/react';
import Flex from 'components/Flex';
// import getCodeDoc from 'utils/getCodeDoc'
import readme from './docs/flex.md';
storiesOf('Flex', module)
    .addParameters({
    info: {
        text: '',
    },
})
    .add('README', function () { return React.createElement("div", null); }, {
    readme: { content: readme },
})
    .add('default', function () { return React.createElement(Flex, null); });
//# sourceMappingURL=Flex.stories.js.map