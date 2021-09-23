export const main_colors = [
  '#264653',
  '#2a9d8f',
  '#e9c46a',
  '#f4a261',
  '#e76f51',
  '#219ebc',
  '#8ecae6',
];

export function getRandomMainColor() {
  return main_colors[Math.floor(Math.random() * main_colors.length)];
}
