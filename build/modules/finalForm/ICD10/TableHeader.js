import React from 'react';
import { makeStyles } from '@material-ui/styles';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from './TableCell';
var useStyles = makeStyles(function (theme) {
    var _a;
    return ({
        tableRow: (_a = {
                height: 40
            },
            _a[theme.breakpoints.down('xs')] = {
                height: 30,
                fontSize: '0.8rem',
                '& th': {
                    fontSize: '0.65rem',
                },
            },
            _a),
        tableCell: {
            fontSize: '0.7rem',
        },
    });
});
var ICD10TableHeader = function () {
    var classes = useStyles();
    return (React.createElement(TableHead, null,
        React.createElement(TableRow, { className: classes.tableRow },
            React.createElement(TableCell, { className: classes.tableCell, variant: "head" }, "Code"),
            React.createElement(TableCell, { className: classes.tableCell, variant: "head" }, "Description"),
            React.createElement(TableCell, { className: classes.tableCell, variant: "head" }, "Comment"),
            React.createElement(TableCell, { variant: "head" }, null))));
};
export default React.memo(ICD10TableHeader);
//# sourceMappingURL=TableHeader.js.map