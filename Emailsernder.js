const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'maminou@gmail.com',
        pass: '**************'
    }
});

const mailOptions = {
    from: 'maminou@gmail.com',
    to: 'maminoutest2@gmail.com',
    subject: 'test',
    text: 'test tesst test sah sah'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});