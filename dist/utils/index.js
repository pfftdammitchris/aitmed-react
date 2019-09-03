'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var formatString = _interopDefault(require('format-string-by-pattern'));

/* -------------------------------------------------------
  ---- FORMATTERS (pass into "format" prop to <Field />)
  ----    update: These can also be passed as "parse" prop to <Field />
-------------------------------------------------------- */
// Strips away non-letters

function formatOnlyLetters(val) {
  if (!val) return val;
  var regex = /^[a-zA-Z]/g;
  return String(val).replace(regex, '');
} // Strips away non-numbers

function formatOnlyNumbers(val) {
  if (!val) return val;
  var regex = /[^\d]/g;
  return String(val).replace(regex, '');
}
/* -------------------------------------------------------
  ---- PARSERS (pass into "parse" prop to <Field />)
-------------------------------------------------------- */
// Strips away non-numbers and returns the val in format --> +1 (626) 452-0559

function parsePhone(val) {
  var format = '+9 (999) 999-9999';
  return formatString(format, formatOnlyNumbers(val));
} // Turns a string into a social security number format

function parseSSN(val) {
  var format = '999-99-9999';
  return formatString(format, formatOnlyNumbers(val));
}
/* -------------------------------------------------------
  ---- VALIDATORS (pass into "validate" prop to <Field />)
-------------------------------------------------------- */

var validate = {
  NPI: function NPI(str) {
    if (!str) return undefined;

    if (str.length > 32) {
      return 'NPI cannot exceed 32 characters';
    }

    return undefined;
  }
};

var finalForm = /*#__PURE__*/Object.freeze({
  formatOnlyLetters: formatOnlyLetters,
  formatOnlyNumbers: formatOnlyNumbers,
  parsePhone: parsePhone,
  parseSSN: parseSSN,
  validate: validate
});

var states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
var statesArrayObjects = [{
  name: 'Alabama',
  abbreviation: 'AL'
}, {
  name: 'Alaska',
  abbreviation: 'AK'
}, {
  name: 'American Samoa',
  abbreviation: 'AS'
}, {
  name: 'Arizona',
  abbreviation: 'AZ'
}, {
  name: 'Arkansas',
  abbreviation: 'AR'
}, {
  name: 'California',
  abbreviation: 'CA'
}, {
  name: 'Colorado',
  abbreviation: 'CO'
}, {
  name: 'Connecticut',
  abbreviation: 'CT'
}, {
  name: 'Delaware',
  abbreviation: 'DE'
}, {
  name: 'District Of Columbia',
  abbreviation: 'DC'
}, {
  name: 'Federated States Of Micronesia',
  abbreviation: 'FM'
}, {
  name: 'Florida',
  abbreviation: 'FL'
}, {
  name: 'Georgia',
  abbreviation: 'GA'
}, {
  name: 'Guam',
  abbreviation: 'GU'
}, {
  name: 'Hawaii',
  abbreviation: 'HI'
}, {
  name: 'Idaho',
  abbreviation: 'ID'
}, {
  name: 'Illinois',
  abbreviation: 'IL'
}, {
  name: 'Indiana',
  abbreviation: 'IN'
}, {
  name: 'Iowa',
  abbreviation: 'IA'
}, {
  name: 'Kansas',
  abbreviation: 'KS'
}, {
  name: 'Kentucky',
  abbreviation: 'KY'
}, {
  name: 'Louisiana',
  abbreviation: 'LA'
}, {
  name: 'Maine',
  abbreviation: 'ME'
}, {
  name: 'Marshall Islands',
  abbreviation: 'MH'
}, {
  name: 'Maryland',
  abbreviation: 'MD'
}, {
  name: 'Massachusetts',
  abbreviation: 'MA'
}, {
  name: 'Michigan',
  abbreviation: 'MI'
}, {
  name: 'Minnesota',
  abbreviation: 'MN'
}, {
  name: 'Mississippi',
  abbreviation: 'MS'
}, {
  name: 'Missouri',
  abbreviation: 'MO'
}, {
  name: 'Montana',
  abbreviation: 'MT'
}, {
  name: 'Nebraska',
  abbreviation: 'NE'
}, {
  name: 'Nevada',
  abbreviation: 'NV'
}, {
  name: 'New Hampshire',
  abbreviation: 'NH'
}, {
  name: 'New Jersey',
  abbreviation: 'NJ'
}, {
  name: 'New Mexico',
  abbreviation: 'NM'
}, {
  name: 'New York',
  abbreviation: 'NY'
}, {
  name: 'North Carolina',
  abbreviation: 'NC'
}, {
  name: 'North Dakota',
  abbreviation: 'ND'
}, {
  name: 'Northern Mariana Islands',
  abbreviation: 'MP'
}, {
  name: 'Ohio',
  abbreviation: 'OH'
}, {
  name: 'Oklahoma',
  abbreviation: 'OK'
}, {
  name: 'Oregon',
  abbreviation: 'OR'
}, {
  name: 'Palau',
  abbreviation: 'PW'
}, {
  name: 'Pennsylvania',
  abbreviation: 'PA'
}, {
  name: 'Puerto Rico',
  abbreviation: 'PR'
}, {
  name: 'Rhode Island',
  abbreviation: 'RI'
}, {
  name: 'South Carolina',
  abbreviation: 'SC'
}, {
  name: 'South Dakota',
  abbreviation: 'SD'
}, {
  name: 'Tennessee',
  abbreviation: 'TN'
}, {
  name: 'Texas',
  abbreviation: 'TX'
}, {
  name: 'Utah',
  abbreviation: 'UT'
}, {
  name: 'Vermont',
  abbreviation: 'VT'
}, {
  name: 'Virgin Islands',
  abbreviation: 'VI'
}, {
  name: 'Virginia',
  abbreviation: 'VA'
}, {
  name: 'Washington',
  abbreviation: 'WA'
}, {
  name: 'West Virginia',
  abbreviation: 'WV'
}, {
  name: 'Wisconsin',
  abbreviation: 'WI'
}, {
  name: 'Wyoming',
  abbreviation: 'WY'
}];
var statesArrayObjectsMapper = statesArrayObjects.reduce(function (acc, stateObj) {
  if (acc[stateObj.name] === undefined) {
    acc[stateObj.name] = stateObj;
  }

  return acc;
}, {});
var statesArrayObjectsMapperv2 = statesArrayObjects.reduce(function (acc, stateObj) {
  if (acc[stateObj.abbreviation] === undefined) {
    acc[stateObj.abbreviation] = stateObj;
  }

  return acc;
}, {}); // mimicing server response

var languages = [{
  code: 'en-US',
  english: 'English',
  translated: 'English'
}, {
  code: 'zh-CN',
  english: 'Chinese(Simplified)',
  translated: '中文简体'
}, {
  code: 'zh-TW',
  english: 'Chinese(Traditional)',
  translated: '中文繁体'
}, {
  code: 'es-ES',
  english: 'Spanish',
  translated: 'Español'
}];
var languagesList = languages.map(function (_ref) {
  var code = _ref.code;
  return code;
});
var languagesMapper = languages.reduce(function (acc, lang) {
  if (!acc[lang.code]) {
    acc[lang.code] = lang;
  }

  return acc;
}, {});
var genders = [{
  code: 'MALE',
  translations: {
    'en-US': 'Male',
    'zh-CN': '男'
  }
}, {
  code: 'FEMALE',
  translations: {
    'en-US': 'Female',
    'zh-CN': '女'
  }
}, {
  code: 'PNS',
  translations: {
    'en-US': 'Prefer Not to Say',
    'zh-CN': '保密'
  }
}];
var appointmentCodes = {
  notYetJoined: 1,
  inSession: 2,
  completed: 3
};
var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
var years = ['2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035', '2036', '2037', '2038', '2039'];

var info = /*#__PURE__*/Object.freeze({
  states: states,
  statesArrayObjects: statesArrayObjects,
  statesArrayObjectsMapper: statesArrayObjectsMapper,
  statesArrayObjectsMapperv2: statesArrayObjectsMapperv2,
  languages: languages,
  languagesList: languagesList,
  languagesMapper: languagesMapper,
  genders: genders,
  appointmentCodes: appointmentCodes,
  months: months,
  years: years
});

exports.finalForm = finalForm;
exports.info = info;
//# sourceMappingURL=index.js.map
