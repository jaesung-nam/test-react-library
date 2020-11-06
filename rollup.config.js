import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete';
import { eslint } from 'rollup-plugin-eslint';
import pkg from './package.json';

const isProduction = process.env.NODE_ENV === 'production';

export default async () => ({
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: ['react', 'react-dom', /@babel\/runtime/],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    eslint(),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    isProduction && (await import('rollup-plugin-terser')).terser(),
    del({ targets: 'dist/*' }),
  ],
});
