import React from 'react';
import Typography from '@material-ui/core/Typography';
import { storiesOf } from '@storybook/react';
import Card from 'components/Card';
import readme from './docs/card.md';
storiesOf('Card', module)
    .add('README', function () { return React.createElement("div", null); }, {
    readme: { content: readme },
})
    .add('default', function () { return (React.createElement(Card, { render: function (_a) {
        var CardHeader = _a.CardHeader, CardDivider = _a.CardDivider;
        return (React.createElement("div", null,
            React.createElement(CardHeader, null, "The header"),
            React.createElement(CardDivider, null),
            React.createElement(Typography, null, "Please Login Now")));
    } })); });
//# sourceMappingURL=Card.stories.js.map