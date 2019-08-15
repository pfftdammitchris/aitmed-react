export const states = [
  'AL',
  'AK',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'FL',
  'GA',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'OH',
  'OK',
  'OR',
  'PA',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY',
]

export const statesArrayObjects = [
  {
    name: 'Alabama',
    abbreviation: 'AL',
  },
  {
    name: 'Alaska',
    abbreviation: 'AK',
  },
  {
    name: 'American Samoa',
    abbreviation: 'AS',
  },
  {
    name: 'Arizona',
    abbreviation: 'AZ',
  },
  {
    name: 'Arkansas',
    abbreviation: 'AR',
  },
  {
    name: 'California',
    abbreviation: 'CA',
  },
  {
    name: 'Colorado',
    abbreviation: 'CO',
  },
  {
    name: 'Connecticut',
    abbreviation: 'CT',
  },
  {
    name: 'Delaware',
    abbreviation: 'DE',
  },
  {
    name: 'District Of Columbia',
    abbreviation: 'DC',
  },
  {
    name: 'Federated States Of Micronesia',
    abbreviation: 'FM',
  },
  {
    name: 'Florida',
    abbreviation: 'FL',
  },
  {
    name: 'Georgia',
    abbreviation: 'GA',
  },
  {
    name: 'Guam',
    abbreviation: 'GU',
  },
  {
    name: 'Hawaii',
    abbreviation: 'HI',
  },
  {
    name: 'Idaho',
    abbreviation: 'ID',
  },
  {
    name: 'Illinois',
    abbreviation: 'IL',
  },
  {
    name: 'Indiana',
    abbreviation: 'IN',
  },
  {
    name: 'Iowa',
    abbreviation: 'IA',
  },
  {
    name: 'Kansas',
    abbreviation: 'KS',
  },
  {
    name: 'Kentucky',
    abbreviation: 'KY',
  },
  {
    name: 'Louisiana',
    abbreviation: 'LA',
  },
  {
    name: 'Maine',
    abbreviation: 'ME',
  },
  {
    name: 'Marshall Islands',
    abbreviation: 'MH',
  },
  {
    name: 'Maryland',
    abbreviation: 'MD',
  },
  {
    name: 'Massachusetts',
    abbreviation: 'MA',
  },
  {
    name: 'Michigan',
    abbreviation: 'MI',
  },
  {
    name: 'Minnesota',
    abbreviation: 'MN',
  },
  {
    name: 'Mississippi',
    abbreviation: 'MS',
  },
  {
    name: 'Missouri',
    abbreviation: 'MO',
  },
  {
    name: 'Montana',
    abbreviation: 'MT',
  },
  {
    name: 'Nebraska',
    abbreviation: 'NE',
  },
  {
    name: 'Nevada',
    abbreviation: 'NV',
  },
  {
    name: 'New Hampshire',
    abbreviation: 'NH',
  },
  {
    name: 'New Jersey',
    abbreviation: 'NJ',
  },
  {
    name: 'New Mexico',
    abbreviation: 'NM',
  },
  {
    name: 'New York',
    abbreviation: 'NY',
  },
  {
    name: 'North Carolina',
    abbreviation: 'NC',
  },
  {
    name: 'North Dakota',
    abbreviation: 'ND',
  },
  {
    name: 'Northern Mariana Islands',
    abbreviation: 'MP',
  },
  {
    name: 'Ohio',
    abbreviation: 'OH',
  },
  {
    name: 'Oklahoma',
    abbreviation: 'OK',
  },
  {
    name: 'Oregon',
    abbreviation: 'OR',
  },
  {
    name: 'Palau',
    abbreviation: 'PW',
  },
  {
    name: 'Pennsylvania',
    abbreviation: 'PA',
  },
  {
    name: 'Puerto Rico',
    abbreviation: 'PR',
  },
  {
    name: 'Rhode Island',
    abbreviation: 'RI',
  },
  {
    name: 'South Carolina',
    abbreviation: 'SC',
  },
  {
    name: 'South Dakota',
    abbreviation: 'SD',
  },
  {
    name: 'Tennessee',
    abbreviation: 'TN',
  },
  {
    name: 'Texas',
    abbreviation: 'TX',
  },
  {
    name: 'Utah',
    abbreviation: 'UT',
  },
  {
    name: 'Vermont',
    abbreviation: 'VT',
  },
  {
    name: 'Virgin Islands',
    abbreviation: 'VI',
  },
  {
    name: 'Virginia',
    abbreviation: 'VA',
  },
  {
    name: 'Washington',
    abbreviation: 'WA',
  },
  {
    name: 'West Virginia',
    abbreviation: 'WV',
  },
  {
    name: 'Wisconsin',
    abbreviation: 'WI',
  },
  {
    name: 'Wyoming',
    abbreviation: 'WY',
  },
]

export const statesArrayObjectsMapper = statesArrayObjects.reduce(
  (acc, stateObj) => {
    if (acc[stateObj.name] === undefined) {
      acc[stateObj.name] = stateObj
    }
    return acc
  },
  {},
)

export const statesArrayObjectsMapperv2 = statesArrayObjects.reduce(
  (acc, stateObj) => {
    if (acc[stateObj.abbreviation] === undefined) {
      acc[stateObj.abbreviation] = stateObj
    }
    return acc
  },
  {},
)

export const specialties = [
  {
    code: 'FAMILY_MEDICINE',
    category: 'DOCTORS',
    type: 'COMMON',
    translations: {
      'en-US': 'Family Medicine',
    },
  },
  {
    code: 'INTERNAL_MEDICINE',
    category: 'DOCTORS',
    type: 'COMMON',
    translations: {
      'en-US': 'Internal Medicine',
    },
  },
  {
    code: 'OBGYN',
    category: 'DOCTORS',
    type: 'COMMON',
    translations: {
      'en-US': 'OBGYN',
    },
  },
  {
    code: 'PEDIATRICIAN',
    category: 'DOCTORS',
    type: 'COMMON',
    translations: {
      'en-US': 'Pediatrician',
    },
  },
  {
    code: 'PSYCHOLOGIST',
    category: 'MENTAL_HEALTH',
    type: 'SPECIAL',
    translations: {
      'en-US': 'Psychologist',
    },
  },
  {
    code: 'PSYCHIATRIST',
    category: 'MENTAL_HEALTH',
    type: 'PROFESSION',
    translations: {
      'en-US': 'Psychiatrist',
    },
  },
  {
    code: 'ALLERGY_IMMUNOLOGY',
    category: 'SPECIALIST',
    type: 'COMMON',
    translations: {
      'en-US': 'Allergy/Immunology',
    },
  },
  {
    code: 'CHIROPRACTIC',
    category: 'SPECIALIST',
    type: 'COMMON',
    translations: {
      'en-US': 'Chiropractic',
    },
  },
  {
    code: 'DERMATOLOGY',
    category: 'SPECIALIST',
    type: 'PROFESSION',
    translations: {
      'en-US': 'Dermatology',
    },
  },
  {
    code: 'INFECTIOUS_DISEASE',
    category: 'SPECIALIST',
    type: 'COMMON',
    translations: {
      'en-US': 'Infectious Disease',
    },
  },
  {
    code: 'ORTHOPEDIC_SPECIALIST',
    category: 'SPECIALIST',
    type: 'COMMON',
    translations: {
      'en-US': 'Orthopedic Specialist',
    },
  },
  {
    code: 'PAIN_MANAGEMENT',
    category: 'SPECIALIST',
    type: 'COMMON',
    translations: {
      'en-US': 'Pain Management & Rehab',
    },
  },
  {
    code: 'SPORTS_MEDICINE',
    category: 'SPECIALIST',
    type: 'COMMON',
    translations: {
      'en-US': 'Sports Medicine',
    },
  },
  {
    code: 'HAND_SURGERY',
    category: 'HAND_SURGERY',
    type: 'HAND_SURGEON',
    translations: {
      'en-US': 'Hand Surgery',
    },
  },
  {
    code: 'NURSE',
    category: 'ALTERNATIVE',
    type: 'ASSISTANT',
    translations: {
      'en-US': 'Nurse Practitioner',
    },
  },
  {
    code: 'PHYSICIAN_ASSISTANT',
    category: 'ALTERNATIVE',
    type: 'ASSISTANT',
    translations: {
      'en-US': 'Physician Assistant',
    },
  },
  {
    code: 'EMERGENCY_MEDICINE',
    category: 'DOCTORS',
    type: 'COMMON',
    translations: {
      'en-US': 'Emergency Medicine',
    },
  },
  {
    code: 'ENDOCRINOLOGY',
    category: 'SPECIALIST',
    type: 'COMMON',
    translations: {
      'en-US': 'Endocrinology',
    },
  },
  {
    code: 'GASTROENTEROLOGY',
    category: 'SPECIALIST',
    type: 'COMMON',
    translations: {
      'en-US': 'Gastroenterology',
    },
  },
  {
    code: 'NEUROLOGY',
    category: 'SPECIALIST',
    type: 'COMMON',
    translations: {
      'en-US': 'Neurology',
    },
  },
  {
    code: 'CARDIOLOGY',
    category: 'SPECIALIST',
    type: 'COMMON',
    translations: {
      'en-US': 'Cardiology',
    },
  },
  {
    code: 'PULMONOLOGY',
    category: 'SPECIALIST',
    type: 'COMMON',
    translations: {
      'en-US': 'Pulmonology',
    },
  },
  {
    code: 'EAR_NOSE_THROAT',
    category: 'SPECIALIST',
    type: 'COMMON',
    translations: {
      'en-US': 'Ear / Nose / Throat',
    },
  },
  {
    code: 'RENAL_NEPHROLOGY',
    category: 'SPECIALIST',
    type: 'COMMON',
    translations: {
      'en-US': 'Renal / Nephrology',
    },
  },
  {
    code: 'UROLOGY',
    category: 'SPECIALIST',
    type: 'COMMON',
    translations: {
      'en-US': 'Urology',
    },
  },
  {
    code: 'PODIATRIST',
    category: 'SPECIALIST',
    type: 'COMMON',
    translations: {
      'en-US': 'Podiatrist',
    },
  },
  {
    code: 'VASCULAR',
    category: 'SPECIALIST',
    type: 'COMMON',
    translations: {
      'en-US': 'Vascular',
    },
  },
]

// Array of specialty codes
// NOTE: the SDK provides this as the "ids" property using api.fetchSpecialties()
export const specialtiesList = specialties.map(({ code }) => code)

// Object of specialty codes as keys
// NOTE: the SDK provides this as the "specialties" property using api.fetchSpecialties()
export const specialtiesMapper = specialties.reduce((acc, spec) => {
  if (!acc[spec.code]) {
    acc[spec.code] = spec
  }
  return acc
}, {})

// Object of specialty types as keys, then inside are objects of specialties by codes as keys
export const specialtiesByType = specialties.reduce((acc, spec) => {
  if (!acc[spec.type]) {
    acc[spec.type] = {}
  }
  acc[spec.type][spec.code] = specialtiesMapper[spec.code]
  return acc
}, {})

// mimicing server response
export const languages = [
  { code: 'en-US', english: 'English', translated: 'English' },
  { code: 'zh-CN', english: 'Chinese(Simplified)', translated: '中文简体' },
  { code: 'zh-TW', english: 'Chinese(Traditional)', translated: '中文繁体' },
  { code: 'es-ES', english: 'Spanish', translated: 'Español' },
]

export const languagesList = languages.map(({ code }) => code)

export const languagesMapper = languages.reduce((acc, lang) => {
  if (!acc[lang.code]) {
    acc[lang.code] = lang
  }
  return acc
}, {})

// mimicing server response
export const categories = [
  {
    code: 'MEDICAL',
    translations: {
      'en-US': 'Medical',
    },
    sub_categories: [],
    specialties: [
      {
        code: 'FAMILY_MEDICINE',
        category: 'MEDICAL',
        type: 'COMMON',
        translations: {
          'en-US': 'Family Medicine',
        },
      },
      {
        code: 'INTERNAL_MEDICINE',
        category: 'MEDICAL',
        type: 'COMMON',
        translations: {
          'en-US': 'Internal Medicine',
        },
      },
      {
        code: 'EMERGENCY_MEDICINE',
        category: 'MEDICAL',
        type: 'COMMON',
        translations: {
          'en-US': 'Emergency Medicine',
        },
      },
    ],
  },
  {
    code: 'CHILDREN_MEDICAL',
    translations: {
      'en-US': "Children's Medical",
    },
    sub_categories: [],
    specialties: [
      {
        code: 'PEDIATRICIAN',
        category: 'CHILDREN_MEDICAL',
        type: 'COMMON',
        translations: {
          'en-US': 'Pediatrician',
        },
      },
    ],
  },
  {
    code: 'WOMEN_MEDICAL',
    translations: {
      'en-US': "Women's Medical",
    },
    sub_categories: [],
    specialties: [
      {
        code: 'OBGYN',
        category: 'WOMEN_MEDICAL',
        type: 'COMMON',
        translations: {
          'en-US': 'OBGYN',
        },
      },
    ],
  },
  {
    code: 'HAND_SURGEON',
    translations: {
      'en-US': 'Hand Surgeon',
    },
    sub_categories: [],
    specialties: [
      {
        code: 'HAND_SURGERY',
        category: 'HAND_SURGEON',
        type: 'HAND_SURGEON',
        translations: {
          'en-US': 'Hand Orthopedic Specialist',
        },
      },
    ],
  },
  {
    code: 'SPECIALIST',
    translations: {
      'en-US': 'Other Specialties',
    },
    sub_categories: [],
    specialties: [
      {
        code: 'PLUMONOLOGY',
        category: 'SPECIALIST',
        type: 'PROFESSION',
        translations: {
          'en-US': 'Pulmonology',
        },
      },
      {
        code: 'CARDIOLOGY',
        category: 'SPECIALIST',
        type: 'PROFESSION',
        translations: {
          'en-US': 'Cardiology',
        },
      },
      {
        code: 'PULMONOLOGY',
        category: 'SPECIALIST',
        type: 'PROFESSION',
        translations: {
          'en-US': 'Pulmonology',
        },
      },
      {
        code: 'EAR_NOSE_THROAT',
        category: 'SPECIALIST',
        type: 'PROFESSION',
        translations: {
          'en-US': 'Ear Nose Throat',
        },
      },
      {
        code: 'RENAL_NEPHROLOGY',
        category: 'SPECIALIST',
        type: 'PROFESSION',
        translations: {
          'en-US': ' Renal Nephrology',
        },
      },
      {
        code: 'UROLOGY',
        category: 'SPECIALIST',
        type: 'PROFESSION',
        translations: {
          'en-US': 'Urology',
        },
      },
      {
        code: 'PODIATRIST',
        category: 'SPECIALIST',
        type: 'PROFESSION',
        translations: {
          'en-US': 'Podiatrist',
        },
      },
      {
        code: 'VASCULAR',
        category: 'SPECIALIST',
        type: 'PROFESSION',
        translations: {
          'en-US': 'Vascular',
        },
      },
      {
        code: 'DERMATOLOGY',
        category: 'SPECIALIST',
        type: 'PROFESSION',
        translations: {
          'en-US': 'Dermatology',
        },
      },
      {
        code: 'PSYCHOLOGIST',
        category: 'SPECIALIST',
        type: 'SPECIAL',
        translations: {
          'en-US': 'Psychologist',
        },
      },
      {
        code: 'NATURAL_HOLISTIC',
        category: 'SPECIALIST',
        type: 'SPECIAL',
        translations: {
          'en-US': 'Natural Holistic Doctor',
        },
      },
      {
        code: 'NATURAL_HERBAL',
        category: 'SPECIALIST',
        type: 'SPECIAL',
        translations: {
          'en-US': 'Natural Herbal Doctor',
        },
      },
      {
        code: 'HOMEOPATHIC',
        category: 'SPECIALIST',
        type: 'SPECIAL',
        translations: {
          'en-US': 'Homeopathic Doctor(HMD)',
        },
      },
      {
        code: 'ALLERGY_IMMUNOLOGY',
        category: 'SPECIALIST',
        type: 'COMMON',
        translations: {
          'en-US': 'Allergy/Immunology',
        },
      },
      {
        code: 'CHIROPRACTIC',
        category: 'SPECIALIST',
        type: 'COMMON',
        translations: {
          'en-US': 'Chiropractic',
        },
      },
      {
        code: 'INFECTIOUS_DISEASE',
        category: 'SPECIALIST',
        type: 'COMMON',
        translations: {
          'en-US': 'Infectious Disease',
        },
      },
      {
        code: 'ORTHOPEDIC_SPECIALIST',
        category: 'SPECIALIST',
        type: 'COMMON',
        translations: {
          'en-US': 'Orthopedic Specialist',
        },
      },
      {
        code: 'PAIN_MANAGEMENT',
        category: 'SPECIALIST',
        type: 'COMMON',
        translations: {
          'en-US': 'Pain Management & Rehab',
        },
      },
      {
        code: 'SPORTS_MEDICINE',
        category: 'SPECIALIST',
        type: 'COMMON',
        translations: {
          'en-US': 'Sports Medicine',
        },
      },
      {
        code: 'ACUPUNCTURE',
        category: 'SPECIALIST',
        type: 'COMMON',
        translations: {
          'en-US': 'Acupuncture',
        },
      },
      {
        code: 'PSYCHIATRIST',
        category: 'SPECIALIST',
        type: 'PROFESSION',
        translations: {
          'en-US': 'Psychiatrist',
        },
      },
      {
        code: 'ENDOCRINOLOGY',
        category: 'SPECIALIST',
        type: 'PROFESSION',
        translations: {
          'en-US': 'Endocrinology',
        },
      },
      {
        code: 'GASTROENTEROLOGY',
        category: 'SPECIALIST',
        type: 'PROFESSION',
        translations: {
          'en-US': 'Gastroenterology',
        },
      },
      {
        code: 'NEUROLOGY',
        category: 'SPECIALIST',
        type: 'PROFESSION',
        translations: {
          'en-US': 'Neurology',
        },
      },
      {
        code: 'NURSE',
        category: 'SPECIALIST',
        type: 'ASSISTANT',
        translations: {
          'en-US': 'Nurse Practitioner',
        },
      },
      {
        code: 'PHYSICIAN_ASSISTANT',
        category: 'SPECIALIST',
        type: 'ASSISTANT',
        translations: {
          'en-US': 'Physician Assistant',
        },
      },
    ],
  },
]

export const categoriesList = categories.map(({ code }) => code)

export const categoriesMapper = categories.reduce((acc, category) => {
  if (!acc[category.code]) {
    acc[category.code] = category
  }
  return acc
}, {})

export const genders = [
  {
    code: 'MALE',
    translations: {
      'en-US': 'Male',
      'zh-CN': '男',
    },
  },
  {
    code: 'FEMALE',
    translations: {
      'en-US': 'Female',
      'zh-CN': '女',
    },
  },
  {
    code: 'PNS',
    translations: {
      'en-US': 'Prefer Not to Say',
      'zh-CN': '保密',
    },
  },
]

export const appointmentCodes = {
  notYetJoined: 1,
  inSession: 2,
  completed: 3,
}

export const months = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
]

export const years = [
  '2019',
  '2020',
  '2021',
  '2022',
  '2023',
  '2024',
  '2025',
  '2026',
  '2027',
  '2028',
  '2029',
  '2030',
  '2031',
  '2032',
  '2033',
  '2034',
  '2035',
  '2036',
  '2037',
  '2038',
  '2039',
]
