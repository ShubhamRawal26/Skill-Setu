import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\asus\\.gemini\\antigravity-ide\\brain\\04922870-97d8-4c19-936b-e03d314b5201';

if (!fs.existsSync(artifactDir)) {
  fs.mkdirSync(artifactDir, { recursive: true });
}

function capture(url, outputFile, width = 390, height = 1200) {
  const fullPath = path.join(artifactDir, outputFile);
  const cmd = `"${chromePath}" --headless --disable-gpu --hide-scrollbars --window-size=${width},${height} --screenshot="${fullPath}" "${url}"`;
  console.log('Running:', cmd);
  execSync(cmd, { stdio: 'inherit' });
  console.log('Saved to:', fullPath);
  return fullPath;
}

try {
  capture('http://localhost:3000/', 'mobile_home.png', 390, 2400);
  capture('http://localhost:3000/', 'desktop_home.png', 1280, 1800);
} catch (e) {
  console.error('Error capturing screenshot:', e.message);
}
