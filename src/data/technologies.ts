/** Recognizable project/brand artwork shown as logos, not invented approximations.
 * Devicon and Simple Icons serve the original brand marks over HTTPS.
 * Brand artwork belongs to its trademark owners and does not imply endorsement.
 * All tiles have accessible names; a text fallback appears if a remote logo fails.
 */
const devicon = (name: string, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;
const simple = (name: string, hex: string) =>
  `https://cdn.simpleicons.org/${name}/${hex}`;
const theSvg = (name: string) =>
  `https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/${name}/default.svg`;

export type Technology = { name: string; logo: string; wide?: boolean };
export type TechnologyGroup = { heading: string; items: Technology[] };
export const technologyGroups: TechnologyGroup[] = [
  { heading: 'Programming & computation', items: [
    { name: 'Python', logo: devicon('python') },
    { name: 'Kotlin', logo: devicon('kotlin') },
    { name: 'MATLAB', logo: devicon('matlab') },
    { name: 'NumPy', logo: devicon('numpy') },
    { name: 'pandas', logo: devicon('pandas') },
  ] },
  { heading: 'Machine learning & data', items: [
    { name: 'scikit-learn', logo: devicon('scikitlearn') },
    { name: 'XGBoost', logo: 'https://xgboost.ai/images/logo/xgboost-logo-trimmed.png', wide: true },
    { name: 'LightGBM', logo: 'https://static.cdnlogo.com/logos/l/26/lightgbm.svg', wide: true },
    { name: 'Optuna', logo: simple('optuna', '002C76') },
    { name: 'MLflow', logo: simple('mlflow', '0194E2') },
  ] },
  { heading: 'App development', items: [
    { name: 'Wear OS', logo: theSvg('wear-os') },
    { name: 'Godot', logo: devicon('godot') },
    { name: 'Jetpack Compose', logo: simple('jetpackcompose', '4285F4') },
    { name: 'Android Studio', logo: devicon('androidstudio') },
  ] },
  { heading: 'Hardware & prototyping', items: [
    { name: 'Arduino', logo: devicon('arduino') },
    { name: 'Raspberry Pi', logo: devicon('raspberrypi') },
  ] },
];
