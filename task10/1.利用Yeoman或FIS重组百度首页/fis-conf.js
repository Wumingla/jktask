fis.config.set('settings.spriter.csssprites.margin', 20);

fis.config.set('modules.postpackager', 'simple');

//问题：以下为什么设置了'pkg/'的形式，和设置'/pkg'相同？
//我希望导出src='pkg/xxx.css',导出的确实src='/pkg/xxx.css'，
//虽然启动fis server服务器上可以正常显示，但这样导出后需要在index文件中修改路径才可以正常显示感觉很麻烦。
fis.config.set('pack', {
    'pkg/lib.js': [
        'js/jquery-2.1.4.min.js',
        'js/baidu3.js',
    ],
    // 设置CSS打包规则，CSS打包的同时会进行图片合并
    'pkg/aio.css': '**.css'
});


fis.config.set('settings.postpackager.simple.autoCombine', true);