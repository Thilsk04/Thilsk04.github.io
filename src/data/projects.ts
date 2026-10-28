export type Project = {
  slug: string;
  number: string;
  category: string;
  title: string;
  summary: string;
  timeframe: string;
  status: string;
  tags: string[];
  visual: 'watch' | 'chart' | 'light' | 'tree' | 'sensor';
  image?: string;
  imageAlt?: string;
  overview: string;
  approach: string[];
  outcome: string;
  links?: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    slug: 'lumipal', number: '01', category: 'Application development · Wearable computing', title: 'LumiPal',
    summary: 'A smartwatch-based serious game designed to encourage morning outdoor light exposure.',
    timeframe: '2025 — present', status: 'In development',
    tags: ['Wear OS', 'Kotlin', 'Godot', 'Ambient light sensing'], visual: 'watch',
    image: '/images/projects/lumipal.png', imageAlt: 'LumiPal app running on a smartwatch',
    overview: 'LumiPal is a smartwatch research prototype combining an ambient-light-based morning quest with a virtual pet. The project explores how interactive feedback can support consistent daily routines.',
    approach: [
      'Developing the watch application using Wear OS, Kotlin, and Godot.',
      'Integrating ambient-light sensing with time-bounded quest logic and interface feedback.',
      'Designing smartwatch interactions around brief, recurring activities.',
    ],
    outcome: 'Ongoing research and application development.',
  },
  {
    slug: 'glucose-prediction', number: '02', category: 'Machine learning · Wearable sensing', title: 'Wearable glucose prediction',
    summary: 'Estimating glucose levels from passively collected wearable signals using feature engineering and machine learning.',
    timeframe: '2024 — 2025', status: 'Published · Sensors 2025',
    tags: ['Python', 'XGBoost', 'Wearable data'], visual: 'chart',
    image: '/images/projects/glucose_prediction.png', imageAlt: 'Figure showing glucose prediction research results',
    overview: 'A study using the public BIG IDEAs dataset to estimate glucose levels from wearable physiological and activity signals, circadian timing, and demographics, without relying on manually logged meals or activities. The study analyzed data from 16 participants in free-living conditions.',
    approach: [
      'Preprocessed wearable and CGM data and engineered 236 physiological, behavioral, circadian, and demographic features.',
      'Selected the 30 most informative features using random-forest importance and compared linear, ridge, random-forest, and XGBoost regression models.',
      'Evaluated prediction error and Clarke Error Grid performance, and used SHAP to interpret the best-performing model.',
    ],
    outcome: 'Published in Sensors (2025). XGBoost achieved R² = 0.73, RMSE = 11.9 mg/dL, MARD = 7.1%, and 99.4% of predictions in Clarke Error Grid Zones A and B on the study dataset. External validation is still required.',
    links: [
      { label: 'Published paper', url: 'https://doi.org/10.3390/s25103207' },
    ],
  },
  {
    slug: 'light-sensing', number: '03', category: 'Wearable sensing · Context recognition', title: 'Indoor–outdoor light sensing',
    summary: 'Evaluating indoor–outdoor classification using the built-in ambient light sensor of the Google Pixel Watch 3.',
    timeframe: '2026', status: 'Published · WellComp 2026',
    tags: ['Wear OS', 'Python', 'Ambient light sensing'], visual: 'light',
    image: '/images/projects/inoutdoor.png', imageAlt: 'Indoor and outdoor smartwatch illuminance distributions with the dataset-derived threshold range',
    overview: 'A study of whether Pixel Watch 3 illuminance can distinguish indoor and outdoor environments, and whether thresholds from dedicated wearable light loggers transfer to consumer smartwatches.',
    approach: [
      'Developed a Wear OS logging app and collected data from 15 participants across 90 indoor and outdoor activity blocks.',
      'Resampled readings to 1 Hz, applied a causal five-second median filter, and evaluated lux-only threshold classification.',
      'Compared previously reported thresholds and identified a dataset-specific range separating the observations.',
    ],
    outcome: 'Published in UbiComp 2026 Companion (WellComp). A threshold above 1,508 lx and up to 3,268 lx achieved 100% accuracy on 27,414 recorded observations; broader validation is needed.',
  },
  {
    slug: 'lumitree', number: '04', category: 'Serious games · Wearable computing', title: 'LumiTree',
    summary: 'A Pixel Watch 3 serious game that uses morning light exposure to grow a virtual fruit tree.',
    timeframe: '2026', status: 'Published · WDGE 2026',
    tags: ['Wear OS', 'Kotlin', 'Godot 4.3', 'Ambient light sensing'], visual: 'tree',
    image: '/images/projects/lumitree.png', imageAlt: 'LumiTree daily quest and tree growth stages shown on a smartwatch',
    overview: 'LumiTree is a working smartwatch game prototype that turns ambient light into a gameplay input. During a wake-aligned morning quest, sufficient light advances a fruit tree through growth stages; dim conditions pause progress, and completing the quest unlocks a fruit reward.',
    approach: [
      'Built an Android–Godot integration using SensorManager to provide real-time illuminance readings to the Godot 4.3 game.',
      'Implemented a bounded foreground Light Sensing Session with an empirically selected 2,000 lx threshold, up to two hours of sensing, and a pre-noon cutoff.',
      'Persisted quest state on the Android side and exposed progress through the game UI and a Wear OS watch-face complication.',
    ],
    outcome: 'Built and demonstrated a working Pixel Watch 3 prototype; the design and sensing architecture were published at WDGE 2026 (UbiComp Companion). Its impact on light-seeking behavior has not yet been evaluated in a field study.',
    links: [
      { label: 'Published paper', url: 'https://doi.org/10.1145/3798063.3839129' },
      { label: 'Demo video', url: 'https://drive.google.com/file/d/1fvQU4hOBseyexaL2VOmEIjlj3xSi_LWx/view?usp=sharing' },
    ],
  },

  {
    slug: 'glucopatrol', number: '05', category: 'Health informatics · Data visualization', title: 'GlucoPatrol',
    summary: 'A multi-stakeholder dashboard for contextual exploration of continuous glucose monitoring data.',
    timeframe: '2025 — 2026', status: 'Published · HEALTHINF 2026',
    tags: ['Dashboard design', 'CGM', 'Data visualization', 'Wearable data'], visual: 'chart',
    image: '/images/projects/glucopatrol.png', imageAlt: 'Dashboard preview for the GlucoPatrol project',
    overview: 'GlucoPatrol is a web-based dashboard for contextual visual exploration of longitudinal continuous glucose monitoring data in free-living conditions. It integrates CGM data with user-logged events and wearable physiological signals, and adapts the interface for patients, clinicians, and researchers.',
    approach: [
      'Designed a shared data backbone that integrates CGM data, wearable physiological signals, and event logs for synchronized exploration.',
      'Structured the system around data integration, analytical processing, and role-specific visualization layers.',
      'Developed role-aware interfaces that balance interaction depth and visual abstraction for patients, clinicians, and researchers.',
    ],
    outcome: 'Published at HEALTHINF 2026 / BIOSTEC 2026 as a proof-of-concept dashboard for multi-stakeholder exploration of real-world CGM data. The paper presents the design and implementation rather than a deployed clinical system.',
    links: [
      { label: 'Published paper', url: 'https://doi.org/10.5220/0014639600004070' },
    ],
  },

  {
    slug: 'smartwatch-light-validation', number: '06', category: 'Sensor validation · Wearable computing', title: 'Smartwatch light-sensor validation',
    summary: 'Evaluating ambient-light measurements from consumer smartwatches against a reference illuminance meter.',
    timeframe: '2026 — present', status: 'Ongoing · Unpublished',
    tags: ['Pixel Watch 3', 'Wear OS', 'Python', 'Sensor validation'], visual: 'sensor',
    image: '/images/projects/watch_validation.png', imageAlt: 'Smartwatch light-sensor validation setup',
    overview: 'An ongoing measurement study examining how the Google Pixel Watch 3 ambient-light sensor compares with a reference lux meter across different lighting conditions. Unlike the indoor–outdoor classification project, the focus is on measurement agreement, consistency between devices, and limitations of smartwatch-based illuminance sensing.',
    approach: [
      'Collected and synchronized timestamped ambient-light readings from Pixel Watch devices and a reference lux meter.',
      'Examined indoor lighting levels, warm and cool light sources, and sensor-placement or orientation effects; outdoor conditions are part of the broader validation scope.',
      'Analyzed measurement bias, agreement, and variation between watches to understand the reliability of sensor readings for future applications.',
    ],
    outcome: 'Ongoing sensor-validation and analysis work. Findings are preliminary, with further testing and evaluation required; no paper has been published for this study.',
  },
];
