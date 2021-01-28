import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    { file: 'dist/index.cjs', format: 'cjs', sourcemap: true, exports: 'auto' },
    {
      file: 'dist/index.min.cjs',
      format: 'cjs',
      plugins: [terser()],
      sourcemap: true,
      exports: 'auto',
    },
    { file: 'dist/index.mjs', format: 'esm', sourcemap: true },
    { file: 'dist/index.min.mjs', format: 'esm', plugins: [terser()], sourcemap: true },
  ],
  plugins: [
    babel({ babelHelpers: 'bundled', plugins: ['@babel/plugin-proposal-class-properties'] }),
  ],
  external: ['axios', 'uuid', 'stacktrace-js']
};
