import {
  IC_INSTITUTE_1,
  IC_INSTITUTE_2,
  IC_INSTITUTE_3,
  IC_TEACHER_1,
  IC_TEACHER_2,
  IC_TEACHER_3,
} from './ImageSource';

export const provinceArr: string[] = [
  'Central',
  'Rastrn',
  'North Central',
  'Northern',
  'North Western',
  'Sabaragamuwa',
  'Southern',
  'Uva',
  'Western',
];

export const listData: any[] = [
  {
    id: 1,
    title: 'Grade 1 - 5',
    options: [
      {name: 'Arts', imageText: '🎨'},
      {name: 'Science', imageText: '🔬'},
      {name: 'Maths', imageText: '📐'},
      {name: 'Commerce', imageText: '🔢'},
    ],
    selected: 0,
  },
  // Second Item
  {
    id: 2,
    title: 'Grade 6 - 9',
    options: [
      {name: 'Arts', imageText: '🎨'},
      {name: 'Science', imageText: '🔬'},
      {name: 'Maths', imageText: '📐'},
      {name: 'Commerce', imageText: '🔢'},
    ],
    selected: 0,
  },
  // third Item
  {
    id: 3,
    title: 'Grade 11 - 12',
    options: [
      {name: 'Arts', imageText: '🎨'},
      {name: 'Science', imageText: '🔬'},
      {name: 'Maths', imageText: '📐'},
      {name: 'Commerce', imageText: '🔢'},
    ],
    selected: 0,
  },
  // fourth One
  {
    id: 4,
    title: 'Grade 12 - 13',
    options: [
      {name: 'Arts', imageText: '🎨'},
      {name: 'Science', imageText: '🔬'},
      {name: 'Maths', imageText: '📐'},
      {name: 'Commerce', imageText: '🔢'},
    ],
    selected: 0,
  },
];

export const samp: number[] = [1, 2, 3, 4, 5];
export const instituteList = [
  {
    id: 1,
    name: 'Victory College',
    title: 'Bio Science',
    desc: 'Studying how CBD awareness and availability as it related to pain management alternatives.',
    ratingText: '5 (413)',
    rating: 5,
    bgColor: '',
    image: IC_INSTITUTE_1,
  },
  {
    id: 2,
    name: 'New Montana',
    title: 'Bio Science',
    desc: 'Montana Higher Educational Institute. Gampaha montana.gampaha@gmail.com',
    ratingText: '3 (213)',
    rating: 3,
    image: IC_INSTITUTE_2,
    bgColor: '#FF9F92',
  },
  {
    id: 3,
    name: 'Susipwan Institute',
    title: 'Bio Science',
    desc: 'This is a private higher education center which conducting classes for GCE AL Students.',
    ratingText: '2 (113)',
    rating: 2,
    bgColor: '#BFDDEC',
    image: IC_INSTITUTE_3,
  },
];

export const areaArr: string[] = ['Island', 'Province', 'Districts'];
export const subjectsArr: string[] = [
  'All Subjects',
  'Biology',
  'Chemistry',
  'Physics',
  'Science for Technology',
];

export const teach = 'Popular Teachers',
  institutions = 'Popular Institutions';

export const teacherLists = [
  {
    id: 1,
    name: 'Cassie Valdez',
    subject: 'Biology',
    pic: IC_TEACHER_1,
    bgColor: '#CF687D',
  },
  {
    id: 2,
    name: 'Paul Simons',
    subject: 'Chemistry',
    pic: IC_TEACHER_2,
    bgColor: '#413535C4',
  },
  {
    id: 3,
    name: 'Graham Osbor',
    subject: 'Physics',
    pic: IC_TEACHER_3,
    bgColor: '##E7E7E7',
  },
];
