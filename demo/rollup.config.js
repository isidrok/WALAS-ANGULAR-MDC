import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import string from 'rollup-plugin-string';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import easyImport from 'postcss-easy-import';
import cssnext from 'postcss-cssnext';
import replace from 'rollup-plugin-replace';

const NAMESPACE = require('./namespace.config.json').namespace;
const getModuleName = function(name) {
    return `${NAMESPACE}.${name}`;
};

export default {
    entry: 'src/index.js',
    dest: 'dist/walas_angular_mdc_demo.umd.js',
    format: 'umd',
    sourceMap: true,
    exports: 'named',
    moduleName: getModuleName('walasAngularMdcDemo'),
    plugins: [
        replace({
            exclude: 'node_modules/**',
            ENVIRONMENT: JSON.stringify('production')
        }),
        string({
            include: '**/*.html'
        }),
        postcss({
            plugins: [
                easyImport(),
                cssnext()
            ]
        }),
        resolve(),
        commonjs({
            include: 'node_modules/**',
            exclude: [
                'node_modules/@walas/**'
            ]
        }),
        babel({
            exclude: 'node_modules/**',
        })
    ]
};