import React from 'react';
import Typography from 'components/Typography';
var ICD10OutsideLink = function () { return (React.createElement(Typography, { variant: "caption" },
    "To see a more descriptive list, click",
    ' ',
    React.createElement("a", { href: "https://icd.codes/icd10cm", target: "_blank", rel: "noopener noreferrer" }, "here"),
    ".")); };
export default React.memo(ICD10OutsideLink, function () { return true; });
//# sourceMappingURL=ICD10OutsideLink.js.map