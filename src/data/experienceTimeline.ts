export type TimelineCategory = 'education' | 'research' | 'teaching' | 'community' | 'work';

export type TimelineItem = {
  startDate: string;
  startLabel: string;
  dateRange: string;
  category: TimelineCategory;
  title: string;
  organization: string;
  detail: string;
};

export const experienceTimeline: TimelineItem[] = [
  {
    startDate: '2025-09',
    startLabel: 'Sep 2025',
    dateRange: 'Sep 2025 — Present',
    category: 'teaching',
    title: 'ISA Group Leader',
    organization: 'English teaching in Japan',
    detail: 'Teaching middle and high school students in Japan.',
  },
  {
    startDate: '2025-09',
    startLabel: 'Sep 2025',
    dateRange: 'Sep 2025 — Present',
    category: 'education',
    title: 'Graduate studies',
    organization: 'Kyoto University of Advanced Science',
    detail: 'Graduate studies at Kyoto University of Advanced Science from September 2025.',
  },
  {
    startDate: '2024-04',
    startLabel: 'Apr 2024',
    dateRange: 'Apr 2024 — Present',
    category: 'teaching',
    title: 'Teaching Assistant',
    organization: 'Kyoto University of Advanced Science',
    detail: 'Part-time Teaching Assistant since April 2024.',
  },
  {
    startDate: '2024-04',
    startLabel: 'Apr 2024',
    dateRange: 'Apr 2024 — Present',
    category: 'research',
    title: 'Joined the UbiComp Lab',
    organization: 'Kyoto University of Advanced Science',
    detail: 'Research in the Ubiquitous and Personal Computing Laboratory since April 2024; first as an undergraduate researcher, then as a graduate student.',
  },
  {
    startDate: '2023-09',
    startLabel: 'Sep 2023',
    dateRange: 'Sep 2023 — Present',
    category: 'community',
    title: 'Dormitory RA roles',
    organization: 'Kyoto University of Advanced Science',
    detail: 'Dormitory Tutor: September 2023–August 2024. Dormitory Community Leader: September 2024–present.',
  },
  {
    startDate: '2023-05',
    startLabel: 'May 2023',
    dateRange: 'May 2023 — Jul 2024',
    category: 'work',
    title: 'Internship',
    organization: 'Tamai Investment Educations',
    detail: 'SATORI Tester: May–November 2023. Kiwami Japanese Tester: September 2023–July 2024.',
  },
  {
    startDate: '2023-01',
    startLabel: 'Jan 2023',
    dateRange: 'Jan 2023 — Aug 2026',
    category: 'work',
    title: 'Part-time job',
    organization: 'Kyoto Medical Club',
    detail: 'Gym part-time work at Kyoto Medical Club, January 2023 to August 2026.',
  },
  {
    startDate: '2022-09',
    startLabel: 'Sep 2022',
    dateRange: 'Sep 2022 — Aug 2025',
    category: 'teaching',
    title: 'S4S Mentor',
    organization: 'Kyoto University of Advanced Science',
    detail: 'Supported fellow students as an S4S Mentor from September 2022 to August 2025.',
  },
  {
    startDate: '2022-06',
    startLabel: 'Jun 2022',
    dateRange: 'Jun 2022 — 2025',
    category: 'research',
    title: 'Research Staff Member',
    organization: 'WoW Space Corporation',
    detail: 'Research Staff Member from 2022 to 2025',
  },
  {
    startDate: '2021-09',
    startLabel: 'Sep 2021',
    dateRange: 'Sep 2021 — Sep 2025',
    category: 'education',
    title: 'Undergraduate studies',
    organization: 'Kyoto University of Advanced Science',
    detail: 'Undergraduate studies at Kyoto University of Advanced Science from September 2021 to September 2025.',
  },
];
