"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readLine = require("readline");
var rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('请输入字符：', function (answer) {
    console.log("\u4F60\u8F93\u5165\u7684\u5B57\u7B26\u662F\uFF1A".concat(answer));
    rl.close();
});
