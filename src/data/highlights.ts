/**
 * Publications and presentations authored/co-authored by Thilini.
 * The 'selected' flag is retained for curation, while the publications page groups all items by year.
 * Optional links are included only when a publisher or paper URL is verified.
 */
export type Publication = {
  year: number;
  type: string;
  title: string;
  authors: string;
  venue: string;
  selected: boolean;
  recognition?: string;
  link?: string;
};

export const publications: Publication[] = 
[
  {
    "year": 2026,
    "type": "Conference paper",
    "title": "Lumitree: Repurposing Smartwatch Ambient Light Sensors for Morning Light Promotion through Serious Games",
    "authors": "T. S. Karunarathna, N. H. Hoang, J. Villeneuve, E. F. Melcer, Z. Liang",
    "venue": "UbiComp Companion 2026 · WDGE Workshop · Shanghai, China",
    "selected": true,
    "link": "https://doi.org/10.1145/3798063.3839129"
  },
  {
    "year": 2026,
    "type": "Conference paper",
    "title": "Indoor-Outdoor Classification Using Consumer Smartwatch Ambient Light Sensors in Everyday Environments",
    "authors": "T. S. Karunarathna, N. H. Hoang, J. Villeneuve, E. F. Melcer, Z. Liang",
    "venue": "UbiComp Companion 2026 · WellComp Workshop · Shanghai, China",
    "selected": true
  },
  {
    "year": 2026,
    "type": "Conference paper",
    "title": "GlucoPatrol: A Multi-Stakeholder Dashboard for Contextual Exploration of Continuous Glucose Monitoring Data",
    "authors": "T. S. Karunarathna, N. H. Hoang, Z. Liang",
    "venue": "HEALTHINF 2026 / BIOSTEC 2026 · Marbella, Spain",
    "selected": true,
    "link": "https://doi.org/10.5220/0014639600004070"
  },
  {
    "year": 2026,
    "type": "Conference paper",
    "title": "From Notifications to Quests: Reframing Wearable Health Interventions Through RPG Quest Systems",
    "authors": "E. F. Melcer, J. Villeneuve, A. Tu, T. Karunarathna, N. H. Hoang, Z. Liang",
    "venue": "UbiComp Companion 2026 · WDGE Workshop · Shanghai, China",
    "selected": true,
    "recognition": "Best Presentation Award"
  },
  {
    "year": 2026,
    "type": "Conference paper",
    "title": "Visual Analytics of Sugar Intake and Postprandial Interstitial Glucose Dynamics Using 3D Surface Plots",
    "authors": "Z. Liang, M. Lococo, T. S. Karunarathna",
    "venue": "ICMHI 2026 · Kyoto, Japan",
    "selected": true,
    "link": "https://doi.org/10.1145/3829376.3829412"
  },
  {
    "year": 2026,
    "type": "Conference paper",
    "title": "Glanceable Chronotype and Social Jetlag on Smartwatches: A Gamified MCTQ Design",
    "authors": "N. H. Hoang, T. Karunarathna, J. Villeneuve, E. F. Melcer, Z. Liang",
    "venue": "IEEE GCCE 2026 · Kobe, Japan",
    "selected": false
  },
  {
    "year": 2026,
    "type": "Conference paper",
    "title": "Biochemical Self-Tracking as Personal Informatics: Sensemaking and Actionability of At-Home Micronutrient Tests",
    "authors": "Z. Liang, N. H. Hoang, T. S. Karunarathna",
    "venue": "HEALTHINF 2026 / BIOSTEC 2026 · Marbella, Spain",
    "selected": false,
    "link": "https://doi.org/10.5220/0014398900004070"
  },
  {
    "year": 2026,
    "type": "Conference abstract",
    "title": "Delivering Sleep Hygiene Interventions through Smartwatch-based Serious Sleep Games",
    "authors": "N. Hoang, J. Villeneuve, H. Morrison, A. Tu, T. Karunarathna, D. Hwang, S. Chen, K. Khotchasing, Z. Liang, E. Melcer",
    "venue": "World Sleep 2025 · Sleep Medicine 138 (Supplement), 108585 (2026)",
    "selected": false
  },
  {
    "year": 2026,
    "type": "Conference abstract",
    "title": "Uncovering Sleep-Linked Glucose Dynamics in Healthy Individuals Using Wearable Data",
    "authors": "Z. Liang, N. Hoang, T. Karunarathna",
    "venue": "World Sleep 2025 · Sleep Medicine 138 (Supplement), 108538 (2026)",
    "selected": false
  },
  {
    "year": 2025,
    "type": "Journal article",
    "title": "Development of Non-invasive Continuous Glucose Prediction Models Using Multi-Modal Wearable Sensors in Free-living Conditions",
    "authors": "T. S. Karunarathna, Z. Liang",
    "venue": "Sensors 25(10), 3207",
    "selected": true,
    "recognition": "Editor's Choice Article",
    "link": "https://doi.org/10.3390/s25103207"
  },
  {
    "year": 2025,
    "type": "Conference paper",
    "title": "Short-Term Glucose Prediction in Diabetes: Comparing Deep Learning Training Paradigms",
    "authors": "T. Karunarathna, C. F. Carvalho, Z. Liang",
    "venue": "IEEE GCCE 2025 · Osaka, Japan",
    "selected": true,
    "recognition": "Oral Presentation Award"
  },
  {
    "year": 2025,
    "type": "Conference paper",
    "title": "Bottom-Up Feature Selection for Continuous Glucose Prediction Using Wearable Data",
    "authors": "T. S. Karunarathna, Z. Liang",
    "venue": "IEEE GCCE 2025 · Osaka, Japan",
    "selected": true
  },
  {
    "year": 2025,
    "type": "Conference presentation",
    "title": "A Layered Software Stack for Web-Based Glucose Prediction and Visualization",
    "authors": "T. S. Karunarathna, N. H. Hoang, S. Khurshe, A. Beten, Z. Lococo, A. Baig, Z. Liang",
    "venue": "WSSE 2025 · Okayama, Japan",
    "selected": true,
    "recognition": "Best Presentation Award"
  },
  {
    "year": 2025,
    "type": "Conference paper",
    "title": "Eyes as Windows to the Heart: Predicting Heart Rate from Pupillometric Features",
    "authors": "K. K. Kosasih, C. D. Karlsson, T. S. Karunarathna, Z. Liang",
    "venue": "HEALTHINF 2025 · Porto, Portugal",
    "selected": false
  },
  {
    "year": 2025,
    "type": "Conference paper",
    "title": "Multiscale Entropy Analysis of Continuous Glucose Monitoring Data: A Comparative Study of Diabetic and Healthy Populations",
    "authors": "C. F. Carvalho, T. Karunarathna, Z. Liang",
    "venue": "HEALTHINF 2025 · Porto, Portugal",
    "selected": false
  },
  {
    "year": 2025,
    "type": "Conference paper",
    "title": "AIM-W: an Input-Adaptive Framework for Interoperable Physiological Modeling on Wearables",
    "authors": "Z. Liang, T. S. Karunarathna, A. Baig, A. Beten, L. Lococo",
    "venue": "IEEE WF-IoT 2025 · Chengdu, China",
    "selected": false
  },
  {
    "year": 2025,
    "type": "Conference paper",
    "title": "GlucoSurf: Engineering Interactive 3D Visualization for Exploring Postprandial Glucose Dynamics",
    "authors": "L. Lococo, T. S. Karunarathna, N. H. Hoang, Z. Liang",
    "venue": "WSSE 2025 · Okayama, Japan",
    "selected": false
  },
  {
    "year": 2025,
    "type": "Conference paper",
    "title": "Developing Serious Games on WearOS: A Software Engineering Perspective on Wearable-Game Integration",
    "authors": "N. Hoang, H. Morrison, T. S. Karunarathna, Z. Liang",
    "venue": "WSSE 2025 · Okayama, Japan",
    "selected": false
  },
  {
    "year": 2025,
    "type": "Conference paper",
    "title": "Impact of Cross-Subject Distribution Shifts on Glucose Prediction Using Wearable Data",
    "authors": "T. Karunarathna, A. Beten, L. Lococo, A. Baig, N. Hoang, Z. Liang",
    "venue": "IEEE CIBCB 2025 · Tainan, Taiwan",
    "selected": false
  },
  {
    "year": 2025,
    "type": "Conference presentation",
    "title": "A Pilot Study on Sensemaking of Consumer Micronutrient Tests: Sufficiencies, Deficiencies, and Barriers to Improvement",
    "authors": "Z. Liang, N. H. Hoang, T. Karunarathna",
    "venue": "Envisioning the Future of Interactive Health Workshop · CHI 2025 · Yokohama, Japan",
    "selected": false
  },
  {
    "year": 2025,
    "type": "Conference presentation",
    "title": "Exploring Gender Differences in Interstitial Glucose Dynamics through Multiscale Entropy Analysis",
    "authors": "C. F. Carvalho, T. Karunarathna, Z. Liang",
    "venue": "ICMHI 2025 · Kyoto, Japan",
    "selected": false
  },
  {
    "year": 2025,
    "type": "Conference presentation",
    "title": "Predicting Glucose Levels: The Role of Physiological, Circadian, Behavioral and Demographic Features",
    "authors": "T. Karunarathna, C. F. Carvalho, Z. Liang",
    "venue": "ICMHI 2025 · Kyoto, Japan",
    "selected": false
  },
  {
    "year": 2025,
    "type": "Proceedings article",
    "title": "Entropy Knows You’re Low: Wearable Signal Coupling Patterns Reveal Glucose State",
    "authors": "S. Khurshe, T. S. Karunarathna, C. F. Carvalho, N. H. Hoang, Z. Liang",
    "venue": "Engineering Proceedings 118(1), 96 · ECSA 2025",
    "selected": false,
    "link": "https://doi.org/10.3390/ECSA-12-26590"
  },
  {
    "year": 2025,
    "type": "Proceedings article",
    "title": "Systematic Analysis of Distribution Shifts in Cross-Subject Glucose Prediction Using Wearable Physiological Data",
    "authors": "A. Beten, L. Lococo, A. Baig, T. Karunarathna",
    "venue": "Engineering Proceedings 118(1), 88 · ECSA 2025",
    "selected": false,
    "link": "https://doi.org/10.3390/ECSA-12-26583"
  },
  {
    "year": 2024,
    "type": "Conference paper",
    "title": "Physiological Signal Based Blood Glucose Prediction in Diabetics and Non-Diabetics",
    "authors": "T. Karunarathna, Z. Liang",
    "venue": "IEEE HealthCom 2024 · Nara, Japan",
    "selected": true
  },
  {
    "year": 2024,
    "type": "Conference paper",
    "title": "Developing Consumer Wearable Compatible Computational Models for Non-Invasive Glucose Estimation in Diabetes Patients",
    "authors": "T. Karunarathna, Z. Liang",
    "venue": "IEEE LifeTech 2024 · Sydney, Australia",
    "selected": false
  },
  {
    "year": 2024,
    "type": "Conference paper",
    "title": "LSTM-Based Glucose Prediction for Prediabetes",
    "authors": "C. F. Carvalho, T. S. Karunarathna, Z. Liang",
    "venue": "IEEE GCCE 2024 · Kitakyushu, Japan",
    "selected": false
  },
  {
    "year": 2024,
    "type": "Reviewed presentation",
    "title": "Glucose Estimation Models for Diabetes and Their Utility on Healthy Individuals",
    "authors": "T. S. Karunarathna, Z. Liang",
    "venue": "BDCI 2024 · Kyoto, Japan",
    "selected": true
  }
];

export const selectedPublications = publications.filter((item) => item.selected);

export type Award = {
  year: string;
  title: string;
  organization: string;
  detail: string;
  link?: string;
};

// Awards for co-authored papers presented by other people are not listed as personal awards.
export const awards: Award[] = [
  {
    year: '2025', title: 'Editor’s Choice Article', organization: 'Sensors · MDPI',
    detail: 'Recognition for “Development of Non-Invasive Continuous Glucose Prediction Models Using Multi-Modal Wearable Sensors in Free-Living Conditions.” (December 2025)',
    link: 'https://doi.org/10.3390/s25103207',
  },
  {
    year: '2025', title: 'Oral Presentation Award', organization: '14th IEEE Global Conference on Consumer Electronics (GCCE 2025) · Osaka, Japan',
    detail: 'For the presentation “Short-Term Glucose Prediction in Diabetes: Comparing Deep Learning Training Paradigms.”',
  },
  {
    year: '2025', title: 'Best Presentation Award', organization: '7th World Symposium on Software Engineering (WSSE 2025) · Okayama, Japan',
    detail: 'For the presentation “A Layered Software Stack for Web-Based Glucose Prediction and Visualization.”',
  },
  {
    year: '2025', title: 'Best Presentation Award', organization: '22nd English Presentation Competition in Ritsumeikan (EPCR 2025) · Shiga, Japan',
    detail: 'Recognized for an English-language technical presentation.',
  },
  {
    year: '2025', title: 'Finalist team', organization: 'IEEE CIS Student Grand Competition on Computational Intelligence in Biomedicine and Healthcare',
    detail: 'Member of a team selected as a finalist in the 2025 competition.',
  },
  {
    year: '2024', title: 'Silver Award', organization: 'Pre-Capstone Project Final Presentation · Kyoto University of Advanced Science',
    detail: 'Awarded at the university’s pre-capstone project presentations.',
  },
];

export const scholarships = [
  {
    period: '2025–2027', title: 'Super KUAS-E Scholarship', organization: 'Kyoto University of Advanced Science',
    detail: 'Full tuition waiver and monthly stipend (September 2025–September 2027).',
  },
  {
    period: '2021–2025', title: 'KUAS-E Scholarship', organization: 'Kyoto University of Advanced Science',
    detail: 'Full tuition waiver (September 2021–September 2025).',
  },
];

export type GalleryItem = {
  heading: string;
  label: string;
  caption: string;
  image?: string;
  alt?: string;
};

export const gallery: GalleryItem[] = [
   {
    heading: 'IEEE GCCE 2025', label: 'Osaka, Japan · 2025',
    caption: 'With Myaku-Myaku at the IEEE Global Conference on Consumer Electronics.',
    image: '/images/gallery/gcce_2025.jpg', alt: 'Photograph from IEEE GCCE 2025',
  },
  {
    heading: 'WSSE 2025', label: 'Okayama, Japan · 2025',
    caption: 'Best Presentation Award for work on web-based glucose prediction and visualization.',
    image: '/images/gallery/wsse_award_2025.jpg', alt: 'Photograph from WSSE 2025',
  },
  {
    heading: 'IEEE HealthCom 2024', label: 'Nara, Japan · 2024',
    caption: 'First time presenting at an international conference',
    image: '/images/gallery/healthcom_2024.jpeg', alt: 'Photograph from IEEE Healthcom 2024',
  },
];
