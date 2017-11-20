var fs = require('fs');
var moment = require('moment'); // moment.js
var html = fs.readFileSync('./test.html', 'utf8'); // 引入html模板


var create = require('./func.js'); // 引入写好的函数
var options = {
    "format": 'A4',
    "header": {
        "height": "10mm",
        "contents": ''
    }}; // 一些配置
var name = '张三';
// 匹配规则
var reg = [
    {
        relus: /__name__/g,
        match: name
    },
    {
        relus: /__date__/g,
        match: moment().format('YYYY年MM月DD日')
    }
];
create.createPDFProtocolFile(html, options, reg, './test.pdf');