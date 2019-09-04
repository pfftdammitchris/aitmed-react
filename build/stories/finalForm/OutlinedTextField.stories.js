import React from 'react';
import { storiesOf } from '@storybook/react';
import OutlinedTextField from 'components/finalForm/OutlinedTextField';
import readme from '../docs/finalForm/outlinedTextField.md';
storiesOf('(final-form) OutlinedTextField', module)
    .add('README', function () { return React.createElement("div", null); }, {
    readme: { content: readme },
})
    .add('default', function () { return (React.createElement(OutlinedTextField, null, "OutlinedTextField")); });
//# sourceMappingURL=OutlinedTextField.stories.js.map