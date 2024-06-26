// esbuild.config.js
const esbuild = require('esbuild');
const postcss = require('esbuild-postcss');

esbuild
  .build({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    outfile: 'dist/bundle.js',
    plugins:[
      postcss({
        config: './postcss.config.js',
      }),
    ]
  })
  .catch(() => process.exit(1));
