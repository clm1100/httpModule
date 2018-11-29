const moment = require('moment');
moment.locale('zh-cn');

// 格式化
// moment().format(String);

moment().format();  
// 2018-11-29T16:15:21+08:00   
moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
// 星期四, 十一月 29日 2018, 4:14:27 下午
moment().format("ddd, hA"); 
// 周四, 4下午

// 时差 距离当前时刻的时间
// moment().fromNow();
// moment().fromNow(Boolean);

moment([2007, 0, 29]).fromNow();     // 12 年 前
// 加上true之后会去掉 ago
moment([2007, 0, 29]).fromNow(true); // 12 年

// 时差距离某一个时间之前；

var a = moment([2007, 0, 28]);
var b = moment([2007, 0, 29]);
a.from(b) //一天前

// 时差计算两个时间相差毫秒数;
var a = moment([2007, 0, 29]);
var b = moment([2007, 0, 28]);
a.diff(b) // 86400000
//可以设置单位,将毫秒数设置为年月日天;
a.diff(b, 'days') 
a.diff(b, 'years'); 
a.diff(b, 'years', true); 