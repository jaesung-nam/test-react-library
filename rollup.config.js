import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external"
import babel from "@rollup/plugin-babel";
import del from 'rollup-plugin-delete';
import pkg from './package.json';

export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'esm'
    }
  ],
  sourceMap: true,
  plugins: [
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"]
    }),
    babel({
      babelHelpers: "bundled",
      exclude: 'node_modules/**',
      extensions: [".js", ".jsx", ".ts", ".tsx"]
    }),
    external(),
    commonjs({
      include: "node_modules/**"
    }),
    del({targets: 'dist/*'})
  ]
}