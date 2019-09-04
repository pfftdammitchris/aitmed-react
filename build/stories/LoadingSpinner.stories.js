var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { storiesOf } from '@storybook/react';
import Typography from 'components/Typography';
import LoadingSpinner from 'components/LoadingSpinner';
import getCodeDoc from 'utils/getCodeDoc';
import readme from './docs/loadingSpinner.md';
var darkBg = '#072E48';
var Container = function (props) { return (React.createElement("div", __assign({}, props, { style: { margin: 'auto', width: 450, padding: 20 } }))); };
var renderLoadingSpinner = function (_a) {
    var _b = _a === void 0 ? {} : _a, dark = _b.dark, spinner = _b.spinner;
    var widths = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'];
    return (React.createElement("div", { style: { background: dark ? darkBg : undefined } },
        React.createElement(Container, null, widths.map(function (size) {
            var _a;
            var spinnerProps = (_a = {}, _a[size] = size, _a);
            return (React.createElement(Grid, { key: "spinner" + size, spacing: 0, container: true },
                React.createElement(Grid, { xs: 2, item: true },
                    React.createElement(Typography, { white: !!dark }, size)),
                React.createElement(Grid, { xs: 6, item: true },
                    React.createElement(LoadingSpinner, __assign({}, spinnerProps, spinner), "Loading..."))));
        }))));
};
storiesOf('LoadingSpinner', module)
    .add('README', function () { return React.createElement("div", null); }, {
    readme: { content: readme },
})
    .add('default', function () { return renderLoadingSpinner(); }, {
    readme: {
        content: getCodeDoc("\nimport React from 'react'\nimport LoadingSpinner from '@aitmed/react/components/LoadingSpinner'\n\nconst App = () => (\n   <LoadingSpinner>\n     Loading...\n   </LoadingSpinner>\n)\n      "),
    },
})
    .add('dim (white bg)', function () { return renderLoadingSpinner({ spinner: { dim: true } }); }, {
    readme: {
        content: getCodeDoc("\nimport React from 'react'\nimport LoadingSpinner from '@aitmed/react/components/LoadingSpinner'\n\nconst App = () => (\n   <LoadingSpinner dim>\n     Loading...\n   </LoadingSpinner>\n)\n      "),
    },
})
    .add('white (dark bg)', function () { return renderLoadingSpinner({ dark: true, spinner: { white: true } }); }, {
    readme: {
        content: getCodeDoc("\nimport React from 'react'\nimport LoadingSpinner from '@aitmed/react/components/LoadingSpinner'\n\nconst App = () => (\n  <div style={{ background: '#072E48' }}>\n    <LoadingSpinner white>\n      Loading...\n    </LoadingSpinner>\n  </div>\n)\n      "),
    },
})
    .add('renderContent', function () {
    return renderLoadingSpinner({
        spinner: {
            renderContent: function () { return (React.createElement(Typography, { variant: "h6", secondary: true, center: true }, "Default children replaced")); },
        },
    });
}, {
    readme: {
        content: getCodeDoc("\nimport React from 'react'\nimport LoadingSpinner from '@aitmed/react/components/LoadingSpinner'\n\nconst App = () => (\n  <LoadingSpinner\n    renderContent={() => (\n      <Typography variant=\"h6\" secondary center>\n        Please wait a second...\n      </Typography>\n    )}\n  />\n)\n      "),
    },
})
    .add('fullscreen (white bg)', function () { return React.createElement(LoadingSpinner, { fullscreen: true }, "Loading..."); }, {
    readme: {
        content: getCodeDoc("\nimport React from 'react'\nimport LoadingSpinner from '@aitmed/react/components/LoadingSpinner'\n\nconst App = () => (\n  <LoadingSpinner fullscreen>\n    Loading...\n  </LoadingSpinner>\n)\n      "),
    },
})
    .add('fullscreen (dark bg)', function () { return (React.createElement("div", { style: {
        position: 'relative',
        height: '100vh',
        background: darkBg,
    } },
    React.createElement(LoadingSpinner, { white: true, fullscreen: true }, "Loading..."))); }, {
    readme: {
        content: getCodeDoc("\nimport React from 'react'\nimport LoadingSpinner from '@aitmed/react/components/LoadingSpinner'\n\nconst App = () => (\n  <LoadingSpinner fullscreen white>\n    Loading...\n  </LoadingSpinner>\n)\n      "),
    },
});
//# sourceMappingURL=LoadingSpinner.stories.js.map