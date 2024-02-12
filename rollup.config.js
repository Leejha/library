import teser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: 'dist/index.js', format: 'cjs' },
      { file: 'dist/index.mjs', format: 'esm' },
    ],
    // ModuleResolution: 'node',

    plugins: [typescript(), teser()],
  },
];
