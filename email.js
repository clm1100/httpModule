//test.js

const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')

// 1. 创建
const transport = nodemailer.createTransport(smtpTransport({
    host: 'xxx.com',  //查看发送邮件的邮箱开放的host
    port: xx,   //查看发送邮件的邮箱开放的port
    secureConnection: true, //使用 SSL
    auth: {
        user: 'xxx@xxx.com',  //发送邮件的邮箱
        pass: 'xxxxxx'  //发送邮件的邮箱的密钥
    }
}));

// 2. 邮件的具体信息
const mailOptions = {
    from: '"小明" <xxx@xxx.com>',  //发送邮件的邮箱，与上面 user 相同
    to: 'xxx@xxx.com',  //接收邮件的邮箱，如有多个，用逗号隔开
    subject: '这是一封测试邮件',  //邮件标题
    html: '<p> 这是一封用nodejs的nodemailer发送的测试邮件。</p>' //邮件内容，可以为html
};

// 3. 发送邮件
transport.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});