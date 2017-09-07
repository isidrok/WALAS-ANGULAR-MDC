import config from './rollup.config.js';

config.plugins.pop(); // remove uglify
config.dest = 'dist/walas_angular_mdc.js';
config.sourceMapFile = 'dist/walas_angular_mdc.js.map';
export default config;