const moment = require('moment');

moment.locale('zh-cn');
// 将时间显示格式设置为中文格式;

// 解析时间格式字符串;
moment("1995-12-25"); 
//用中划线分割的年月日这种格式的字符串后面不需要添加解析格式

moment("12-25-1995", "MM-DD-YYYY");
// 如果不是按照年月日顺序排列的需要传递第二个参数，注明解析规则 

moment("12/25/1995", "MM-DD-YYYY");
// 不用中划线中正斜杠分割也可以，解析规则同样适用。

// 补充两个常用函数
moment(String).isValid();
// 这这个方法判断字符串时候可以被解析。

moment().unix() 
// 获取时间戳,单位是秒与Date.now()类似





















// let result = moment().format();
// moment.locale('zh-cn');
// console.log(new Date())
// console.log(result);
// let res=moment().get('week');
// console.log(res);

// let m = moment();
// let t = m.hours(); // 5
// let t2 = m.add(24, 'hours').hours(); 
// console.log(t2);

// let m = moment("12/25/1995", "MM-DD-YYYY");
// // console.log(new Date().setSeconds(30))
// // console.log(new Date().setUTCSeconds(30))
// console.log(moment().months())





// let result = moment().format();
// moment.locale('zh-cn');
// console.log(new Date())
// console.log(result);
// let res=moment().get('week');
// console.log(res);

// let m = moment();
// let t = m.hours(); // 5
// let t2 = m.add(24, 'hours').hours(); 
// console.log(t2);

// let m = moment("12/25/1995", "MM-DD-YYYY");
// // console.log(new Date().setSeconds(30))
// // console.log(new Date().setUTCSeconds(30))
// console.log(moment().months())