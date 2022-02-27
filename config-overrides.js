/* config-overrides.js */
/*这里使用的语法是node模块导入规范(CommonJS)*/

/*
导入injectBabelPlugin 需要接受两个参数，会返回一个全新的config对象
injectBabelPlugin(参数1 = [自己配置的模块] , config='webpack默认的配置')
*/

/*
导出一个函数，这个函数接受两个参数 
config = 要修改的config对象
env
*/

/* 
下面的import是babel-plugin-import这个插件
libraryName：需要配置的库的名字 ,会在项目根目录node_modules寻找。
libraryDirectory: 导出库中的指定的目录文件。 
style: 这里指的是antd的css文件一并导出
*/

const { override, fixBabelImports, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
    // 针对antd 实现按需打包：根据import来打包 (使用babel-plugin-import)  
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true, //自动打包相关的样式 默认为 style:'css'  
    }),
    //增加路径别名的处理 
    addWebpackAlias({
        '@': path.resolve('./src')
    })
);
