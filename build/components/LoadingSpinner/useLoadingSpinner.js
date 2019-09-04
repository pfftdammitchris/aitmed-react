import { useState, useEffect, useCallback } from 'react';
import random from 'lodash/random';
var useLoadingSpinner = function (_a) {
    var theme = _a.theme;
    var _b = useState(theme.palette.secondary.main), dynamicColor = _b[0], setNewDynamicColor = _b[1];
    var getRandomColor = useCallback(function () {
        var colors = [
            theme.palette.primary.lightest,
            theme.palette.primary.lighter,
            theme.palette.primary.main,
            theme.palette.secondary.lightest2,
            theme.palette.secondary.lightest,
            theme.palette.secondary.main,
            theme.palette.thirdary.lighter,
            theme.palette.thirdary.light,
        ];
        return colors[random(0, colors.length - 1)];
    }, [
        theme.palette.primary.lighter,
        theme.palette.primary.lightest,
        theme.palette.primary.main,
        theme.palette.secondary.lightest,
        theme.palette.secondary.lightest2,
        theme.palette.secondary.main,
        theme.palette.thirdary.light,
        theme.palette.thirdary.lighter,
    ]);
    useEffect(function () {
        var start = setInterval(function () { return setNewDynamicColor(getRandomColor()); }, 1400);
        return function () { return clearInterval(start); };
    }, [getRandomColor]);
    return dynamicColor;
};
export default useLoadingSpinner;
//# sourceMappingURL=useLoadingSpinner.js.map