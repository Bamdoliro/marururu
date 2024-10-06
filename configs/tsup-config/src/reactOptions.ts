import type { Options } from 'tsup';

export const reactOptions: Options = {
  format: ['cjs', 'esm'],
  entry: ['src/**/*.{ts,tsx}'],
  outDir: 'dist',
  sourcemap: true,
  dts: true,
  external: ['react', 'react-dom'],
};
