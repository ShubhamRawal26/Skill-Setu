import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\asus\\.gemini\\antigravity-ide\\brain\\04922870-97d8-4c19-936b-e03d314b5201\\pages';

if (!fs.existsSync(artifactDir)) {
  fs.mkdirSync(artifactDir, { recursive: true });
}

function capture(url, outputFile, width = 390, height = 2400) {
  const fullPath = path.join(artifactDir, outputFile);
  const cmd = `"${chromePath}" --headless --disable-gpu --force-color-profile=srgb --virtual-time-budget=3000 --hide-scrollbars --window-size=${width},${height} --screenshot="${fullPath}" "${url}"`;
  console.log('Capturing:', outputFile);
  try {
    execSync(cmd, { stdio: 'ignore' });
    console.log('Saved:', outputFile);
  } catch (e) {
    console.error('Failed:', outputFile, e.message);
  }
}

const pages = [
  { path: 'home', file: 'home' },
  { path: 'features', file: 'features' },
  { path: 'about', file: 'about' },
  { path: 'opportunities', file: 'opportunities' },
  { path: 'feed', file: 'feed' },
  { path: 'courses', file: 'courses' },
  { path: 'skill', file: 'skill' },
  { path: 'industry', file: 'industry' },
  { path: 'profile', file: 'profile' },
  { path: 'messages', file: 'messages' },
  { path: 'login', file: 'login' }
];

console.log('Starting full site mobile & desktop capture...');
for (const p of pages) {
  capture(`http://localhost:3000/#${p.path}`, `mobile_${p.file}.png`, 390, 2200);
  capture(`http://localhost:3000/#${p.path}`, `desktop_${p.file}.png`, 1280, 1400);
}
console.log('Completed all captures!');
