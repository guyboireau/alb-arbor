const fs = require('fs');
const path = require('path');

const layoutPath = path.join(__dirname, 'src/layouts/Layout.astro');
const dsPath = path.join(__dirname, 'src/components/DesignSwitcher.astro');

let layout = fs.readFileSync(layoutPath, 'utf8');
let ds = fs.readFileSync(dsPath, 'utf8');

const replacements = [
  // Forge (D)
  ['#1c2d45', '#1B3815'],
  ['#e8ecf0', '#f2f7f2'],
  ['#dce3ea', '#E8F5E9'],
  ['#3a5068', '#2E5A27'],
  ['#6a8099', '#4a7c59'],
  ['#99b0c8', '#a0c4a4'],
  // Le Salon (E)
  ['#f0f4f8', '#f4f9f4'],
  ['#e4ebf4', '#E8F5E9'],
  ['#f8fafc', '#fafdfa'],
  ['#1c3458', '#1B3815'],
  ['#3d5880', '#2E5A27'],
  ['#6e88a8', '#4a7c59'],
  ['#b8ccdd', '#b0d6b5'],
  ['#2d6ac4', '#4CAF50'],
  // Stade (F)
  ['#0a0e1a', '#0d1a0d'],
  ['#3d4458', '#2E5A27'],
  ['#7a8195', '#6b8e6b'],
  ['#e3e7ee', '#d4e6d4'],
  ['#eef1f5', '#e9f2e9'],
  // Vague (G)
  ['#e8f4f8', '#eaf5ea'],
  ['#d4ecf4', '#d9f0d9'],
  ['#f0f8fb', '#f2fbf2'],
  ['#1c3d5a', '#1B3815'],
  ['#3a6080', '#2E5A27'],
  ['#6a90aa', '#4a7c59'],
  ['#7ab8d0', '#8ac98a'],
  ['#b8dce8', '#cce6cc'],
  ['#0e92b8', '#4CAF50'],
  // ABPM (H)
  ['#0ea5e9', '#4CAF50'],
  ['#0284c7', '#2E5A27'],
  ['#e0f2fe', '#E8F5E9'],
  ['#3a63ff', '#4CAF50']
];

for (const [blue, green] of replacements) {
  layout = layout.split(blue).join(green);
  ds = ds.split(blue).join(green);
}

// Ensure primary-light is defined in H
layout = layout.replace('--primary-light: #e0f2fe;', '--primary-light: #E8F5E9;');

fs.writeFileSync(layoutPath, layout);
fs.writeFileSync(dsPath, ds);
console.log('Colors replaced successfully.');
