import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { experienceTimeline } from '../src/data/experienceTimeline.ts';
import { awards, gallery, publications, scholarships } from '../src/data/highlights.ts';
import { profile } from '../src/data/profile.ts';
import { projects } from '../src/data/projects.ts';
import { technologyGroups } from '../src/data/technologies.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicImages = path.join(root, 'public', 'images');
const albums = JSON.parse(fs.readFileSync(path.join(root, 'src/data/life.json'), 'utf8'));

function fail(message) {
  throw new Error(message);
}

function nonEmptyString(value, label) {
  if (typeof value !== 'string' || value.trim() === '') fail(`${label} must be a non-empty string`);
}

function optionalString(value, label) {
  if (value !== undefined && typeof value !== 'string') fail(`${label} must be a string when provided`);
}

function nonEmptyArray(value, label) {
  if (!Array.isArray(value) || value.length === 0) fail(`${label} must be a non-empty array`);
}

function unique(value, seen, label) {
  if (seen.has(value)) fail(`Duplicate ${label}: ${value}`);
  seen.add(value);
}

function slug(value, label) {
  nonEmptyString(value, label);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) {
    fail(`${label} must contain only lowercase letters, numbers, and single hyphens`);
  }
}

function webUrl(value, label) {
  nonEmptyString(value, label);
  let parsed;
  try {
    parsed = new URL(value);
  } catch {
    fail(`${label} is not a valid URL: ${value}`);
  }
  if (!['http:', 'https:'].includes(parsed.protocol)) fail(`${label} must use HTTP or HTTPS: ${value}`);
}

function localImage(value, label) {
  nonEmptyString(value, label);
  if (!value.startsWith('/images/') || value.includes('?') || value.includes('#') || value.includes('\\')) {
    fail(`${label} must be a root-relative path under /images/: ${value}`);
  }

  const target = path.resolve(root, 'public', `.${value}`);
  if (target !== publicImages && !target.startsWith(`${publicImages}${path.sep}`)) {
    fail(`${label} escapes public/images/: ${value}`);
  }
  if (!fs.existsSync(target) || !fs.statSync(target).isFile()) fail(`${label} does not exist: ${value}`);
}

function optionalLocalImage(value, label) {
  if (value === undefined || value === '') return;
  localImage(value, label);
}

// Home and shared layout data.
for (const field of [
  'name', 'introduction', 'about', 'aboutPersonal', 'github', 'linkedin', 'scholar', 'instagram',
]) {
  nonEmptyString(profile[field], `profile.${field}`);
}
for (const field of ['github', 'linkedin', 'scholar', 'instagram']) webUrl(profile[field], `profile.${field}`);
if (typeof profile.scholarIsSearch !== 'boolean') fail('profile.scholarIsSearch must be a boolean');
optionalLocalImage(profile.portrait, 'profile.portrait');
if (profile.portrait) nonEmptyString(profile.portraitAlt, 'profile.portraitAlt');

// Work and project detail routes.
nonEmptyArray(projects, 'projects');
const projectSlugs = new Set();
const projectNumbers = new Set();
const projectVisuals = new Set(['watch', 'chart', 'light', 'tree', 'sensor']);
for (const [index, project] of projects.entries()) {
  const label = `projects[${index}]`;
  slug(project.slug, `${label}.slug`);
  unique(project.slug, projectSlugs, 'project slug');
  for (const field of ['number', 'category', 'title', 'summary', 'timeframe', 'status', 'overview', 'outcome']) {
    nonEmptyString(project[field], `${label}.${field}`);
  }
  unique(project.number, projectNumbers, 'project number');
  if (!projectVisuals.has(project.visual)) fail(`${label}.visual is not supported: ${project.visual}`);
  nonEmptyArray(project.tags, `${label}.tags`);
  project.tags.forEach((item, itemIndex) => nonEmptyString(item, `${label}.tags[${itemIndex}]`));
  nonEmptyArray(project.approach, `${label}.approach`);
  project.approach.forEach((item, itemIndex) => nonEmptyString(item, `${label}.approach[${itemIndex}]`));
  optionalLocalImage(project.image, `${label}.image`);
  optionalString(project.imageAlt, `${label}.imageAlt`);
  if (project.links !== undefined) {
    if (!Array.isArray(project.links)) fail(`${label}.links must be an array when provided`);
    for (const [linkIndex, link] of project.links.entries()) {
      nonEmptyString(link.label, `${label}.links[${linkIndex}].label`);
      webUrl(link.url, `${label}.links[${linkIndex}].url`);
    }
  }
}

// Research page. The page derives its year tabs from these values, so new years are
// valid automatically; every current group is reported below instead of hard-coded.
nonEmptyArray(publications, 'publications');
const publicationKeys = new Set();
const publicationYears = new Set();
for (const [index, publication] of publications.entries()) {
  const label = `publications[${index}]`;
  if (!Number.isInteger(publication.year) || publication.year < 1900) fail(`${label}.year must be a valid integer year`);
  publicationYears.add(publication.year);
  for (const field of ['type', 'title', 'authors', 'venue']) nonEmptyString(publication[field], `${label}.${field}`);
  unique(`${publication.year}\0${publication.title}`, publicationKeys, 'publication title/year');
  if (typeof publication.selected !== 'boolean') fail(`${label}.selected must be a boolean`);
  optionalString(publication.recognition, `${label}.recognition`);
  if (publication.link !== undefined) webUrl(publication.link, `${label}.link`);
}

for (const [collectionName, collection, fields] of [
  ['awards', awards, ['year', 'title', 'organization', 'detail']],
  ['scholarships', scholarships, ['period', 'title', 'organization', 'detail']],
]) {
  if (!Array.isArray(collection)) fail(`${collectionName} must be an array`);
  for (const [index, item] of collection.entries()) {
    for (const field of fields) nonEmptyString(item[field], `${collectionName}[${index}].${field}`);
    if (item.link !== undefined) webUrl(item.link, `${collectionName}[${index}].link`);
  }
}

if (!Array.isArray(gallery)) fail('gallery must be an array');
for (const [index, item] of gallery.entries()) {
  for (const field of ['heading', 'label', 'caption']) nonEmptyString(item[field], `gallery[${index}].${field}`);
  optionalLocalImage(item.image, `gallery[${index}].image`);
  optionalString(item.alt, `gallery[${index}].alt`);
}

// Moments index and album detail routes. Empty albums and empty covers are
// supported by the UI; alt, location, and caption are intentionally optional.
if (!Array.isArray(albums)) fail('src/data/life.json must contain an array');
const albumSlugs = new Set();
const momentCategories = new Set(['Travel', 'Teaching', 'Campus']);
for (const [index, album] of albums.entries()) {
  const label = `albums[${index}]`;
  slug(album.slug, `${label}.slug`);
  unique(album.slug, albumSlugs, 'album slug');
  for (const field of ['title', 'category', 'subtitle', 'intro']) nonEmptyString(album[field], `${label}.${field}`);
  if (!momentCategories.has(album.category)) {
    fail(`${label}.category is not displayed by the Moments page: ${album.category}`);
  }
  if (typeof album.cover !== 'string') fail(`${label}.cover must be a string (an empty string is allowed)`);
  optionalLocalImage(album.cover, `${label}.cover`);
  optionalString(album.coverAlt, `${label}.coverAlt`);
  if (!Array.isArray(album.photos)) fail(`${label}.photos must be an array`);
  for (const [photoIndex, photo] of album.photos.entries()) {
    const photoLabel = `${label}.photos[${photoIndex}]`;
    localImage(photo.src, `${photoLabel}.src`);
    for (const field of ['alt', 'location', 'caption']) optionalString(photo[field], `${photoLabel}.${field}`);
  }
}

// About timeline. Source order is presentation order, so require valid fields but
// do not impose a chronology that the component itself does not require.
nonEmptyArray(experienceTimeline, 'experienceTimeline');
const timelineCategories = new Set(['education', 'research', 'teaching', 'community', 'work']);
for (const [index, item] of experienceTimeline.entries()) {
  const label = `experienceTimeline[${index}]`;
  for (const field of ['startDate', 'startLabel', 'dateRange', 'category', 'title', 'organization', 'detail']) {
    nonEmptyString(item[field], `${label}.${field}`);
  }
  if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(item.startDate)) fail(`${label}.startDate must use YYYY-MM`);
  if (!timelineCategories.has(item.category)) fail(`${label}.category is not supported: ${item.category}`);
}

// Work-page technologies may use local assets or HTTP(S)-hosted brand artwork.
nonEmptyArray(technologyGroups, 'technologyGroups');
const technologyHeadings = new Set();
const technologyNames = new Set();
for (const [index, group] of technologyGroups.entries()) {
  const label = `technologyGroups[${index}]`;
  nonEmptyString(group.heading, `${label}.heading`);
  unique(group.heading, technologyHeadings, 'technology group heading');
  nonEmptyArray(group.items, `${label}.items`);
  for (const [itemIndex, item] of group.items.entries()) {
    const itemLabel = `${label}.items[${itemIndex}]`;
    nonEmptyString(item.name, `${itemLabel}.name`);
    unique(item.name, technologyNames, 'technology name');
    if (typeof item.logo !== 'string') fail(`${itemLabel}.logo must be a string`);
    if (item.logo.startsWith('/')) localImage(item.logo, `${itemLabel}.logo`);
    else webUrl(item.logo, `${itemLabel}.logo`);
    if (item.wide !== undefined && typeof item.wide !== 'boolean') fail(`${itemLabel}.wide must be a boolean`);
  }
}

const sortedYears = [...publicationYears].sort((a, b) => b - a);
console.log(`Validated ${projects.length} projects and their generated detail routes.`);
console.log(`Validated ${publications.length} publications grouped by year: ${sortedYears.join(', ')}.`);
console.log(`Validated ${albums.length} Moments albums; photo alt text remains optional.`);
console.log('Validated profile, About timeline, recognition, gallery, technology, URL, and local image data.');
