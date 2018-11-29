const moment = require('moment');
moment.locale('zh-cn');

// 加法的使用
// moment().add(Number, String);
// moment().add(Object);

moment().add(7, 'days');
moment().add(7, 'days').add(1, 'months'); // with chaining
moment().add({days:7,months:1}); // with object literal

// 减法的使用
// moment().subtract(Number, String);
// moment().subtract(Object);

moment().subtract(7, 'days');
moment().subtract('seconds', 1); // Deprecated in 2.8.0
moment().subtract(1, 'seconds');

// 计算某一时刻的开始时间;

moment().startOf('year');    //当前时间年度开始的时间
moment().startOf('month');   // 当前时间月份开始的时间
moment().startOf('quarter');  // 当前时间季度开始的时间
moment().startOf('week');    // 当前时间本周开始的时间
moment().startOf('day');     // 当前时间当前开始的时间
moment().startOf('hour');    // 当前时间当前小时开始的时间
moment().startOf('minute');  // 当前时间当前分数开始的时间
moment().startOf('second');  // 当前时间当前秒数开始的时间

moment().startOf('year');//等价于下面这一句
moment().month(0).date(1).hours(0).minutes(0).seconds(0).milliseconds(0);

moment().startOf('hour'); //等价于下面这一句
moment().minutes(0).seconds(0).milliseconds(0)

// 结束时间使用方法与上面类似;
moment().endOf(String); 
// string 为year/month/quarter..