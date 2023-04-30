import { random } from './random';

export type Palette = {
  primary: string,
  light: string,
  dark: string,
}
/**
 * Generate a palette of colors.
 */
export const randomPalette = (): Palette => {
  // random hue
  const hue = random(0, 360);
  // random saturation, keeping it quite high here as a stylistic preference
  const saturation = random(75, 100);
  // random lightness, keeping it quite high here as a stylistic preference
  const lightness = random(75, 95);
  // base color
  const primary = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  // almost black, slightly tinted with the base color
  const dark = `hsl(${hue}, ${saturation}%, 2%)`;
  // almost white, slightly tinted with the base color
  const light = `hsl(${hue}, ${saturation}%, 98%)`;
  return {
    primary,
    dark,
    light,
  };
};
type Point = {
  x: number,
  y: number,
}
/**
 * Generate a Blob body.
 */
export const randomBody = (x: number, y: number, size: number): Point[] => {
  // how many points do we want?
  const numPoints = random(3, 12);
  // step used to place each point at equal distances
  const angleStep = (Math.PI * 2) / numPoints;
  return Array(numPoints).fill(0).map((_, i) => {
    // how much randomness should be added to each point
    const pull = random(0.75, 1, true);
    // x & y coordinates of the current point
    // cos(theta) * radius + a little randomness thrown in
    const px = x + Math.cos(i * angleStep) * (size * pull);
    // sin(theta) * radius + a little randomness thrown in
    const py = y + Math.sin(i * angleStep) * (size * pull);
    return {
      x: px,
      y: py,
    };
  });
};
export type EyeDescriptor = {
  x: number,
  y: number,
  size: number,
}
/**
 * Generate Blob Eyes.
 */
export const randomEyes = (x: number, y: number, width: number): EyeDescriptor[] => {
  const isCyclops = random(0, 1, true) > 0.75;
  const size = random(width / 2, width);
  if (isCyclops) {
    return [
      {
        x,
        y,
        size,
      },
    ];
  }
  return [
    {
      y,
      size,
      x: x - width,
    },
    {
      y,
      size,
      x: x + width,
    },
  ];
};
export type BlobDescriptor = {
  id: string,
  x: number,
  y: number,
  width: number,
  height: number,
  eyes: EyeDescriptor[],
  body: Point[],
  colors: Palette,
}
/**
 * Generate a random Blob.
 */
export const createDescriptor = (width: number, height: number): BlobDescriptor => {
  const x = width / 2;
  const y = height / 2;
  const size = random(50, 80);
  const colors = randomPalette();
  const body = randomBody(x, y, size);
  const maxWidth = size / 2;
  const eyes = randomEyes(x, y, maxWidth);
  const id = Buffer.from(JSON.stringify({
    x, y, size, colors, body, eyes,
  })).toString('base64');
  return {
    id,
    x,
    y,
    width,
    height,
    body,
    eyes,
    colors,
  };
};
