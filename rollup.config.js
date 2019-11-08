// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs'

export default [
    {
        input: 'src/main.js',
        output: [
            {file: 'bundle.iife.js', format: 'iife', name: 'MyTest', exports: 'named'},
            {file: 'bundle.umd.js', format: 'umd', name: 'MyTest', exports: 'named'}
        ],
        plugins: [
            commonjs(),
            resolve(),
            babel({
                exclude: 'node_modules/**',
                runtimeHelpers: true
            })
        ]
    },
    {
        input: 'src/main.js',
        external: [],
        plugins: [
            resolve()
        ],
        output: [
            {file: 'bundle.esm.js', format: 'esm'},
            {file: 'bundle.amd.js', format: 'amd', exports: 'named'},
            {file: 'bundle.system.js', format: 'system', exports: 'named'},
            {file: 'bundle.cjs.js', format: 'cjs', exports: 'named'},
        ]
    }
];