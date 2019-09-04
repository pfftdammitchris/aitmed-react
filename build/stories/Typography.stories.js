import React from 'react';
import { storiesOf } from '@storybook/react';
import Grid from '@material-ui/core/Grid';
import Typography from 'components/Typography';
import readme from './docs/typography.md';
var lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque\nexplicabo ipsa eveniet porro ullam itaque possimus natus aperiam corrupti\nvitae laboriosam debitis laudantium excepturi ducimus maxime necessitatibus\nadipisci, officia perferendis.";
storiesOf('Typography', module)
    .add('README', function () { return React.createElement("div", null); }, {
    readme: { content: readme },
})
    .add('default', function () { return React.createElement(Typography, null, lorem); })
    .add('primary', function () { return React.createElement(Typography, { primary: true }, lorem); })
    .add('secondary', function () { return React.createElement(Typography, { secondary: true }, lorem); })
    .add('thirdary', function () { return React.createElement(Typography, { thirdary: true }, lorem); })
    .add('link', function () { return React.createElement(Typography, { link: true }, lorem); })
    .add('italic', function () { return React.createElement(Typography, { italic: true }, lorem); })
    .add('unselected', function () { return React.createElement(Typography, { unselected: true }, lorem); })
    .add('centerOnSmall', function () { return React.createElement(Typography, { centerOnSmall: true }, lorem); })
    .add('variants', function () {
    var variants = Object.keys({
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        subtitle1: 'h6',
        subtitle2: 'h6',
        body1: 'p',
        body2: 'p',
    });
    return variants.map(function (variant) { return (React.createElement(Grid, { key: variant, justify: "center", container: true },
        React.createElement(Grid, { xs: 2, item: true }, variant),
        React.createElement(Grid, { xs: 6, item: true },
            React.createElement(Typography, { variant: variant }, "Lorem, ipsum ")))); });
});
//# sourceMappingURL=Typography.stories.js.map