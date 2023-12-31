import typescript from 'rollup-plugin-typescript2';

export default [
  // js 번들링
  {
    // 번들링 기준 파일
    input: 'src/index.ts',
    // 번들링 결과 파일과 형식(esm -> es modules, cjs -> commonjs)
    output: [{ file: 'dist/index.js', format: 'cjs' }],

    plugins: [typescript()],
  },
];
