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
import { cleanup, render } from '@testing-library/react';
import DWC_1 from './DWC_1';
var renderComponent = function (props) {
    return render(React.createElement(DWC_1, __assign({}, props)));
};
afterEach(cleanup);
describe('DWC_1 Form', function () {
    var onSubmit = function (values) {
        console.log(values);
    };
    it('should render a Submit button', function () {
        var getByText = renderComponent({ onSubmit: onSubmit }).getByText;
        expect(getByText('Submit')).not.toBeNull();
    });
});
//# sourceMappingURL=DWC_1.test.js.map