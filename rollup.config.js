import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import string from 'rollup-plugin-string';
import uglify from 'rollup-plugin-uglify';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import easyImport from 'postcss-easy-import';
import cssnext from 'postcss-cssnext';

const NAMESPACE = require('./namespace.config.json').namespace;
const getModuleName = function(name) {
    return `${NAMESPACE}.${name}`;
};

export default {
    entry: 'src/index.js',
    targets: [
        {dest: 'dist/walas_angular_mdc.umd.min.js', format: 'umd'},
        // {dest: 'dist/walas_angular_mdc.min.js', format: 'es'},
    ],
    sourceMap: true,
    exports: 'named',
    moduleName: getModuleName('walasAngularMdc'),
    plugins: [
        string({
            include: '**/*.html'
        }),
        postcss({
            plugins: [
                easyImport(),
                cssnext()
            ],
            extract: 'dist/walas_angular_mdc.css'
        }),
        resolve(),
        commonjs({
            include: 'node_modules/**',
            exclude: [
                'node_modules/@walas/**'
            ]
        }),
        babel({
            include: [
                'node_modules/@material/**',
                'src/**'
            ]
        }),
        uglify()
    ]
};