import * as readLine from 'readline'

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('请输入字符：' , answer => {
    console.log(`你输入的字符是：${answer}`);
    rl.close();
});