import type { Options } from 'tsup';

export const basicOptions: Options = {
  format: ['cjs', 'esm'],
  entry: ['src/**/*.{ts,tsx}'],
  outDir: 'dist',
  sourcemap: true,
  dts: true,
};
