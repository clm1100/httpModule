const moment = require('moment');
moment.locale('zh-cn');

// moment取值赋值有两套方法
// 首先看第一套方法

// 设置指定时间或者当前时间的毫秒数; 注意Number的范围0-999
moment("2000-10").millisecond(Number);
// 获取当前时间或指定的毫秒数
moment().millisecond(); 


// 设置指定时间或者当前时间的秒数; 注意Number的范围0-59
moment("2000-10").second(Number);
// 获取当前时间或指定的秒数
moment().second(); 


// 设置指定时间或者当前时间的分数; 注意Number的范围0-59
moment("2000-10").minute(Number);
// 获取当前时间或指定的分数
moment().minute();


// 设置指定时间或者当前时间的小时; 注意Number的范围0-24
moment("2000-10").hour(Number);
// 获取当前时间或指定的小时
moment().hour(); 


// 设置指定时间或者当前时间的日期; 注意Number的范围1-31
moment("2000-10").date(Number);
// 获取当前时间或指定的日期
moment().date(); 


// 设置指定时间或者当前时间的星期; 注意Number的范围0-6
moment("2000-10").day(Number);
// 获取当前时间或指定的星期
moment().day(); 
// 这个方法既可以传递数字也可以传递字符串,英文表示的星期
//当范围超出6的话日期会自动计算


// 设置指定时间或者当前时间的某一天; 注意Number的范围1-365
moment("2000-10").dayOfYear(Number);
// 获取当前时间或指定时间的某一天
moment().dayOfYear(); 

// 设置指定时间或者当前时间的某一周; 注意Number的范围1-52
moment("2000-10").week(Number);
// 获取当前时间或指定时间的某一周
moment().week(); 



// 取值操作
moment().get('year');
// 注意月份的取值范围
moment().get('month');  // 0 to 11
moment().get('date');
moment().get('hour');
moment().get('minute');
moment().get('second');
moment().get('millisecond');

// 设置操作
moment().set('year', 2013);
moment().set('month', 3);  // April
moment().set('date', 1);
moment().set('hour', 13);
moment().set('minute', 20);
moment().set('second', 30);
moment().set('millisecond', 123);


// 也可以设置多个参数;
moment().set({'year': 2013, 'month': 3});
