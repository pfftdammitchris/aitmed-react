import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from 'components/Button';
import readme from './docs/button.md';
storiesOf('Button', module)
    .add('README', function () { return React.createElement("div", null); }, {
    readme: { content: readme },
})
    .add('default', function () { return React.createElement(Button, null, "Button"); });
//# sourceMappingURL=Button.stories.js.map