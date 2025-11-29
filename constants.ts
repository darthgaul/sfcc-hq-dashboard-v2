import { User, Artifact, Event, CadetProfile } from './types';

export const USERS: User[] = [
  { id: 'u1', name: 'Gen. A. Smith', role: 'HQ', title: 'Chief of Operations' },
  { id: 'u2', name: 'Col. B. Miller', role: 'Regional', region: 'North-East' },
  { id: 'u3', name: 'Maj. C. Davis', role: 'Squadron', unit: 'SQ-101' },
  { id: 'u4', name: 'Cdt. E. Ender', role: 'Cadet', unit: 'SQ-101', grade: 'C/SSgt' },
  { id: 'u5', name: 'Mrs. Ender', role: 'Parent', cadetId: 'u4' },
];

export const ARTIFACTS: Artifact[] = [
  { id: 101, cadetName: 'Cdt. E. Ender', loe: 'STEM', title: 'Rocketry Lab Report', score: 3, status: 'Approved', safetyCheck: true, boardReady: true, date: '2023-10-01' },
  { id: 102, cadetName: 'Cdt. E. Ender', loe: 'Leadership', title: 'Squadron Drill Cmd', score: 1, status: 'Returned', safetyCheck: true, boardReady: false, date: '2023-10-05' },
  { id: 103, cadetName: 'Cdt. J. Doe', loe: 'Fitness', title: '1 Mile Run Log', score: 0, status: 'Submitted', safetyCheck: false, boardReady: false, date: '2023-10-10' },
  { id: 104, cadetName: 'Cdt. E. Ender', loe: 'Service', title: 'Community Cleanup', score: 4, status: 'Approved', safetyCheck: true, boardReady: true, date: '2023-09-15' },
  { id: 105, cadetName: 'Cdt. A. Smith', loe: 'STEM', title: 'Cyber Security Basics', score: 2, status: 'Submitted', safetyCheck: true, boardReady: false, date: '2023-10-12' },
];

export const EVENTS: Event[] = [
  { id: 1, title: 'Regional FTX (MTE)', date: '2023-11-10', type: 'MTE', recovery: true },
  { id: 2, title: 'Squadron Meeting', date: '2023-11-15', type: 'Regular', recovery: false },
  { id: 3, title: 'Annual Inspection', date: '2023-12-01', type: 'MTE', recovery: true },
];

export const CADET_PROFILE: CadetProfile = {
  joinDate: 'Aug 15, 2022',
  promotions: [
    { rank: 'C/SSgt', name: 'Staff Sergeant', date: 'Oct 01, 2023', active: true },
    { rank: 'C/SrA', name: 'Senior Airman', date: 'Feb 15, 2023' },
    { rank: 'C/Amn', name: 'Airman', date: 'Sep 01, 2022' }
  ],
  awards: [
    { name: 'Honor Flight Ribbon', earned: true, date: '2023-06-10', color: 'bg-yellow-600', type: 'Service' },
    { name: 'Physical Excellence', earned: true, date: '2022-12-10', color: 'bg-green-600', type: 'Fitness' },
    { name: 'Leadership Basics', earned: true, date: '2022-09-30', color: 'bg-blue-600', type: 'Leadership' },
    { name: 'Cyber CyberBadge', earned: false, progress: 80, color: 'bg-indigo-600', type: 'STEM' },
    { name: 'Community Service', earned: false, progress: 45, color: 'bg-red-600', type: 'Service' }
  ]
};