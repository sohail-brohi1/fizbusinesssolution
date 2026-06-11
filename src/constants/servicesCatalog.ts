export interface ServiceItem {
  id: number;
  name: string;
  desc: string;
  areas: string;
}

export interface ServiceCategory {
  title: string;
  services: ServiceItem[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: 'UK Writing Services',
    services: [
      { id: 1, name: 'Academic Writing', desc: 'Professional academic writing across all subjects and levels.', areas: 'All Subjects' },
      { id: 2, name: 'Dissertation Writing', desc: 'Full dissertation support from proposal to final submission.', areas: 'Masters / PhD' },
      { id: 3, name: 'Essay Writing', desc: 'Well-researched essays in APA, MLA, Harvard and other styles.', areas: 'Arts / Humanities' },
      { id: 4, name: 'Homework Help', desc: 'Quick, accurate help for daily homework and short assignments.', areas: 'K12 / College' },
      { id: 5, name: 'Thesis Writing', desc: 'Comprehensive thesis preparation with research and formatting.', areas: 'Academic Research' },
      { id: 6, name: 'Research Paper', desc: 'In-depth research papers with proper citations and references.', areas: 'Scientific / Academic' },
      { id: 7, name: 'Case Study', desc: 'Analytical case study reports for business, law and healthcare.', areas: 'Business / Law' },
      { id: 8, name: 'Coursework Writing', desc: 'Structured coursework tailored to your module requirements.', areas: 'University Level' },
      { id: 9, name: 'Proofreading & Editing', desc: 'Grammar, clarity, structure and style improvements on any document.', areas: 'All Documents' },
      { id: 10, name: 'Online Exam Help', desc: 'Expert assistance for online exams, quizzes and timed assessments.', areas: 'Real-time Support' },
    ],
  },
  {
    title: 'Subjective Services',
    services: [
      { id: 11, name: 'Management Assignment', desc: 'MBA and business management assignments by industry experts.', areas: 'Business / MBA' },
      { id: 12, name: 'Finance Assignment', desc: 'Financial analysis, modelling and report writing support.', areas: 'Finance / Accounting' },
      { id: 13, name: 'Economics Assignment', desc: 'Micro, macro and econometrics assignments with data analysis.', areas: 'Economics' },
      { id: 14, name: 'Accounting Help', desc: 'Accounting problems, ledgers, reports and case-based tasks.', areas: 'Accounting' },
      { id: 15, name: 'Business Assignment', desc: 'Business plans, strategy papers and corporate case studies.', areas: 'Business Studies' },
      { id: 16, name: 'Engineering Assignment', desc: 'Technical reports, calculations and engineering problem sets.', areas: 'Engineering' },
      { id: 17, name: 'Marketing Assignment', desc: 'Marketing plans, campaigns and consumer behaviour analysis.', areas: 'Marketing' },
      { id: 18, name: 'HRM Assignment', desc: 'HR policies, organisational behaviour and people management tasks.', areas: 'Human Resources' },
      { id: 19, name: 'Nursing Assignment', desc: 'Clinical case studies and healthcare papers to UK nursing standards.', areas: 'Nursing / Medicine' },
      { id: 20, name: 'Strategic Marketing', desc: 'Strategic marketing analysis, SWOT and competitive positioning.', areas: 'Marketing Strategy' },
    ],
  },
  {
    title: 'Diploma & Degrees',
    services: [
      { id: 21, name: 'CIPD Assignment', desc: 'CIPD Level 3, 5 and 7 HR and L&D assignment support.', areas: 'CIPD / HR' },
      { id: 22, name: 'HND Assignment Help', desc: 'Higher National Diploma coursework across all HND modules.', areas: 'HND' },
      { id: 23, name: 'HNC Assignment Help', desc: 'Higher National Certificate assignments with vocational focus.', areas: 'HNC' },
      { id: 24, name: 'ATHE Assignment', desc: 'ATHE diploma and extended diploma assignment assistance.', areas: 'ATHE' },
      { id: 25, name: 'BTEC Assignment', desc: 'BTEC Level 3–5 assignments with criteria-mapped answers.', areas: 'BTEC' },
      { id: 26, name: 'British University Help', desc: 'Dedicated support for UK university standards and rubrics.', areas: 'UK Universities' },
    ],
  },
];

export const ALL_SERVICES: ServiceItem[] = SERVICE_CATEGORIES.flatMap((c) => c.services);

export const MEGA_MENU_CATEGORIES = SERVICE_CATEGORIES.map((category) => ({
  title: category.title,
  links: category.services.map((s) => s.name),
}));
