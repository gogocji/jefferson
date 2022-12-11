const path = require('path')
const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const rollupTypescript = require('rollup-plugin-typescript2')
const babel = require('@rollup/plugin-babel')
const { DEFAULT_EXTENSIONS } = require('@babel/core')
const pkg = require('./package.json') // 当前运行环境，可通过 cross-env 命令行设置 
const env = process.env.NODE_ENV // umd 模式的编译结果文件输出的全局变量名称 
const name = 'RollupTsTemplate' 
console.log("pkg", pkg)
const config = { 
    // 入口文件，src/index.ts 
    input: path.resolve(__dirname, 'src/index.ts'), 
    // 输出文件 
    output: { 
        file: './dist/bundle.js', 
        format: 'cjs', 
        name: 'core'
    }, 
        
    plugins: [ 
        // 解析第三方依赖 
        resolve(), 
        // 识别 commonjs 模式第三方依赖 
        commonjs(),
        // rollup 编译 typescript 
        rollupTypescript(), 
        // babel 配置 
        babel({ 
            // 编译库使用 
            babelHelpers: 'runtime', 
            // 只转换源代码，不转换外部依赖 
            exclude: 'node_modules/**', 
            // babel 默认不支持 ts 需要手动添加 
            extensions: [ 
                ...DEFAULT_EXTENSIONS, 
                '.ts', 
            ], 
        }), 
    ] 
} 
// 若打包正式环境，压缩代码 
if (env === 'production') { 
    config.plugins.push(terser({ 
        compress: { 
            pure_getters: true, 
            unsafe: true, 
            unsafe_comps: true, 
            warnings: false 
        } 
    })) 
} 

module.exports = config
