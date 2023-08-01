const { build } = require('esbuild');

build({
  entryPoints: ['./bin/hello-mesh.ts'],
  outfile: 'dist/index.js',
  format: 'cjs',
  minify: false,
  bundle: true,
  platform: 'node',
  target: 'node16',
}).catch(e => {
  console.error(e);
  process.exit(1);
});
